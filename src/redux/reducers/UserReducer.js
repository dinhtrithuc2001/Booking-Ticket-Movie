import { createSlice } from '@reduxjs/toolkit'
import { LayThongTinTaiKhoan } from '../../services/UserService';
import { removeLocalStorage } from '../../utils/config';
import { LOCALSTORAGE_USER } from '../../utils/constant';

const initialState = {
    isLogin: false,
    thongTinNguoiDung:{},
}

const UserReducer = createSlice({
    name: "UserReducer",
    initialState,
    reducers: {
        setStatusLogin: (state, { type, payload }) => {
            state.isLogin = payload
        },
        setUserInfor: (state, {type, payload}) => {
            state.thongTinNguoiDung = payload
        },
      
    }
});

export const {setStatusLogin, setUserInfor} = UserReducer.actions

export default UserReducer.reducer

export const callApiThongTinNguoiDung = async(dispatch) => {
    try {
        const apiNguoiDung = await LayThongTinTaiKhoan()
        dispatch(setStatusLogin(true))
        dispatch(setUserInfor(apiNguoiDung.data.content))
    } catch (error) {
        removeLocalStorage(LOCALSTORAGE_USER)
    }
}
