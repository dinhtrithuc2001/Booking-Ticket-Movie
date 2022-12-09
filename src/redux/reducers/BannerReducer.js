import { createSlice } from '@reduxjs/toolkit'
import avatar from '../../assets/img/avatar.jpg'
import onepiece from '../../assets/img/onepiece.jpg'
import pussInBoots from '../../assets/img/pussInBoots.jpg'

const initialState = {
    data: [
        {
            maBanner: 1,
            link: 'https://www.youtube.com/watch?v=rcpuVDA9JPY',
            img: avatar
        },
        {
            maBanner: 2,
            link: 'https://www.youtube.com/watch?v=7Ma1uab-bQM&t=4s',
            img: onepiece
        },
        {
            maBanner: 3,
            link: 'https://www.youtube.com/watch?v=fovTZDDPgAQ',
            img: pussInBoots
        },
    ],
    modalData: ''
}

const BannerReducer = createSlice({
    name: "BannerReducer",
    initialState,
    reducers: {
        getBannerMovie: (state, { type, payload }) => {
            return { ...state }
        },
        getModalVideo: (state, { type, payload }) => {
            const videoId = getId(payload)
            return { ...state, modalData: videoId }
        }
    }
});

export const { getBannerMovie, getModalVideo } = BannerReducer.actions

export default BannerReducer.reducer

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
        ? match[2]
        : null;
}