import { createSlice } from '@reduxjs/toolkit'
// import { ThongTinLichChieu } from '../../_core/models/ThongTinPhongVe';

const ThongTinPhim = {
    maLichChieu: '',
    tenCumRap: '',
    tenRap : '',
    diaChi : '',
    tenPhim : '',
    hinhAnh : '',
    ngayChieu : '',
    gioChieu : ''
}

const Ghe = { 
    daDat : false,
    giaVe : '',
    loaiGhe : '',
    maGhe : '',
    maRap : '',
    stt : '',
    taiKhoanNguoiDat : '',
    tenGhe : ''
}

const initialState = {
    chiTietPhongVe: {
        thongTinPhim: ThongTinPhim,
        danhSachGhe: [],
    },
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [{maGhe:75561},]
}

const BookingReducer = createSlice({
    name: 'BookingReducer',
    initialState,
    reducers: {
        layDanhSachPhongVe: (state, { type, payload }) => {
            state.chiTietPhongVe = payload
        },
        datGhe: (state, {type, payload}) => {
            let gheDangChon = state.danhSachGheDangDat.find(item => item.maGhe == payload.maGhe)
            if(!gheDangChon){
                state.danhSachGheDangDat.push(payload)
            }
            else {
                state.danhSachGheDangDat = state.danhSachGheDangDat.filter(item => item.maGhe !== payload.maGhe)
            }
        },
        xoaDanhSachGheDangDat: (state, {type, payload}) => {
            state.danhSachGheDangDat = []
        },
    }
});

export const { layDanhSachPhongVe, datGhe, xoaDanhSachGheDangDat } = BookingReducer.actions

export default BookingReducer.reducer

