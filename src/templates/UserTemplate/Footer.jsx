import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook, faYoutube, faInstagram, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="px-4 divide-y bg-neutral-900 text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/4">
                    <NavLink to='/' aria-label="Back to homepage" className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16  text-orange-500">
                            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z" />
                            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z" />
                        </svg>
                        <span className='text-xl font-medium text-orange-500 sm:text-2xl '>Movie Capstone</span>
                    </NavLink>
                </div>
                <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 lg:w-3/4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="hidden sm:block space-y-3">
                        <h3 className="tracking-wide text-zinc-200 title-widget text-sm sm:text-lg font-medium">GIỚI THIỆU</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300  title-widget-item'><FontAwesomeIcon icon={faAnglesRight} />  VỀ CHÚNG TÔI</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> THỎA THUẬN SỬ DỤNG</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> QUY CHẾ BẢO MẬT</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> CHÍNH SÁCH BẢO MẬT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden sm:block space-y-3">
                        <h3 className="tracking-wide  text-zinc-200 title-widget text-sm sm:text-lg font-medium">HỖ TRỢ</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> GÓP Ý</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> SALE & SERVICE</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> RẠP / GIÁ VÉ</a>
                            </li>
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon icon={faAnglesRight} /> TUYỂN DỤNG</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" text-zinc-200 title-widget text-sm sm:text-lg font-medium">KẾT NỐI CAPSTONE MOVIE</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.facebook.com/dinhtrithuc01" target='_blank' className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faSquareFacebook} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faYoutube} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faInstagram} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className=" text-zinc-200 title-widget text-sm sm:text-lg font-medium">DOWNLOAD APP</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faApple} /></a>
                                <a href="#!" className='text-zinc-300 title-widget-item'><FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3' icon={faGooglePlay} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center text-gray-400">© 1968 Company Co. All rights reserved.</div>
        </footer>
    )
}
