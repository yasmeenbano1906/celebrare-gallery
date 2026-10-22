import { useEffect, useState } from 'react'

const PHOTOS_API_URL = 'https://picsum.photos/v2/list?limit=30'

function useFetchPhotos() {
const [photos, setPhotos] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
const controller = new AbortController()

async function fetchPhotos() {
  try {
    const response = await fetch(PHOTOS_API_URL, {
      signal: controller.signal,
    })

    if (!response.ok) {
      throw new Error('Failed to fetch photos. Please try again.')
    }

    const data = await response.json()
    setPhotos(data)
  } catch (err) {
    if (err.name !== 'AbortError') {
      setError(err.message || 'Something went wrong while fetching photos.')
    }
  } finally {
    if (!controller.signal.aborted) {
      setLoading(false)
    }
  }
}

fetchPhotos()

return () => {
  controller.abort()
}

}, [])

return { photos, loading, error }
}

export default useFetchPhotos