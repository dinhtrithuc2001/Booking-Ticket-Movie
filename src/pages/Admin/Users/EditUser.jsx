import { Input, Form } from 'antd';
import React, { useEffect }  from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import useRoute from '../../../hooks/useRoute';
import { callApiThongTinNguoiDungEdit, capNhatNguoiDung, layDanhSachLoaiNguoiDung } from '../../../redux/reducers/UserReducer';
import { SwalConfig } from '../../../utils/config';

export default () => {

    const { thongTinNguoiDungEdit, danhSachLoaiNguoiDung } = useSelector(state => state.UserReducer)

    const dispatch = useDispatch()
    const { param } = useRoute()

    useEffect(() => {
        dispatch(callApiThongTinNguoiDungEdit(param.taiKhoan))
        dispatch(layDanhSachLoaiNguoiDung)
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinNguoiDungEdit.taiKhoan,
            hoTen: thongTinNguoiDungEdit.hoTen,
            matKhau: thongTinNguoiDungEdit.matKhau,
            email: thongTinNguoiDungEdit.email,
            soDt: thongTinNguoiDungEdit.soDT,
            maNhom: thongTinNguoiDungEdit.maNhom,
            maLoaiNguoiDung: thongTinNguoiDungEdit.maLoaiNguoiDung
        },
        onSubmit: (value) => {
            let {taiKhoan,hoTen, matKhau, maLoaiNguoiDung, maNhom, email, soDt} = value
            if(taiKhoan !== '' && hoTen !== '' && email !== '' && matKhau !== '' && soDt !== ''){
                dispatch(capNhatNguoiDung(value))
            }
            else {
                SwalConfig('Vui lòng điền đầy đủ thông tin', 'error', true)
            }
        }
    })

    return (
        <div className='addFilmAdmin'>
            <h2 className='text-xl uppercase font-bold mb-4'>Edit User</h2>
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
                    <Input autoComplete='off' name='taiKhoan' value={formik.values.taiKhoan} readOnly />
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input autoComplete='off' name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} />
                </Form.Item>
                <Form.Item label="Email">
                    <Input autoComplete='off' name='email' onChange={formik.handleChange} value={formik.values.email} />
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input autoComplete='off' name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
                </Form.Item>
                <Form.Item label="Số điện thoại">
                    <Input autoComplete='off' name='soDt' onChange={formik.handleChange} value={formik.values.soDt} />
                </Form.Item>
                <Form.Item label="Loại người dùng">
                    <select name='maLoaiNguoiDung' value={formik.values.maLoaiNguoiDung} className='border-2 border-gray-500 p-1 rounded-md' onChange={formik.handleChange}>
                        {danhSachLoaiNguoiDung?.map((item, index) => {
                            if (item.maLoaiNguoiDung == formik.values.maLoaiNguoiDung) {
                                return <option selected={true} key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</option>
                            }
                            else {
                                return <option key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</option>
                            }
                        })}
                    </select>
                </Form.Item>

                <Form.Item label="Tác vụ">
                    <button type='submit' className='border-2 border-orange-300 px-4 py-2 rounded-md hover:border-orange-500'>Cập nhật người dùng</button>
                </Form.Item>
            </Form>
        </div>
    );
};
