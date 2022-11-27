import React from 'react'
import MovieList from '../components/Home/MovieList'
import HomeCarousel from '../components/Home/HomeCarousel'
import MenuCinema from '../components/Home/MenuCinema'


export default function Home() {
    return (
        <div>
            <HomeCarousel />
            <MovieList />
            <MenuCinema />
        </div>
    )
}
