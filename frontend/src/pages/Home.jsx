import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState,useEffect } from 'react'
import '../css/Home.css'
import { searchMovies,getPopularMovies } from '../services/api'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadMovies = async () => {
            setLoading(true);
            try {
                const popular = await getPopularMovies();
                setMovies(popular);
            } catch (err) {
                console.error("Failed to fetch popular movies", err);
            } finally {
                setLoading(false);
            }
        };
        loadMovies();
    }, []);

    const HandleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        setLoading(true);
        try {
            const results = await searchMovies(searchQuery);
            setMovies(results);
        } catch (err) {
            console.error("Search failed", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='home'>
            <form onSubmit={HandleSearch} className='search-form'>
                <input
                    type="text" 
                    placeholder='search for movies'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    disabled={loading}
                />
                <button type="submit" className='search-button' disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>
            </form>
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className='movies-grid'>
                    {movies.map(movie =>
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ? (
                            <MovieCard movie={movie} key={movie.id} />
                        ) : null
                    )}
                </div>
            )}
        </div>
    );
}

export default Home