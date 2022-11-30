import React, { useEffect, useState } from 'react'
import MovieList from '../components/Home/MovieList'
import HomeCarousel from '../components/Home/HomeCarousel'
import MenuCinema from '../components/Home/MenuCinema'
import LoadingPage from './LoadingPage'
import { useDispatch, useSelector } from 'react-redux'
import {  getFilmList } from '../redux/reducers/FilmReducer'
import { LayHeThongRapChieu } from '../redux/reducers/CinemaReducer'
import { history } from '../utils/history'
import { LayDanhSachPhim } from '../services/FilmService'
import { LayThongTinLichChieuHeThongRap } from '../services/CinemaServiec'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const { arrFilm } = useSelector(state => state.FilmReducer)
    const { heThongRapChieu } = useSelector(state => state.CinemaReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        history.listen(() => {
            window.scrollTo(0, 0);
        });
        const callApiFilmList = async() => {
            try {
                const apiFilmList = await LayDanhSachPhim()
                dispatch(getFilmList(apiFilmList.data.content))
                setIsLoading(false)
            } catch (error) {
               console.log(error)
            }
        }
        callApiFilmList()
        const getApiHeThongRapChieu = async() => {
            try {
                const apiHeThongRap = await LayThongTinLichChieuHeThongRap()
                dispatch(LayHeThongRapChieu(apiHeThongRap.data.content))
            } catch (error) {
                console.log(error)
            }
        }
        getApiHeThongRapChieu()
    }, [])

    return (
        <div>
            {isLoading ? <LoadingPage /> : <>
                <HomeCarousel />
                <MovieList arrFilm={arrFilm} />
                <MenuCinema heThongRapChieu={heThongRapChieu} />
            </>}
        </div>
    )
}
