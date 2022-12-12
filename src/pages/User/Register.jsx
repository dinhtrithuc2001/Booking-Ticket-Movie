import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import useRoute from '../../hooks/useRoute';
import { kiemTraDinhDang, kiemTraDoDai, kiemTraRong } from '../../utils/validation';
import { SwalConfig } from '../../utils/config';
import { DangKy } from '../../services/UserService';
import { GROUPID } from '../../utils/constant';

export default function Register() {

    const {navigate} = useRoute()

    const [state, setState] = useState({
        nguoiDung: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maNhom: GROUPID
        },
        err: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: ''
        },
        isValid: true
    })
    const HandleChangeInput = (e) => {
        let { name, title, value } = e.target
        let { nguoiDung, err, isValid } = { ...state }

        isValid = true

        if (name == 'taiKhoan') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, /^\S*$/, 'không được có khoảng cách')
        }
        if (name == 'matKhau') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDoDai(value, err, name, title, 6, 50) && kiemTraDinhDang(value, err, name, title, /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/, 'phải có chữ thường, chữ hoa, số và ký tự đặc biệt')
        }
        if (name == 'hoTen') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
                "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
                "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", 'không được có số và ký tự đặc biệt')
        }
        if (name == 'email') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 'không hợp lệ')
        }
        if (name == 'soDt') {
            isValid &= kiemTraRong(value, err, name, title) && kiemTraDinhDang(value, err, name, title, /^[0-9]+$/, 'phải là số') && kiemTraDoDai(value, err, name, title, 10, 10)
        }

        nguoiDung[name] = value

        setState({ ...state, nguoiDung, err, isValid })
    }

    const callApiRegister = async (userRegister) => {
        try {
            await DangKy(userRegister)
            SwalConfig('Đăng ký thành công', 'success', false)
            navigate('/login')  
        } catch (error) {
            SwalConfig(error.response.data.content, 'error', true, 3000)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let { taiKhoan, matKhau, hoTen, email, soDt, maNhom } = state.nguoiDung
        if (taiKhoan !== '' && matKhau !== '' && hoTen !== '' && email !== '' && soDt !== '' && state.isValid == true) {
            callApiRegister(state.nguoiDung)
        }
        else {
            SwalConfig('Vui lòng điền đầy đủ thông tin', 'info', false)
        }
    }

    return (
        <div className='register mt-16'>
            <div className="register__overlay"></div>
            <form onSubmit={handleSubmit} className="form rounded-lg bg-white p-2 sm:px-8 sm:py-4 lg:py-6">
                <div className='text-center mb-4'>
                    <FontAwesomeIcon className='w-10 h-10 text-orange-500' icon={faCircleCheck} />
                    <h2 className='text-xl font-bold'>Đăng Ký</h2>
                </div>
                <div className="form-control">
                    <input onChange={HandleChangeInput} placeholder="none" type="text" name="taiKhoan" title='Tài khoản' className="form-input" autoComplete='off' />
                    <label className="form-label bg-white">Tài khoản</label>
                </div>
                <p className='form-err font-medium mb-4 mt-1 '>{state.err.taiKhoan}</p>
                <div className="form-control mt-5">
                    <input onChange={HandleChangeInput} placeholder="none" type="password" name="matKhau" title='Mật khẩu' className="form-input" autoComplete='off' />
                    <label className="form-label bg-white">Mật khẩu</label>
                </div>
                <p className='form-err font-medium mb-4 mt-1 '>{state.err.matKhau}</p>
                <div className="form-control mt-5">
                    <input onChange={HandleChangeInput} placeholder="none" type="text" name="hoTen" title='Họ tên' className="form-input" autoComplete='off' />
                    <label className="form-label bg-white">Họ tên</label>
                </div>
                <p className='form-err font-medium mb-4 mt-1 '>{state.err.hoTen}</p>
                <div className="form-control mt-5">
                    <input onChange={HandleChangeInput} placeholder="none" type="text" name="email" title='Email' className="form-input" autoComplete='off' />
                    <label className="form-label bg-white">Email</label>
                </div>
                <p className='form-err font-medium mb-4 mt-1 '>{state.err.email}</p>
                <div className="form-control mt-5">
                    <input onChange={HandleChangeInput} placeholder="none" type="text" name="soDt" title='Số diện thoại' className="form-input" autoComplete='off' />
                    <label className="form-label bg-white">Số điện thoại</label>
                </div>
                <p className='form-err font-medium mb-4 mt-1 '>{state.err.soDt}</p>
                <div className="my-2 mt-4">
                    <button className="w-full py-4 bg-red-600 text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg
                         focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Đăng Ký
                    </button>
                </div>
                <div className='text-right'>
                    <span onClick={() => navigate('/login')} className='text-black hover:text-black font-medium cursor-pointer'>
                        Bạn đã có tài khoản ? <span className='text-red-600'>Đăng nhập ngay !</span>
                    </span>
                </div>
            </form>
        </div>
    )
}
