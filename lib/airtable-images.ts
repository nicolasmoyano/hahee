import React from 'react'
import { ProcessedImage } from '@/app/api/images/route'

export interface ImageFetchOptions {
  category?: string
  limit?: number
  recordId?: string
}

export interface ImageFetchResponse {
  images: ProcessedImage[]
  count: number
}

/**
 * Fetches images from Airtable via our API endpoint
 */
export async function fetchAirtableImages(options: ImageFetchOptions = {}): Promise<ProcessedImage[]> {
  try {
    const params = new URLSearchParams()
    
    if (options.recordId) {
      params.append('recordId', options.recordId)
    } else {
      if (options.category) {
        params.append('category', options.category)
      }
      if (options.limit) {
        params.append('limit', options.limit.toString())
      }
    }

    const url = `/api/images${params.toString() ? `?${params.toString()}` : ''}`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }))
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
    }

    const data: ImageFetchResponse = await response.json()
    return data.images
  } catch (error) {
    console.error('Error fetching images from Airtable:', error)
    throw error
  }
}

/**
 * Gets the best available image URL based on preferred size
 */
export function getBestImageUrl(image: ProcessedImage, preferredSize: 'small' | 'large' | 'full' = 'large'): string {
  // Try to get the preferred size first
  if (image.thumbnails[preferredSize]) {
    return image.thumbnails[preferredSize]!
  }
  
  // Fallback order: large -> full -> small -> original
  if (preferredSize !== 'large' && image.thumbnails.large) {
    return image.thumbnails.large
  }
  
  if (preferredSize !== 'full' && image.thumbnails.full) {
    return image.thumbnails.full
  }
  
  if (preferredSize !== 'small' && image.thumbnails.small) {
    return image.thumbnails.small
  }
  
  // Final fallback to original URL
  return image.url
}

/**
 * Hook for fetching images with loading and error states
 */
export function useAirtableImages(options: ImageFetchOptions = {}) {
  const [images, setImages] = React.useState<ProcessedImage[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const { category, limit, recordId } = options

  React.useEffect(() => {
    let isMounted = true

    const loadImages = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const fetchedImages = await fetchAirtableImages({ category, limit, recordId })
        
        if (isMounted) {
          setImages(fetchedImages)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load images')
          setImages([]) // Clear images on error
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadImages()

    return () => {
      isMounted = false
    }
  }, [category, limit, recordId])

  return { images, loading, error }
}