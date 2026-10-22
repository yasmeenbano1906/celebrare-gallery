function PhotoCard({ photo, isFavourite, onToggleFavourite }) {

    return (<article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
        <img
            src={`https://picsum.photos/id/${photo.id}/600/400`}
            alt={`Photo by ${photo.author}`}
            className="h-56 w-full object-cover"
            loading="lazy"
        />

        <div className="flex items-center justify-between gap-3 p-4">
            <p className="truncate font-medium text-gray-800">
                {photo.author}
            </p>

            <button
                type="button"
                onClick={() => onToggleFavourite(photo.id)}
                aria-label={
                    isFavourite
                        ? `Remove photo by ${photo.author} from favourites`
                        : `Add photo by ${photo.author} to favourites`
                }
                aria-pressed={isFavourite}
                className="shrink-0 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={isFavourite ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className={`h-6 w-6 ${isFavourite ? 'text-red-500' : 'text-gray-500'
                        }`}
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"
                    />
                </svg>
            </button>
        </div>
    </article>
    )
}

export default PhotoCard