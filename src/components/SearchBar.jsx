function SearchBar({ value, onChange }) {
    return (<div className="mb-8"> <label
        htmlFor="author-search"
        className="mb-2 block text-sm font-medium text-gray-700"
    >
        Search by author </label>

        <div className="relative">
            <input
                id="author-search"
                type="search"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Enter an author name..."
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-gray-800 focus:ring-2 focus:ring-gray-200"
            />
        </div>
    </div>

    )
}

export default SearchBar