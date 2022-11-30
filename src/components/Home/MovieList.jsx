import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import MultipleRowSlick from './MultipleRowSlick';
import BookingTicketNow from './BookingTicketNow';
import { useLocation } from 'react-router-dom';
import useRoute from '../../hooks/useRoute';


export default function MovieList(props) {
    const { arrFilm } = props
    const [keyword, setKeyword] = useState('')
    const {navigate} = useRoute()

    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location,])

    return (
        <div id='movie-list' className="movie-list container mx-auto md:px-8 lg:px-10">

            {/* Laptop */}
            <BookingTicketNow />
            <Tabs className='hidden md:block' defaultActiveKey="1" items={[
                { label: 'Phim đang chiếu', key: '1', children: <MultipleRowSlick status={false} arrFilm={arrFilm} /> },
                { label: 'Phim sắp chiếu', key: '2', children: <MultipleRowSlick status={true} arrFilm={arrFilm} /> },
            ]} />

            {/* Mobile */}
            <div className='block mt-16 sm:mt-8 md:mt-0 md:hidden'>
                <div className="relative mb-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input onChange={(e) => setKeyword(e.target.value)} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none border-none" placeholder="Nhập tên phim cần tìm" />
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4'>
                    {arrFilm.filter(item => {
                        if (keyword == '') {
                            return item
                        }
                        else {
                            let keyLower = keyword.toLocaleLowerCase()
                            let itemLower = item.tenPhim.toLocaleLowerCase()
                            return itemLower.includes(keyLower)
                        }
                    }).map((itemFilm, index) => <div key={index} className="rounded-md shadow-xl bg-gray-50 text-gray-800">
                        <img src={itemFilm.hinhAnh} alt={itemFilm.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/75/75' }} className="object-cover object-center w-full rounded-t-md h-44 sm:h-52 " />
                        <div className="flex flex-col justify-between p-4 ">
                            <h2 className="film-name-card-mobile font-semibold mb-2">{itemFilm.tenPhim.length > 22 ? itemFilm.tenPhim.toUpperCase().slice(0, 22) + '...' : itemFilm.tenPhim.toUpperCase()}</h2>
                            <button  onClick={()=> navigate(`detail/${itemFilm.maPhim}`)} className="flex items-center justify-center w-full p-2 sm:p-3 font-semibold rounded-md bg-yellow-500 text-gray-50">Đặt vé</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
