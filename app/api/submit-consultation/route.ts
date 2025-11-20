import { NextRequest, NextResponse } from 'next/server'

const AIRTABLE_TOKEN = process.env.AIRTABLE_API_TOKEN?.trim()
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID?.trim()
const AIRTABLE_TABLE_ID = process.env.AIRTABLE_TABLE_ID?.trim()

export async function POST(request: NextRequest) {
  console.log('[v0] Airtable config check for form submission:', {
    hasToken: !!AIRTABLE_TOKEN,
    hasBaseId: !!AIRTABLE_BASE_ID,
    hasTableId: !!AIRTABLE_TABLE_ID,
    tokenLength: AIRTABLE_TOKEN?.length || 0,
    baseIdValue: AIRTABLE_BASE_ID,
    tableIdValue: AIRTABLE_TABLE_ID,
  })

  if (!AIRTABLE_TOKEN) {
    return NextResponse.json(
      { error: 'AIRTABLE_API_TOKEN is missing from environment variables.' },
      { status: 500 }
    )
  }

  if (!AIRTABLE_BASE_ID) {
    return NextResponse.json(
      { error: 'AIRTABLE_BASE_ID is missing from environment variables.' },
      { status: 500 }
    )
  }

  if (!AIRTABLE_TABLE_ID || AIRTABLE_TABLE_ID === 'your_consultation_table_id_here') {
    return NextResponse.json(
      { 
        error: 'AIRTABLE_TABLE_ID is missing or not configured. You need to set the table ID for your consultation form submissions.',
        details: 'Create a table in Airtable for form submissions and set AIRTABLE_TABLE_ID in your .env.local file.'
      },
      { status: 500 }
    )
  }

  try {
    const { firstName, lastName, email, phone, problemAreas, message } = await request.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || problemAreas.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Map English internal values to Swedish display labels
    const problemAreaMap: Record<string, string> = {
      neck: 'Nacke- och Skuldervärk',
      back: 'Ländryggssmärta',
      upper_back: 'Övre Ryggsmärta',
      knee: 'Knäsmärta',
      hip: 'Höftsmärta',
      headache: 'Huvudvärk & Migrän',
      wrist: 'Handled & Handsmärta',
      sports_injury: 'Sportskador',
      general_wellness: 'Allmän Hälsa & Förebyggande',
      other: 'Övriga Problem'
    }

    const problemAreasSwedish = problemAreas.map((p: string) => problemAreaMap[p] || p)

    console.log('[v0] Submitting to Airtable:', {
      baseId: AIRTABLE_BASE_ID,
      tableId: AIRTABLE_TABLE_ID,
      email,
      problemsRaw: problemAreas,
      problemsMapped: problemAreasSwedish
    })

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                'Full Name': `${firstName.trim()} ${lastName.trim()}`.trim(),
                'Email': email,
                'Phone': phone,
                'Problems': problemAreasSwedish.join(', '),
                'Message': message || '',
                'Date': new Date().toISOString().split('T')[0],
                // Remove Status field for now to avoid permission issues
                // 'Status': 'New',
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.log('[v0] Airtable error:', error)
      console.log('[v0] Response status:', response.status)
      console.log('[v0] Response headers:', Object.fromEntries(response.headers.entries()))
      
      let errorMessage = 'Failed to save consultation request'
      try {
        const errorData = JSON.parse(error)
        if (errorData.error && errorData.error.message) {
          errorMessage = `Airtable error: ${errorData.error.message}`
        }
      } catch {
        // Error text is not JSON, use original message
      }
      
      return NextResponse.json(
        { 
          error: errorMessage,
          details: error,
          status: response.status
        },
        { status: 500 }
      )
    }

    const data = await response.json()
    console.log('[v0] Successfully saved to Airtable:', data.records[0].id)

    return NextResponse.json(
      { message: 'Consultation request submitted successfully', recordId: data.records[0].id },
      { status: 200 }
    )
  } catch (error) {
    console.log('[v0] API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
