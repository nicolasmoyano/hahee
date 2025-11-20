import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_TOKEN = process.env.AIRTABLE_API_TOKEN?.trim()
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID?.trim() || 'appJVo0IX1fy8h9Aw'
// Using your specific table ID
const AIRTABLE_IMAGES_TABLE_ID = process.env.AIRTABLE_IMAGES_TABLE_ID?.trim() || 'tblK6AI268KVkt3UG'
// Optional: Use specific view ID for filtered results
const AIRTABLE_VIEW_ID = process.env.AIRTABLE_VIEW_ID?.trim() || 'viw87oWZDAVVcpf0M'

export interface AirtableImageRecord {
  id: string
  fields: {
    Copy?: string // Your actual field name
    Images?: Array<{ // Your actual field name (plural)
      id: string
      url: string
      filename: string
      size: number
      type: string
      width?: number
      height?: number
      thumbnails?: {
        small?: { url: string; width: number; height: number }
        large?: { url: string; width: number; height: number }
        full?: { url: string; width: number; height: number }
      }
    }>
    Name?: string // Fallback field names
    Image?: Array<{
      id: string
      url: string
      filename: string
      size: number
      type: string
      thumbnails?: {
        small?: { url: string; width: number; height: number }
        large?: { url: string; width: number; height: number }
        full?: { url: string; width: number; height: number }
      }
    }>
    Description?: string
    Alt_Text?: string
    Category?: string
    Section?: string
    Active?: boolean
  }
}

export interface ProcessedImage {
  id: string
  name: string
  url: string
  thumbnails: {
    small?: string
    large?: string
    full?: string
  }
  description?: string
  altText?: string
  category?: string
}

export async function GET(request: NextRequest) {
  console.log('[API] Airtable config check:', {
    hasToken: !!AIRTABLE_TOKEN,
    hasBaseId: !!AIRTABLE_BASE_ID,
    hasImagesTableId: !!AIRTABLE_IMAGES_TABLE_ID,
    tokenLength: AIRTABLE_TOKEN?.length || 0,
    baseIdLength: AIRTABLE_BASE_ID?.length || 0,
  })

  if (!AIRTABLE_TOKEN) {
    return NextResponse.json(
      { 
        error: 'AIRTABLE_API_TOKEN environment variable is missing. Please set it in your .env.local file.',
        details: 'You need to add AIRTABLE_API_TOKEN=your_token_here to your environment variables. Get your token from https://airtable.com/developers/web/api/introduction',
        baseId: AIRTABLE_BASE_ID,
        tableId: AIRTABLE_IMAGES_TABLE_ID
      },
      { status: 500 }
    )
  }

  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = searchParams.get('limit')
    const recordId = searchParams.get('recordId')

    // Build the Airtable query
    const params = new URLSearchParams()
    
    // Priority: recordId > category > view
    if (recordId) {
      params.append('filterByFormula', `RECORD_ID() = "${recordId}"`)
    } else if (category) {
      // Filter by the Section field (mapped from category param)
      params.append('filterByFormula', `{Section} = "${category}"`)
    } else if (AIRTABLE_VIEW_ID) {
      params.append('view', AIRTABLE_VIEW_ID)
    }
    
    if (limit) {
      params.append('maxRecords', limit)
    }

    console.log('[API] Fetching images from Airtable:', {
      baseId: AIRTABLE_BASE_ID,
      tableId: AIRTABLE_IMAGES_TABLE_ID,
      viewId: AIRTABLE_VIEW_ID,
      category,
      limit,
      recordId,
    })

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_IMAGES_TABLE_ID}?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        // Cache for 5 minutes
        next: { revalidate: 300 }
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.log('[API] Airtable error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch images from Airtable' },
        { status: response.status }
      )
    }

    const data = await response.json()
    
    // Process the images data
    const processedImages: ProcessedImage[] = data.records
      .filter((record: AirtableImageRecord) => {
        // Check both possible field names
        const hasImages = (record.fields.Images && record.fields.Images.length > 0) || 
                         (record.fields.Image && record.fields.Image.length > 0)
        return hasImages
      })
      .map((record: AirtableImageRecord) => {
        // Use Images field first, then fall back to Image field
        const imageAttachment = record.fields.Images?.[0] || record.fields.Image?.[0]
        
        if (!imageAttachment) {
          throw new Error('No image attachment found')
        }
        
        return {
          id: record.id,
          name: record.fields.Copy || record.fields.Name || imageAttachment.filename,
          url: imageAttachment.url,
          thumbnails: {
            small: imageAttachment.thumbnails?.small?.url,
            large: imageAttachment.thumbnails?.large?.url,
            full: imageAttachment.thumbnails?.full?.url,
          },
          description: record.fields.Description,
          altText: record.fields.Alt_Text || record.fields.Copy || record.fields.Name || 'Image',
          category: record.fields.Section || record.fields.Category || record.fields.Copy,
        }
      })

    console.log('[API] Successfully fetched', processedImages.length, 'images from Airtable')

    return NextResponse.json(
      { 
        images: processedImages,
        count: processedImages.length 
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=86400'
        }
      }
    )
  } catch (error) {
    console.log('[API] Images fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error while fetching images' },
      { status: 500 }
    )
  }
}