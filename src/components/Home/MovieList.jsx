import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { callApiFilmList } from '../../redux/reducers/FilmReducer';
import MultipleRowSlick from './MultipleRowSlick';
import axios from 'axios';
import moment from 'moment';
import { LayThongTinLichChieu } from '../../services/FilmService';

export default function MovieList() {
    const dispatch = useDispatch()
    const { arrFilm } = useSelector(state => state.FilmReducer)
    const [arrCumRapSearch, setArrCumRapSearch] = useState(null)
    const [arrLichChieuPhimSearch, setArrLichChieuPhimSearch] = useState(null)
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        dispatch(callApiFilmList())
    }, [])

    const layDanhSachCumRap = (heThongRap) => {
        const cumRapChieu = []
        heThongRap?.map(item => {
            item.cumRapChieu?.map(cumRap => {
                cumRapChieu.push(cumRap)
            })
        })
        return [...cumRapChieu]
    }

    const handleChangeFilmSearch = (e) => {
        if (e.target.value == 'Phim') {
            setArrCumRapSearch(null)
            setArrLichChieuPhimSearch(null)
        }
        else {
            const callApiLichChieuTheoPhim = async (value) => {
                try {
                    const apiLichChieu = await LayThongTinLichChieu(value)
                    setArrCumRapSearch(null)
                    setArrLichChieuPhimSearch(null)
                    setArrCumRapSearch(layDanhSachCumRap(apiLichChieu.data.content.heThongRapChieu))
                } catch (error) {
                    console.log(error)
                }
            }
            callApiLichChieuTheoPhim(e.target.value)
        }
    };

    const handleChangeCumRap = (e) => {
        if (e.target.value == 'Rạp') {
            setArrLichChieuPhimSearch(null)
        } else {
            setArrLichChieuPhimSearch(JSON.parse(e.target.value))
        }
    }

    const handleBookingNow = () => {
        alert(document.getElementById('maLichChieuPhim').value)
    }


    return (
        <div className="movie-list container mx-auto md:px-8 lg:px-10">
            <div className=' bg-white rounded-lg shadow-2xl text-white py-7 px-8 w-full xl:w-3/4 mx-auto translate-y-[-50%] hidden md:block'>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7 gap-2">
                    <select onChange={handleChangeFilmSearch} className='text-black border-2 rounded-md border-slate-600 cursor-pointer 2xl:col-span-2 h-[2.5rem]'>
                        <option defaultValue='Phim'>Phim</option>
                        {arrFilm?.map((item, index) => <option key={index} value={item.maPhim}>{item.tenPhim}</option>)}
                    </select>

                    <select onChange={handleChangeCumRap} className='text-black border-2 rounded-md border-slate-600 cursor-pointer 2xl:col-span-2 h-[2.5rem]'>
                        <option defaultValue='Rạp'>Rạp</option>
                        {arrCumRapSearch?.map((item, index) => {
                            return <option key={index} value={JSON.stringify(item.lichChieuPhim)}>{item.tenCumRap}</option>
                        })}
                    </select>

                    <select id='maLichChieuPhim' className='text-black border-2 rounded-md border-slate-600 cursor-pointer 2xl:col-span-2 h-[2.5rem]'>
                        <option defaultValue='Ngày giờ chiếu' >Ngày giờ chiếu</option>
                        {arrLichChieuPhimSearch?.map((item, index) => <option key={index} value={item.maLichChieu}>{moment(item.ngayChieuGioChieu
                        ).format('DD-MM-YYYY ~ hh:mm A')}</option>)}
                    </select>

                    <button onClick={handleBookingNow} className='p-2 bg-orange-400 rounded-md font-semibold tracking-wide h-[2.5rem]'>Đặt Vé Nhanh</button>
                </div>
            </div>
            <Tabs className='hidden md:block' defaultActiveKey="1">
                <Tabs.TabPane tab="Phim đang chiếu" key="1">
                    <MultipleRowSlick status={false} arrFilm={arrFilm} />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Phim sắp chiếu" key="2">
                    <MultipleRowSlick status={true} arrFilm={arrFilm} />
                </Tabs.TabPane>
            </Tabs>
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
                            <button type="button" className="flex items-center justify-center w-full p-2 sm:p-3 font-semibold rounded-md bg-yellow-500 text-gray-50">Đặt vé</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
