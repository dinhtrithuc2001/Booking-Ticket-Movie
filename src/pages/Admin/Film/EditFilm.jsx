import {DatePicker,Form,Input,InputNumber,Switch} from 'antd';
import React from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import { useState } from 'react';
import { callApiThongTinPhim, capNhatPhim } from '../../../redux/reducers/FilmReducer';
import { useDispatch, useSelector } from 'react-redux';
import { GROUPID } from '../../../utils/constant';
import { useEffect } from 'react';
import useRoute from '../../../hooks/useRoute';

export default () => {

    const { thongTinPhim } = useSelector(state => state.FilmReducer)
    const [imgSrc, setImgSrc] = useState('')
    const dispatch = useDispatch()
    const { param } = useRoute()
    const dateFormat = 'DD/MM/YYYY';
    useEffect(() => {
        dispatch(callApiThongTinPhim(param.id))
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: thongTinPhim.maPhim,
            tenPhim: thongTinPhim.tenPhim,
            trailer: thongTinPhim.trailer,
            moTa: thongTinPhim.moTa,
            ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
            dangChieu: thongTinPhim.dangChieu,
            sapChieu: thongTinPhim.sapChieu,
            hot: false,
            danhGia: thongTinPhim.danhGia,
            hinhAnh: null,
            maNhom: GROUPID
        },
        onSubmit: (value) => {
            console.log(value)
            // tạo đối tượng formData
            let formData = new FormData()
            for (let key in value) {
                if (key !== 'hinhAnh') {
                    formData.append(key, value[key])
                }
                else {
                    if(value.hinhAnh !== null){
                        formData.append('File', value.hinhAnh, value.hinhAnh.name)
                    }
                }
            }
            // cập nhật phim upload
            dispatch(capNhatPhim(formData))
        }
    })

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeFile = (e) => {
        // lấy ra file từ e
        let file = e.target.files[0]

        if (file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/gif') {
            // tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                setImgSrc(e.target.result) // hình có định dạng là base 64
            }
            formik.setFieldValue('hinhAnh', file)
        }
    }

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value)
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }
    return (
        <div className='addFilmAdmin'>
            <h2 className='text-xl uppercase font-bold mb-4'>Edit Phim</h2>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
            >
                <Form.Item label="Tên phim">
                    <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} format={dateFormat} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked" >
                    <Switch onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber onChange={value => formik.setFieldValue('danhGia', value)} min={1} max={10} value={formik.values.danhGia} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} /> <br />
                    <img src={imgSrc == '' ? thongTinPhim.hinhAnh : imgSrc} alt='...' style={{ width: 150, height: 150 }} accept='image/png image/jpeg image/jpg image/gif' />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type='submit' className='border-2 border-orange-300 px-4 py-2 rounded-md hover:border-orange-500'>Cập nhật phim</button>
                </Form.Item>
            </Form>
        </div>
    );
};
