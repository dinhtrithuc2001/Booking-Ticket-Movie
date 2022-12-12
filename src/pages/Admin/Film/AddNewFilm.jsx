import {DatePicker,Form,Input,InputNumber,Switch} from 'antd';
import React from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import { useState } from 'react';
import { themPhimApi } from '../../../redux/reducers/FilmReducer';
import { useDispatch } from 'react-redux';
import { GROUPID } from '../../../utils/constant';
import { SwalConfig } from '../../../utils/config';

export default () => {
    const [imgSrc, setImgSrc] = useState(null)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
        },
        onSubmit: (value) => {
            value.maNhom = GROUPID
            let { tenPhim, trailer, moTa, ngayKhoiChieu, danhGia } = value
            if (tenPhim !== '' && trailer !== '' && moTa !== '' && ngayKhoiChieu !== '' && danhGia !== '') {
                // tạo đối tượng formData
                let formData = new FormData()
                for (let key in value) {
                    if (key !== 'hinhAnh') {
                        formData.append(key, value[key])
                    }
                    else {
                        formData.append('File', value.hinhAnh, value.hinhAnh.name)
                    }
                }
                dispatch(themPhimApi(formData))
                setImgSrc('')
            }
            else {
                SwalConfig('Vui lòng điền đầy đủ thông tin', 'error', true)
            }
        }
    })

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeDatePicker = (value) => {
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY')
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }

    const handleChangeFile = async (e) => {
        // lấy ra file từ e
        let file = e.target.files[0]

        if (file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/gif') {

            await formik.setFieldValue('hinhAnh', file)

            // tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                setImgSrc(e.target.result) // hình có định dạng là base 64
            }

        }
    }

    return (
        <div className='addFilmAdmin'>
            <h2 className='text-xl uppercase font-bold mb-4'>Thêm Phim Mới</h2>
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
                    <Input name='tenPhim' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={'DD/MM/YYYY'} name='ngayKhoiChieu' onChange={handleChangeDatePicker} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked" >
                    <Switch onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber onChange={value => formik.setFieldValue('danhGia', value)} min={1} max={10} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} /> <br />
                    <img src={imgSrc} alt={imgSrc} style={{ width: 150, height: 150 }} accept='image/png image/jpeg image/jpg image/gif' />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type='submit' className='border-2 border-orange-300 px-4 py-2 rounded-md hover:border-orange-500'> Thêm phim</button>
                </Form.Item>
            </Form>
        </div>
    );
};
