import React from 'react';
import { Tabs } from 'antd';
import moment from 'moment';
import useRoute from '../../hooks/useRoute';

export default function ShowtimeDetail(props) {

    const { heThongRapChieu } = props
    const {navigate} = useRoute()
    const renderDanhSachLichChieu = (itemRap) => {
        let danhSachLichChieu = [];
        itemRap.lichChieuPhim.map((itemLichChieu, iLichChieu) => {
            danhSachLichChieu.push({
                label: <button onClick={()=> navigate(`/booking/${itemLichChieu.maLichChieu}`)}  className="bg-gray-100 mt-[-1rem] hover:bg-gray-300 border-2 text-white font-bold py-2 px-4 rounded inline-block">
                    <span className='text-green-500'>
                        {moment(itemLichChieu.ngayChieuGioChieu).format("DD-MM-YYYY ~ ")}
                    </span>
                    <span className='text-orange-500'>
                        {moment(itemLichChieu.ngayChieuGioChieu).format("hh:mm A")}
                    </span>
                </button>,
                key: iLichChieu
            })
        })
        return danhSachLichChieu
    }

    const renderCumRap = (itemHeThongRap) => {
        let lstCumRap = [];
        itemHeThongRap.cumRapChieu.forEach((itemRap, iRap) => {
            lstCumRap.push({
                label: <div className='text-left border-b pb-4'>
                    <h2 className='text-green-500 font-bold text-base'>{itemRap.tenCumRap.length > 35 ? itemRap.tenCumRap.slice(0, 35) + '...' : itemRap.tenCumRap}</h2>
                    <h3 className='text-gray-500 font-semibold text-sm'>{itemRap.diaChi.length > 36 ? itemRap.diaChi?.slice(0, 36) + '...' : itemRap.diaChi}</h3>
                </div>, key: iRap, children: <Tabs
                    tabPosition='left'
                    defaultActiveKey="1"
                    items={renderDanhSachLichChieu(itemRap)} />
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

    return <>
        {heThongRapChieu.length ? <>
            {/* Laptop */}
            <div id='showtime' className='container hidden lg:block bg-white showtimeTab mb-8 mt-24 scroll-mt-[11rem]'>
                <Tabs
                    className='shadow-xl pt-3'
                    tabPosition='left'
                    defaultActiveKey="1"
                    items={renderHeThongRap()} />
            </div>
            {/* Mobile */}
            <div className='container block lg:hidden mt-4'>
                {heThongRapChieu?.map(itemHeThongRap => itemHeThongRap.cumRapChieu?.map((itemCumRap, iCumRap) => <div key={iCumRap}>
                    <h2 className='text-white bg-orange-400 my-2'>{itemCumRap.tenCumRap}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                        {itemCumRap.lichChieuPhim?.map((itemLich, iLich) =>
                            <button key={iLich} onClick={() => navigate(`/booking/${itemLich.maLichChieu}`)} className="bg-gray-100 hover:bg-gray-300 border-2 text-white font-bold py-1 rounded">
                            <span className='text-green-500'>
                                {moment(itemLich.ngayChieuGioChieu).format("DD-MM-YYYY ~ ")}
                            </span>
                            <span className='text-orange-500'>
                                {moment(itemLich.ngayChieuGioChieu).format("hh:mm A")}
                            </span>
                        </button>
                        )}
                    </div>
                </div>))}
            </div>
        </> : <h2 className='text-white text-center my-6 text-2xl'>Hiện tại không có lịch chiếu</h2>}
    </>
}