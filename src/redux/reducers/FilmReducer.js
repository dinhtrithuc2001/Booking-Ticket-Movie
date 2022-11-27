import { createSlice } from '@reduxjs/toolkit'
import { LayDanhSachPhim } from '../../services/FilmService';

const initialState = {
    arrFilm: [],

}

const FilmReducer = createSlice({
    name: "FilmReducer",
    initialState,
    reducers: {
        getFilmList: (state, { type, payload }) => {
            state.arrFilm = payload
        }
    }
});

export const { getFilmList } = FilmReducer.actions

export default FilmReducer.reducer

export const callApiFilmList = () => async (dispatch) => {
    try {
        const apiFilmList = await LayDanhSachPhim()
        dispatch(getFilmList(apiFilmList.data.content))
    } catch (error) {
        alert(error)
    }
}