import { createSlice } from '@reduxjs/toolkit'
import { LayThongTinLichChieuHeThongRap } from '../../services/CinemaServiec';

const initialState = {
    heThongRapChieu: [],
}

const CinemaReducer = createSlice({
    name: 'CinemaReducer',
    initialState,
    reducers: {
        LayHeThongRapChieu: (state, {type, payload}) => {
            state.heThongRapChieu = payload
        }
    }
});

export const {LayHeThongRapChieu} = CinemaReducer.actions

export default CinemaReducer.reducer
