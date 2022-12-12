import { Input, Form } from 'antd';
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {layDanhSachLoaiNguoiDung, ThemNguoiDung} from '../../../redux/reducers/UserReducer'
import { SwalConfig } from '../../../utils/config';


export default () => {

    const dispatch = useDispatch()
    const {danhSachLoaiNguoiDung } = useSelector(state => state.UserReducer)

    useEffect(()=> {
        dispatch(layDanhSachLoaiNguoiDung)
    },[])

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP00',
            maLoaiNguoiDung: 'KhachHang',
        },
        onSubmit: (value) => {
            let {taiKhoan, hoTen, email, matKhau, soDt} = value
            if(taiKhoan !== '' && hoTen !== '' && email !== '' && matKhau !== '' && soDt !== ''){
                dispatch(ThemNguoiDung(value))
            }
            else {
                SwalConfig('Vui lòng điền đầy đủ thông tin', 'error', true)
            }
        }
    })

    return (
        <div className='addFilmAdmin'>
            <h2 className='text-xl uppercase font-bold mb-4'>Thêm người dùng</h2>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
            >
                <Form.Item label="Tài khoản">
                    <Input autoComplete='off' name='taiKhoan' onChange={formik.handleChange}/>
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input autoComplete='off' name='hoTen' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input autoComplete='off' name='email' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input autoComplete='off' name='matKhau' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input autoComplete='off' name='soDt' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Loại người dùng">
                    <select name='maLoaiNguoiDung' className='border-2 border-gray-500 p-1 rounded-md' onChange={formik.handleChange}>
                        {danhSachLoaiNguoiDung?.map((item, index) => <option key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</option>)}
                    </select>
                </Form.Item>

                <Form.Item label="Tác vụ">
                    <button type='submit' className='border-2 border-orange-300 px-4 py-2 rounded-md hover:border-orange-500'>Thêm người dùng</button>
                </Form.Item>
            </Form>
        </div>
    );
};
