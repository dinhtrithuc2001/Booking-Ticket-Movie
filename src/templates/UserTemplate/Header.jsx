import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Drawer, Space, Tooltip } from 'antd';
import { getLocalStorage, removeLocalStorage, SwalConfig } from '../../utils/config'
import { useDispatch, useSelector } from 'react-redux'
import { UserLogin } from '../../redux/reducers/UserReducer'
import { LayThongTinTaiKhoan } from '../../services/UserService'
import { LOCALSTORAGE_USER } from '../../utils/constant'

export default () => {

    const userData = getLocalStorage(LOCALSTORAGE_USER)
    const isLogin = useSelector(state => state.UserReducer.isLogin)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
       
        const callApiThongTinTaiKhoan = async () => {
            try {
                await LayThongTinTaiKhoan()
                // load lại trang mà vẫn giữ trạng thái login thì gửi lên store redux trạng thái login true
                dispatch(UserLogin(true))
            } catch (error) {
                // trường hợp AccessToken bị sai
                removeLocalStorage(LOCALSTORAGE_USER)
            }
        }
        callApiThongTinTaiKhoan()

        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                document.getElementById('navBarHeader').style.background = 'rgb(255 255 255 / 80%)'
            } else {
                document.getElementById('navBarHeader').style.background = '#fff'
            }
        })

    }, [])

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const text = <span>Đăng xuất</span>;

    return (
        <>
            <Drawer
                title="Movie Capstone"
                placement='left'
                closable={false}
                onClose={onClose}
                open={open}
                width='300px'
                key='left'
                extra={
                    <Space>
                        <FontAwesomeIcon className='cursor-pointer' onClick={onClose} icon={faXmark} />
                    </Space>
                }
            >
                <div>
                    {isLogin ? <>
                        <NavLink to='/inforUser' className="flex flex-col items-center justify-center">
                            <div className="relative">
                                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full border-gray-50" />
                                <img src={`https://i.pravatar.cc/150?u=${userData.taiKhoan}`} className="w-10 h-10 border rounded-full" />
                            </div>
                            <div>
                                <h5 className='m-0 pl-2 text-center'>{userData.taiKhoan}</h5>
                            </div>
                        </NavLink>
                        <Tooltip placement="bottom" title={text}>
                            <NavLink onClick={() => {
                                Swal.fire({
                                    title: 'Bạn có muốn đăng xuất không ?',
                                    showDenyButton: true,
                                    confirmButtonText: 'Đồng ý',
                                    denyButtonText: 'Hủy',
                                    icon: 'question',
                                    iconColor: 'rgb(104 217 254)',
                                    confirmButtonColor: '#f97316'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        SwalConfig('Đã đăng xuất', 'success', false)
                                        removeLocalStorage(LOCALSTORAGE_USER)
                                        dispatch(UserLogin(false))
                                        navigate('/')
                                    }
                                })
                            }} className='flex justify-center mt-2 items-center border-none ml-2'>
                                <FontAwesomeIcon className='w-8 h-8' icon={faArrowRightFromBracket} />
                            </NavLink>
                        </Tooltip>
                    </> : <>
                        <div className='text-gray-500 hover:text-red-600 flex items-center mb-4'>
                            <FontAwesomeIcon className='w-5 h-5 mr-1' icon={faCircleUser} />
                            <NavLink to='login' className='text-base font-semibold text-gray-500 hover:text-red-600'>Đăng Nhập</NavLink>
                        </div>
                        <div className='text-gray-500 hover:text-red-600 flex items-center mb-4'>
                            <FontAwesomeIcon className='w-5 h-5 mr-1' icon={faCircleUser} />
                            <NavLink to='register' className='text-base font-semibold text-gray-500 hover:text-red-600'>Đăng Ký</NavLink>
                        </div>
                    </>}
                </div>
                <hr />
                <ul className="list-reset justify-center flex-1 items-center mt-2">
                    <li className="mr-3">
                        <NavLink to='/' className="block py-2 px-4 text-black font-medium text-base hover:text-red-600 no-underline" >Lịch chiếu</NavLink>
                    </li>
                    <li className="mr-3">
                        <NavLink className="block no-underline text-black font-medium text-base hover:text-red-600 hover:text-underline py-2 px-4"
                            to='/'>Cụm rạp</NavLink>
                    </li>
                    <li className="mr-3">
                        <NavLink className="block no-underline text-black font-medium text-base hover:text-red-600 hover:text-underline py-2 px-4"
                            to='news'>Tin tức</NavLink>
                    </li>
                    
                </ul>
            </Drawer>

            <header className="bg-gray-400 font-sans leading-normal tracking-normal">
                <nav style={{borderBottom: '1px solid #c1c0c04a'}} id='navBarHeader' className="transition-all duration-500 flex items-center justify-between flex-wrap bg-white py-2 px-4 fixed w-full z-10 top-0">
                    <div className="flex items-center flex-shrink-0 text-white mr-4">
                        <NavLink to='/' aria-label="Back to homepage" className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16  text-orange-500">
                                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z" />
                                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z" />
                            </svg>
                            <span className='text-xl font-medium text-orange-500 sm:text-2xl '>Movie Capstone</span>
                        </NavLink>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={showDrawer} id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-gray-500 border-orange-500">
                            <svg className="fill-current h-4 w-4 text-orange-500" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden  pt-3 lg:pt-0"
                        id="nav-content">
                        <ul className="list-reset lg:flex justify-center flex-1 items-center mb-0">
                            <li className="mr-3">
                                <Link to='/#movie-list' className="inline-block py-2 px-4 text-black font-medium md:text-base hover:text-red-600 no-underline" >Lịch chiếu</Link>
                            </li>
                            <li className="mr-3">
                                <Link className="inline-block no-underline text-black font-medium md:text-base hover:text-red-600 hover:text-underline py-2 px-4"
                                    to="/#menuCinema">Cụm rạp</Link>
                            </li>
                            <li className="mr-3">
                                <NavLink className="inline-block no-underline text-black font-medium md:text-base hover:text-red-600 hover:text-underline py-2 px-4"
                                    to='news'>Tin tức</NavLink>
                            </li>
                            <li className="mr-3">
                                <NavLink className="inline-block no-underline text-black font-medium md:text-base hover:text-red-600 hover:text-underline py-2 px-4"
                                    to='aboutapp'>Ứng dụng</NavLink>
                            </li>
                        </ul>
                        <div className='flex text-gray-500'>
                            {isLogin ? <>
                                <NavLink to='/inforUser' className="flex flex-row items-center justify-center border-r-2 border-gray-300 pr-2">
                                    <div className="relative">
                                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-600 border rounded-full border-gray-50" />
                                        <img src={`https://i.pravatar.cc/150?u=${userData.taiKhoan}`} className="w-10 h-10 border rounded-full" />
                                    </div>
                                    <div>
                                        <h5 className='m-0 pl-2 text-center'>{userData.taiKhoan}</h5>
                                    </div>
                                </NavLink>
                                <Tooltip placement="bottomRight" title={text}>
                                    <NavLink onClick={() => {
                                        Swal.fire({
                                            title: 'Bạn có muốn đăng xuất không ?',
                                            showDenyButton: true,
                                            confirmButtonText: 'Đồng ý',
                                            denyButtonText: 'Hủy',
                                            icon: 'question',
                                            iconColor: 'rgb(104 217 254)',
                                            confirmButtonColor: '#f97316'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                SwalConfig('Đã đăng xuất', 'success', false)
                                                removeLocalStorage(LOCALSTORAGE_USER)
                                                dispatch(UserLogin(false))
                                                navigate('/')
                                            }
                                        })

                                    }} className='border flex items-center border-none ml-2'>
                                        <FontAwesomeIcon className='w-8 h-8' icon={faArrowRightFromBracket} />
                                    </NavLink>
                                </Tooltip>
                            </> : <>
                                <NavLink to='login' className=' mr-2 text-gray-500 hover:text-red-600 text-sm font-semibold border-orange-500 border-2 py-2 px-3 rounded-lg'>Đăng Nhập</NavLink>
                                <NavLink to='register' className='text-gray-500 hover:text-red-600 text-sm font-semibold border-orange-500 border-2 py-2 px-3 rounded-lg'>Đăng Ký</NavLink>
                            </>}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}




