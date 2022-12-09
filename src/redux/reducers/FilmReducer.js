import { createSlice } from '@reduxjs/toolkit'
import { LayThongTinLichChieu } from '../../services/CinemaService';
import { capNhatPhimUpload, LayDanhSachPhim, LayThongTinPhimChiTiet, themPhimUpload, xoaPhim } from '../../services/FilmService';
import { SwalConfig } from '../../utils/config';
import {history} from '../../utils/history'

const initialState = {
    arrFilm: [],
    filmDetail : null,
    lichChieuTheoPhim: null,
    thongTinPhim: {}
}

const FilmReducer = createSlice({
    name: "FilmReducer",
    initialState,
    reducers: {
        getFilmList: (state, { type, payload }) => {
            state.arrFilm = payload
        },
        getfilmDetail : (state, {type, payload}) => {
            state.filmDetail = payload
        },
        getLichChieuTheoPhim: (state, {type, payload}) => {
            state.lichChieuTheoPhim = payload
        },
        layThongTinPhim: (state, {type, payload}) => {
            state.thongTinPhim = payload
        }
    }
});

export const { getFilmList, getfilmDetail,getLichChieuTheoPhim, layThongTinPhim } = FilmReducer.actions

export default FilmReducer.reducer


export const callApiLichChieuTheoPhim = (value) => async(dispatch) => {
    try {
        const apiLichChieu = await LayThongTinLichChieu(value)
        dispatch(getLichChieuTheoPhim(apiLichChieu.data.content))
    } catch (error) {
        console.log(error)
    }
}

export const callApiFilm = async(dispatch) => {
    try {
        const apiFilm = await LayDanhSachPhim()
        dispatch(getFilmList(apiFilm.data.content))
    } catch (error) {
        console.log(error)
    }
}

export const themPhimApi = async(formData) => {
    try {
        await themPhimUpload(formData)
        SwalConfig('Thêm phim thành công', 'success', true)
        history.push('/admin/film')
    } catch (error) {
        SwalConfig(`${error.response.data.content}`, 'error', true, 3000)
    }
}   


export const callApiThongTinPhim = (maPhim) => async (dispatch) => {
    try {
        const result = await LayThongTinPhimChiTiet(maPhim)
        dispatch(layThongTinPhim(result.data.content))
    } catch (error) {
        console.log(error)
    }
}


export const capNhatPhim = async(formData) => {
    try {
        await capNhatPhimUpload(formData)
        SwalConfig('Cập nhật thành công', 'success', true)
        history.push('/admin/film')
    } catch (error) {
        SwalConfig(`${error.response.data.content}`, 'error', true, 3000)
    }
}

export const callApiXoaPhim = (maPhim) => async(dispatch) => {
    try {
        const result = await xoaPhim(maPhim)
        dispatch(callApiFilm)
        SwalConfig(result.data.content, 'success', false)
        history.push('/admin/film')
    } catch (error) {
        SwalConfig(`${error.response.data.content}`, 'error', true, 3000)
    }
}