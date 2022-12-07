import React, { useState } from 'react'
import moment from 'moment';
import { LayThongTinLichChieu } from '../../services/CinemaService';
import useRoute from '../../hooks/useRoute';
import { SwalConfig } from '../../utils/config';


export default function BookingTicketNow(props) {

    const { navigate } = useRoute()

    const [state, setState] = useState({
        danhSachDuLieu: {
            phim: props.arrFilm,
            rap: [],
            lichChieu: [],
        },
        lichChieuDangChon: ''
    })

    const layDanhSachCumRap = (heThongRap) => {
        const cumRapChieu = []
        heThongRap?.map(item => {
            item.cumRapChieu?.map(cumRap => {
                cumRapChieu.push(cumRap)
            })
        })
        return [...cumRapChieu]
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        const danhSachDuLieu = { ...state.danhSachDuLieu }

        if (name == 'phimDangChon') {
            const callApiLichChieuTheoPhim = async (value) => {
                try {
                    const apiLichChieu = await LayThongTinLichChieu(value)
                    danhSachDuLieu.rap = layDanhSachCumRap(apiLichChieu.data.content.heThongRapChieu)
                    danhSachDuLieu.lichChieu = []
                    setState({ ...state, danhSachDuLieu })
                } catch (error) {
                    danhSachDuLieu.rap = []
                    danhSachDuLieu.lichChieu = []
                    setState({ ...state, danhSachDuLieu })
                }
            }
            callApiLichChieuTheoPhim(value)
        }
        if (name == 'rapDangChon') {
            if (value !== 'Rạp') {
                danhSachDuLieu.lichChieu = JSON.parse(value)
                setState({ ...state, danhSachDuLieu, lichChieuDangChon: '' })
            }
            else {
                danhSachDuLieu.lichChieu = []
                setState({ ...state, danhSachDuLieu })
            }
        }

        if (name == 'lichChieuDangChon') {
            if (value !== 'Ngày giờ chiếu') {
                setState({ ...state, lichChieuDangChon: value })
            }
        }
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (state.lichChieuDangChon !== '' && state.lichChieuDangChon !== 'Ngày giờ chiếu') {
            navigate(`booking/${state.lichChieuDangChon}`)
        }
        else {
            SwalConfig('Vui lòng chọn đầy đủ thông tin', 'error', true)
        }
    }
    return (
        <div className=' bg-white rounded-lg shadow-2xl text-white py-7 px-8 w-full xl:w-3/4 mx-auto translate-y-[-50%] hidden md:block'>
            <form onSubmit={handleOnSubmit} className="grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7 gap-2">
                <select name='phimDangChon' onChange={handleChange} className='text-black border-2 rounded-md border-slate-600 cursor-pointer 2xl:col-span-2 h-[2.5rem]'>
                    <option defaultValue='Phim'>Phim</option>
                    {state.danhSachDuLieu.phim?.map((item, index) => <option key={index} value={item.maPhim}>{item.tenPhim}</option>)}
                </select>

                <select name='rapDangChon' onChange={handleChange} className='text-black border-2 rounded-md border-slate-600 cursor-pointer 2xl:col-span-2 h-[2.5rem]'>
                    <option defaultValue='Rạp'>Rạp</option>
                    {state.danhSachDuLieu.rap?.map((item, index) => {
                        return <option key={index} value={JSON.stringify(item.lichChieuPhim)}>{item.tenCumRap}</option>
                    })}
                </select>

                <select name='lichChieuDangChon' onChange={handleChange} id='maLichChieuPhim' className='text-black border-2 rounded-md border-slate-600 cursor-pointer 2xl:col-span-2 h-[2.5rem]'>
                    <option defaultValue='Ngày giờ chiếu' >Ngày giờ chiếu</option>
                    {state.danhSachDuLieu.lichChieu?.map((item, index) => <option key={index} value={item.maLichChieu}>{moment(item.ngayChieuGioChieu
                    ).format('DD-MM-YYYY ~ hh:mm A')}</option>)}
                </select>

                <button className='p-2 bg-orange-400 rounded-md font-semibold tracking-wide h-[2.5rem]'>Đặt Vé Nhanh</button>
            </form>
        </div>
    )
}
