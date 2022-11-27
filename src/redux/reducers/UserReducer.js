import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}

const UserReducer = createSlice({
    name: "UserReducer",
    initialState,
    reducers: {
        UserLogin: (state, { type, payload }) => {
            state.isLogin = payload
        }
    }
});

export const {UserLogin} = UserReducer.actions

export default UserReducer.reducer
