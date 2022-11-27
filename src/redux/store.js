import { configureStore } from "@reduxjs/toolkit";
import BannerReducer from './reducers/BannerReducer'
import UserReducer from './reducers/UserReducer'
import FilmReducer from "./reducers/FilmReducer";
import CinemaReducer from "./reducers/CinemaReducer";

export const store = configureStore({
    reducer: {
        BannerReducer,
        UserReducer,
        FilmReducer,
        CinemaReducer
    }
})