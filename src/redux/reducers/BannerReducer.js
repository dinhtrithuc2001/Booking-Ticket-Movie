import { createSlice } from '@reduxjs/toolkit'
import avatar from '../../assets/img/avatar.jpg'
import onepiece from '../../assets/img/onepiece.jpg'
import pussInBoots from '../../assets/img/pussInBoots.jpg'

const initialState = {
    data: [
        {
            maBanner: 1,
            link: 'https://www.youtube.com/embed/rcpuVDA9JPY',
            img: avatar
        },
        {
            maBanner: 2,
            link: 'https://www.youtube.com/embed/7Ma1uab-bQM',
            img: onepiece
        },
        {
            maBanner: 3,
            link: 'https://www.youtube.com/embed/fovTZDDPgAQ',
            img: pussInBoots
        },
    ],
    modalData: ''
}

const BannerReducer = createSlice({
    name: "BannerReducer",
    initialState,
    reducers: {
        getBannerMovie: (state , {type, payload}) => {
            return {...state}
        },
        getModalVideo: (state, {type, payload}) => {
            return {...state,modalData: payload }
        }
    }
});

export const { getBannerMovie, getModalVideo } = BannerReducer.actions

export default BannerReducer.reducer