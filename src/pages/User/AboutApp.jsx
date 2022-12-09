import React from 'react'
import NotFound from '../NotFound'

export default function AboutApp() {
    return (
        <>
        <div className='aboutApp hidden md:block'>
            <div className='w-[80%] h-[100vh] mx-auto flex justify-center items-center'>
                <div className='text-white'>
                    <h2 className='text-white uppercase text-[30px] font-bold'>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                    <p className='text-[20px] font-medium my-4'>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <div className='text-center'>
                        <button className='uppercase py-4 px-8 bg-red-600 font-semibold tracking-wider rounded-lg'>App miễn phí - tải về ngay</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='block md:hidden'>
            <NotFound />
        </div>
        </>
    )
}
