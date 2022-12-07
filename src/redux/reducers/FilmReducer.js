import { createSlice } from '@reduxjs/toolkit'
import { LayThongTinLichChieu } from '../../services/CinemaService';

const initialState = {
    arrFilm: [],
    filmDetail : null,
    lichChieuTheoPhim: null
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
        }
    }
});

export const { getFilmList, getfilmDetail,getLichChieuTheoPhim } = FilmReducer.actions

export default FilmReducer.reducer


export const callApiLichChieuTheoPhim = (value) => async(dispatch) => {
    try {
        const apiLichChieu = await LayThongTinLichChieu(value)
        dispatch(getLichChieuTheoPhim(apiLichChieu.data.content))
    } catch (error) {
        console.log(error)
    }
}