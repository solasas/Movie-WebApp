import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'

const Home = () => {
    const[searchQuery,setSearchQuery]=useState("");
    const movies=[{id:1,title:"john",release_date:2020},{id:2,title:"parx",release_date:2020},{id:3,title:"wick",release_date:2020}]
    const HandleSearch=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='home'>
        <form onSubmit={HandleSearch} className='search-form'>
            <input type="text"  placeholder='search for movies' className='search-input' 
            value={searchQuery}
            onChange={(e=>setSearchQuery(e.target.value))}/>
            <button type="submit" className='search-button'>Search</button>
        </form>
        <div className='movies-grid'>
            {movies.map(movie =>
movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
? <MovieCard movie={movie} key={movie.id} />
: null
)}
            </div>
    </div> 
  )
}

export default Home