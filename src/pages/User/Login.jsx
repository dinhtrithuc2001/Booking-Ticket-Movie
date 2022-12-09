import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import useRoute from '../../hooks/useRoute'
import { kiemTraRong, kiemTraDinhDang, kiemTraDoDai } from '../../utils/validation';
import { getLocalStorage, setLocalStorage, SwalConfig } from '../../utils/config';
import { useDispatch } from 'react-redux';
import { setStatusLogin } from '../../redux/reducers/UserReducer';
import { history } from '../../utils/history'
import { DangNhap } from '../../services/UserService';
import { LOCALSTORAGE_USER } from '../../utils/constant';
import NotFound from '../NotFound';


export default function Login() {

    const dispatch = useDispatch()

    const { navigate } = useRoute()

    const [state, setState] = useState({
        nguoiDung: {
            taiKhoan: '',
            matKhau: ''
        },
        err: {
            taiKhoan: '',
            matKhau: ''
        },
        isValid: true
    })
    const callApiLogin = async (userLogin) => {
        try {
            const apiLogin = await DangNhap(userLogin)
            setLocalStorage(LOCALSTORAGE_USER, apiLogin.data.content)
            dispatch(setStatusLogin(true))
            SwalConfig('Đăng nhập thành công', 'success', false)
            history.replace({ pathname: '/' })
        } catch (error) {
            SwalConfig(error.response.data.content, 'error', true, 3000)
        }
    }

    const HandleChangeInput = (e) => {
        let { name, title, value } = e.target
        let { nguoiDung, err, isValid } = { ...state }
        isValid = true

        if (name == 'taiKhoan') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, /^\S*$/, 'không được có khoảng cách')
        }

        if (name == 'matKhau') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDoDai(value, err, name, title, 6, 50)
        }

        nguoiDung[name] = value

        setState({ ...state, nguoiDung, err, isValid })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let { taiKhoan, matKhau } = state.nguoiDung
        if (taiKhoan !== '' && matKhau !== '' && state.isValid == true) {
            callApiLogin(state.nguoiDung)
        } else {
            SwalConfig('Vui lòng điền đầy đủ thông tin', 'info', false)
        }
    }

    return (
        <>
            {getLocalStorage(LOCALSTORAGE_USER) ? <NotFound /> : <div className='login'>
                <div className='login__overlay'></div>
                <form onSubmit={handleSubmit} className="form rounded-lg bg-white p-2 sm:p-4  md:p-8">
                    <div className='text-center mb-6'>
                        <FontAwesomeIcon className='w-10 h-10 text-orange-500' icon={faCircleUser} />
                        <h2 className='text-xl font-bold'>Đăng Nhập</h2>
                    </div>
                    <div className="form-control">
                        <input placeholder="none" title='Tài khoản' onChange={HandleChangeInput} type="text" name="taiKhoan" className="form-input" autoComplete='off' />
                        <label className="form-label bg-white">Tài khoản</label>
                    </div>
                    <p className='form-err font-medium mb-4 mt-1'>{state.err.taiKhoan}</p>
                    <div className="form-control mt-6">
                        <input placeholder="none" title='Mật khẩu' onChange={HandleChangeInput} id='matKhau' type="password" name="matKhau" className="form-input" autoComplete='off' />
                        <label className="form-label bg-white">Mật khẩu</label>
                    </div>
                    <p className='form-err font-medium mb-4 mt-1'>{state.err.matKhau}</p>
                    <div className="my-2 mt-4">
                        <button className="w-full py-4 bg-red-600 text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg
                         focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Đăng Nhập
                        </button>
                    </div>
                    <div className='text-right'>
                        <span onClick={() => navigate('/register')} className='text-black hover:text-black font-medium cursor-pointer'>
                            Bạn chưa có tài khoản ? <span className='text-red-600'>Đăng ký ngay !</span>
                        </span>
                    </div>
                </form>
            </div>}
        </>
    )
}
