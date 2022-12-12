import React, { useState, useEffect } from 'react'
import { Table, Input, Button, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'
import { callApiDeleteUser, callApiUser } from '../../../redux/reducers/UserReducer';

const { Search } = Input;

export default function Users() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { arrayUser } = useSelector(state => state.UserReducer)
    const [data, setData] = useState([])

    useEffect(() => {
        dispatch(callApiUser)
    }, [])

    useEffect(() => {
        setData(arrayUser)
    }, [arrayUser])

    const searchKeyword = (value) => {
        setData(arrayUser.filter(item => {
            if (value.trim() == '') {
                return item
            }
            else {
                let keyLower = value.toLocaleLowerCase()
                let itemLower = item.taiKhoan.toLocaleLowerCase()
                return itemLower.includes(keyLower)
            }
        }))
    }
    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let taiKhoanA = a.taiKhoan.toLowerCase().trim();
                let taiKhoanB = b.taiKhoan.toLowerCase().trim();
                if (taiKhoanA > taiKhoanB) {
                    return 1
                }
                return -1
            },
            render: (text, user) => {
                return user.taiKhoan.length > 80 ? user.taiKhoan.slice(0, 80) + '...' : user.taiKhoan
            },
            sortDirections: ['descend'],
        },
        {
            title: 'Tên người dùng',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let hoTenA = a.hoTen.toLowerCase().trim();
                let hoTenB = b.hoTen.toLowerCase().trim();
                if (hoTenA > hoTenB) {
                    return 1
                }
                return -1
            },
            render: (text, user) => {
                return user.hoTen.length > 50 ? user.hoTen.slice(0, 50) + '...' : user.hoTen
            },
            sortDirections: ['descend'],
        },

        {
            title: 'Email',
            dataIndex: 'email',
            render: (text, user) => {
                return user.email.length > 80 ? user.email.slice(0, 80) + '...' : user.email
            },

        },
        
        {
            title: 'Loại người dùng',
            dataIndex: 'loaiNguoiDung',
            render: (text, user) => {
                return user.maLoaiNguoiDung == 'QuanTri' ? 'Quản trị' : 'Khách hàng'
            },

        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: (text, user) => {
                return <>
                    <Tooltip placement="leftBottom" title={'Chỉnh sửa'}>
                        <NavLink key={1} className='bg-dark text-blue-600 mr-3 text-2xl ' to={`/admin/user/edit/${user.taiKhoan}`}><EditOutlined /></NavLink>
                    </Tooltip>
                    <Tooltip placement="top" title={'Xóa'}>
                        <button onClick={() => {
                            Swal.fire({
                                title: 'Bạn có muốn xóa người này không ?',
                                showDenyButton: true,
                                confirmButtonText: 'Đồng ý',
                                denyButtonText: 'Hủy',
                                icon: 'question',
                                iconColor: 'rgb(104 217 254)',
                                confirmButtonColor: '#f97316'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(callApiDeleteUser(user.taiKhoan))
                                }
                            })
                        }} key={2} className='bg-dark text-red-600 text-2xl hover:text-red-400'><DeleteOutlined /></button>
                    </Tooltip>

                </>
            },
            width: 150
        },
    ];
    return <div className='adminFilm'>
        <h2 className='text-2xl uppercase font-bold mb-4'>Quản lý người dùng</h2>

        <Button onClick={() => navigate('/admin/user/addnewuser')} className='mb-4 font-semibold border-black'>Thêm người dùng</Button>

        <Search
            className='mb-4'
            placeholder="Tìm kiếm theo tài khoản"
            enterButton='Search'
            size="large"
            onSearch={searchKeyword}
        />

        <Table columns={columns} dataSource={data} rowKey='taiKhoan' />
    </div>;
};
