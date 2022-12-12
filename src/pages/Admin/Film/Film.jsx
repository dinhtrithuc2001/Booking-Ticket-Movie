import React, { useState } from 'react'
import { Table, Input, Button, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { callApiFilm, callApiXoaPhim } from '../../../redux/reducers/FilmReducer';
import { NavLink, useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'

const { Search } = Input;

export default function Film() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { arrFilm } = useSelector(state => state.FilmReducer)
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(callApiFilm)
    }, [])

    useEffect(() => {
        setData(arrFilm)
    }, [arrFilm])

    const searchKeyword = (value) => {
        setData(arrFilm.filter(item => {
            if (value.trim() == '') {
                return item
            }
            else {
                let keyLower = value.toLocaleLowerCase()
                let itemLower = item.tenPhim.toLocaleLowerCase()
                return itemLower.includes(keyLower)
            }
        }))
    }
    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend'],
            width: 150,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <>
                    <img src={film.hinhAnh} alt={film.hinhAnh} width='50' height='50'
                        onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
                </>
            },
            width: 100
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1
                }
                return -1
            },
            render: (text, film) => {
                return film.tenPhim.length > 50 ? film.tenPhim.slice(0, 50) + '...' : film.tenPhim
            },
            sortDirections: ['descend'],
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1
                }
                return -1
            },
            render: (text, film) => {
                return film.moTa.length > 80 ? film.moTa.slice(0, 80) + '...' : film.moTa
            },
            sortDirections: ['descend'],
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: (text, film) => {
                return <>
                    <Tooltip placement="leftBottom" title={'Chỉnh sửa phim'}>
                        <NavLink key={1} className='bg-dark text-blue-600 mr-3 text-2xl ' to={`/admin/film/edit/${film.maPhim}`}><EditOutlined /></NavLink>
                    </Tooltip>
                    <Tooltip placement="bottom" title={'Xóa phim'}>
                        <button onClick={() => {
                            Swal.fire({
                                title: 'Bạn có muốn xóa phim này không ?',
                                showDenyButton: true,
                                confirmButtonText: 'Đồng ý',
                                denyButtonText: 'Hủy',
                                icon: 'question',
                                iconColor: 'rgb(104 217 254)',
                                confirmButtonColor: '#f97316'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(callApiXoaPhim(film.maPhim))
                                }
                            })
                        }} key={2} className='bg-dark text-red-600 text-2xl hover:text-red-400'><DeleteOutlined /></button>
                    </Tooltip>
                    <Tooltip placement="topRight" title={'Tạo lịch chiếu'}>
                        <NavLink key={3} className='bg-dark text-orange-600 hover:text-orange-400 ml-3 text-2xl ' to={`/admin/film/showtime/${film.maPhim}/${film.tenPhim}`}><CalendarOutlined /></NavLink>
                    </Tooltip>
                </>
            },
            width: 150
        },
    ];
    return <div className='adminFilm'>
        <h2 className='text-2xl uppercase font-bold mb-4'>Quản lý Phim</h2>

        <Button onClick={() => navigate('/admin/film/addnewfilm')} className='mb-4 font-semibold border-black'>Thêm phim</Button>

        <Search
            className='mb-4'
            placeholder="Tìm kiếm theo tên"
            enterButton='Search'
            size="large"
            onSearch={searchKeyword}
        />

        <Table columns={columns} dataSource={data} rowKey='maPhim' />
    </div>;
};
