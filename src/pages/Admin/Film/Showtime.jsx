import React, { useState, useEffect } from 'react'
import { DatePicker, InputNumber, Select, Button, Form, Input } from 'antd';
import { layThongTinCumRapTheoHeThong, layThongTinHeThongRap } from '../../../services/CinemaService';
import { useFormik } from 'formik';
import useRoute from '../../../hooks/useRoute'
import moment from 'moment';
import { TaoLichChieu } from '../../../services/BookingManager';
import { SwalConfig } from '../../../utils/config';

export default function Showtime() {
    const { param, navigate } = useRoute()
    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })

    const formik = useFormik({
        initialValues: {
            maPhim: param.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },

        onSubmit: async (values) => {
            try {
                const result = await TaoLichChieu(values)
                SwalConfig(result.data.content, 'success', true)
                navigate('/admin/film')
            } catch (error) {
                SwalConfig(error.response.data.content, 'error', true, 3000)
            }
        }
    })

    useEffect(() => {
        const callApiHeThongRap = async () => {
            try {
                let result = await layThongTinHeThongRap()
                setState({
                    ...state,
                    heThongRapChieu: result.data.content
                })
            } catch (error) {
                console.log(error)
            }
        }
        callApiHeThongRap()
    }, [])

    const handleChangeHeThongRap = async (values) => {
        //từ hệ thống rạp call api lấy thông tin rạp
        try {
            let result = await layThongTinCumRapTheoHeThong(values)
            setState({
                ...state,
                cumRapChieu: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeCumRap = async (values) => {
        formik.setFieldValue('maRap', values)
    }

    const onChangeDateTime = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY HH:mm:ss'))
    }
    const onOk = (values) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(values).format('DD/MM/YYYY HH:mm:ss'))
    }

    const onChangeNumber = (values) => {
        formik.setFieldValue('giaVe', values)
    }

    const convertSelectHtr = () => {
        return state.heThongRapChieu?.map((heThongRap, index) => ({
            label: heThongRap.tenHeThongRap,
            value: heThongRap.maHeThongRap
        }))
    }
    const convertSelectCr = () => {
        return state.cumRapChieu?.map((cumRap, index) => ({
            label: cumRap.tenCumRap,
            value: cumRap.maCumRap
        }))
    }

    return (
        <div className='container'>
            <Form
                onSubmitCapture={formik.handleSubmit}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
            >
                <h3 className='text-2xl uppercase font-bold mb-4'>Tạo lịch chiếu</h3>
                <Form.Item label="Tên phim">
                    <Input value={param.tenPhim} readOnly />
                </Form.Item>
                <Form.Item label="Mã phim">
                    <Input value={param.id} readOnly />
                </Form.Item>
                <Form.Item label="Hệ thống rạp">
                    <Select options={convertSelectHtr()} onChange={handleChangeHeThongRap} placeholder="Vui lòng chọn hệ thống rạp" />
                </Form.Item>
                <Form.Item label="Chọn cụm rạp">
                    <Select options={convertSelectCr()} onChange={handleChangeCumRap} placeholder="Vui lòng chọn rạp" />
                </Form.Item>
                <Form.Item label="Ngày chiếu giờ chiếu">
                    <DatePicker
                        showTime
                        format='DD/MM/YYYY HH:mm:ss'
                        onOk={onOk}
                        onChange={onChangeDateTime}
                        placeholder="Chọn ngày giờ chiếu" />
                </Form.Item>
                <Form.Item label="Giá vé">
                    <InputNumber min={75000} max={150000} onChange={onChangeNumber} />
                </Form.Item>
                <Form.Item label="Tác vụ" >
                    <Button htmlType='submit'>Tạo lịch chiếu</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
