import React, { useState } from 'react'
import moment from 'moment';
import { LayThongTinLichChieu } from '../../services/FilmService';
import { useSelector } from 'react-redux';

export default function BookingTicketNow() {

    const { arrFilm } = useSelector(state => state.FilmReducer)

    const [arrCumRapSearch, setArrCumRapSearch] = useState(null)
    const [arrLichChieuPhimSearch, setArrLichChieuPhimSearch] = useState(null)

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
                    console.log(apiLichChieu.data.content.heThongRapChieu)
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
    )
}
