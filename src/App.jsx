import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import Header from './components/Header'
import PhotoCard from './components/PhotoCard'
import SearchBar from './components/SearchBar'
import useFetchPhotos from './hooks/useFetchPhotos'
import { favouritesReducer } from './reducers/favouritesReducer'

const FAVOURITES_STORAGE_KEY = 'celebrare-favourites'

function getInitialFavourites() {
  try {
    const savedFavourites = localStorage.getItem(FAVOURITES_STORAGE_KEY)

    if (!savedFavourites) {
      return []
    }
    const parsedFavourites = JSON.parse(savedFavourites)

    if (
      Array.isArray(parsedFavourites) &&
      parsedFavourites.every((id) => typeof id === 'string' || typeof id === 'number')
    ) {
      return parsedFavourites
    }

    return []

  } catch {
    return []
  }
}

function App() {
  const { photos, loading, error } = useFetchPhotos()
  const [searchTerm, setSearchTerm] = useState('')

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    getInitialFavourites
  )
  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value)
  }, [])
  const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      photoId,
    })
  }, [])

  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    if (!query) {
      return photos
    }
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    )

  }, [photos, searchTerm])

  useEffect(() => {
    localStorage.setItem(
      FAVOURITES_STORAGE_KEY,
      JSON.stringify(favourites)
    )
  }, [favourites])

  return (<div className="min-h-screen bg-gray-50"> <Header />

    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Explore Photos
        </h2>

        <p className="mt-2 text-gray-600">
          Browse a collection of photographs from different creators.
        </p>
      </div>

      <SearchBar
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {loading && (
        <div
          className="flex flex-col items-center justify-center py-20"
          role="status"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-gray-800" />

          <p className="mt-4 text-gray-600">
            Loading photos...
          </p>
        </div>
      )}

      {error && !loading && (
        <div
          className="rounded-lg border border-red-200 bg-red-50 p-5 text-center text-red-700"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <p className="mb-4 text-sm text-gray-600" aria-live="polite">
            Showing {filteredPhotos.length} of {photos.length} photos
          </p>

          {filteredPhotos.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  isFavourite={favourites.includes(photo.id)}
                  onToggleFavourite={handleToggleFavourite}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-gray-200 bg-white px-4 py-12 text-center">
              <p className="font-medium text-gray-800">
                No photos found
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try searching for a different author name.
              </p>
            </div>
          )}
        </>
      )}
    </main>
  </div>
  )
}
export default App