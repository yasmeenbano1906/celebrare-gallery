# Celebrare Gallery — React Internship Assignment

A responsive photo gallery developed as part of the Celebrare React internship screening assignment. The application fetches photos from the Picsum Photos API and provides real-time author search and persistent favourites.

## Assignment Requirements & Implementation

The project addresses the following requirements specified in the assignment.

| Requirement             | Implementation                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| React with Vite         | Built using React and Vite.                                                                          |
| Tailwind CSS            | Used for styling and responsive layouts.                                                             |
| Fetch 30 photos         | Fetches 30 photos from the Picsum Photos API when the application loads.                             |
| Loading indicator       | Displays a loading spinner while photos are being fetched.                                           |
| Error handling          | Displays an error message if the API request fails.                                                  |
| Responsive photo grid   | Four columns on desktop, two on tablet, and one on mobile.                                           |
| Photo cards             | Each card displays a photo, its author's name, and a favourite button.                               |
| Real-time author search | Filters the fetched photos by author name as the user types, without making additional API requests. |
| Favourites management   | Uses React's `useReducer` to add and remove favourite photo IDs.                                     |
| Persistent favourites   | Saves favourite IDs in `localStorage`, preserving them across page refreshes.                        |
| Custom React hook       | `useFetchPhotos` manages photo fetching, loading, and error states.                                  |
| `useCallback`           | Memoizes the search handler to maintain a stable function reference.                                 |
| `useMemo`               | Memoizes the filtered photo list based on the photos and search term.                                |
| Functional components   | Uses reusable React functional components and hooks.                                                 |

## Features

* Fetches and displays 30 photographs.
* Searches authors instantly with case-insensitive matching.
* Displays a helpful message when no photos match the search.
* Adds and removes photos from favourites using interactive heart buttons.
* Persists favourite selections using browser local storage.
* Provides loading and error states for API requests.
* Adapts the layout to mobile, tablet, and desktop screens.
* Uses reusable components and a custom hook to keep the code organized.

## Technology Stack

* **Frontend:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **API:** Picsum Photos API
* **State Management:** React `useReducer` and `useState`
* **React Hooks:** `useEffect`, `useCallback`, `useMemo`, and `useReducer`
* **Browser Storage:** `localStorage`

No additional UI component library is used.

## Project Structure

```text
celebrare-gallery/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── PhotoCard.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favouritesReducer.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

* Node.js
* npm

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/yasmeenbano1906/celebrare-gallery.git
```

**2. Navigate to the project directory**

```bash
cd celebrare-gallery
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

To verify and build the application for production:

```bash
npm run build
```

## API Reference

The application retrieves its photo data from:

https://picsum.photos/v2/list?limit=30

Author search operates on the photos already fetched by the application.

## Author

Developed as part of the Celebrare React internship screening assignment.
