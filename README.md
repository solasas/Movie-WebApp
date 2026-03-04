# Movie WebApp

A simple React application that lets users browse and search for movies using **The Movie Database (TMDb)** API. Built with Vite for fast development and styled with plain CSS.

## Features

- Display a grid of popular movies on load
- Search for movies by title using TMDb search endpoint
- Client-side filtering based on search query
- Movie cards with poster, title, and release date
- Loading indicator while fetching data
- Responsive layout with CSS grid

## Tech Stack

- React 18 (JSX/functional components)
- Vite (build tooling)
- Fetch API for network requests
- TMDb API for movie data
- Plain CSS for styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 14+ or later
- A TMDb API key (free, sign up at https://www.themoviedb.org/)

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/username/movie-webapp.git
   cd movie-webapp/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory (optional) and set your API key:

   ```env
   VITE_TMDB_KEY=your_api_key_here
   ```

   The code currently uses a hard‑coded key in `src/services/api.js`; update that file or use environment variables as needed.

### Running the App

Start the development server:

```bash
npm run dev
```

Open http://localhost:5173 (or the port shown in the terminal) to view the app.

### Build for Production

```bash
npm run build
```

The production files will be generated in `dist/`.

## Folder Structure

```
frontend/
  ├─ public/
  ├─ src/
  │   ├─ assets/
  │   ├─ components/
  │   │   └─ MovieCard.jsx
  │   ├─ css/
  │   ├─ pages/
  │   │   ├─ Home.jsx
  │   │   └─ Favorites.jsx
  │   ├─ services/
  │   │   └─ api.js
  │   ├─ App.jsx
  │   └─ main.jsx
  ├─ package.json
  └─ vite.config.js
```

## Customization

- Modify `src/services/api.js` to handle authentication or base URL changes.
- Style components by editing the CSS files in `src/css`.

## License

This project is open‑source and available under the [MIT License](LICENSE).

---

Feel free to contribute or open issues if you have suggestions!
