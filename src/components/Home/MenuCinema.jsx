import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getApiHeThongRapChieu } from '../../redux/reducers/CinemaReducer';
import moment from 'moment';

export default function MenuCinema() {
    const dispatch = useDispatch()
    const heThongRapChieu = useSelector(state => state.CinemaReducer.heThongRapChieu)

    useEffect(() => {
        dispatch(getApiHeThongRapChieu())
    }, [])

    const renderDanhSachPhim = (itemRap) => {
        let danhSachPhim = [];
        itemRap.danhSachPhim.forEach((itemPhim, iPhim) => {
            let ngayChieu = []
            itemPhim.lstLichChieuTheoPhim.forEach((itemLichChieu, i) => {
                ngayChieu.push(itemLichChieu.ngayChieuGioChieu)
            })
            danhSachPhim.push({
                label: <div className='flex border-b pb-4'>
                    <div className='mr-4'>
                        <img className='h-full w-24' src={itemPhim.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/75/75' }} />
                    </div>
                    <div>
                        <h2 className='font-bold text-left mb-2 text-sm uppercase'><span className='bg-red-600 p-1 rounded-md text-white text-sm'>{itemPhim.hot == true ? "C18" : "C16"}</span> {itemPhim.tenPhim}</h2>
                        <div className='grid grid-cols-2 gap-1'>
                            {ngayChieu?.slice(0, 4).map((itemNgayChieu, indexNgayChieu) =>
                                <button onClick={()=>alert(itemPhim.tenPhim)} key={indexNgayChieu} className="bg-gray-100 hover:bg-gray-300 border-2 text-white font-bold py-2 px-4 rounded">
                                    <span className='text-green-500'>
                                        {moment(itemNgayChieu).format("DD-MM-YYYY ~ ")}
                                    </span>
                                    <span className='text-orange-500'>
                                        {moment(itemNgayChieu).format("hh:mm A")}
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>,
                key: iPhim, children: null
            })
        })
        return danhSachPhim
    }

    const renderCumRap = (itemHeThongRap) => {
        let lstCumRap = [];
        itemHeThongRap.lstCumRap.forEach((itemRap, iRap) => {
            lstCumRap.push({
                label: <div className='text-left border-b pb-4'>
                    <h2 className='text-green-500 font-bold text-base'>{itemRap.tenCumRap.length > 35 ? itemRap.tenCumRap.slice(0,35) + '...' : itemRap.tenCumRap}</h2>
                    <h3 className='text-gray-500 font-semibold text-sm'>{itemRap.diaChi.length > 36 ? itemRap.diaChi?.slice(0, 36) + '...' : itemRap.diaChi}</h3>
                </div>, key: iRap, children: <Tabs
                    tabPosition='left'
                    defaultActiveKey="1"
                    items={renderDanhSachPhim(itemRap)} />
            })
        })
        return lstCumRap
    }

    const renderHeThongRap = () => {
        let heThongRap = [];
        heThongRapChieu.forEach((itemHeThongRap, iHeThong) => {
            heThongRap.push({
                label: <img height={50} width={50} src={itemHeThongRap.logo}></img>, key: iHeThong, children: <Tabs
                    tabPosition='left'
                    defaultActiveKey="1"
                    items={renderCumRap(itemHeThongRap)} />
            })
        })
        return heThongRap
    }

    return <div className='container MenuCinemaTabs hidden lg:block my-8 2xl:px-10'>
        <Tabs
            className='shadow-xl pt-3'
            tabPosition='left'
            defaultActiveKey="1"
            items={renderHeThongRap()} />
    </div>;
}