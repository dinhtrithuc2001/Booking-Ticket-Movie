import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Progress, Modal } from 'antd';
import moment from 'moment';
import useRoute from '../../hooks/useRoute'
import { callApiLichChieuTheoPhim, getfilmDetail } from '../../redux/reducers/FilmReducer'
import LoadingPage from '../LoadingPage'
import { history } from '../../utils/history';
import { getModalVideo } from '../../redux/reducers/BannerReducer';
import { LayThongTinPhimChiTiet } from '../../services/FilmService';
import ShowtimeDetail from '../../components/Detail/ShowtimeDetail';

export default function Detail() {
    const [isLoadingDetail, setIsLoadingDetail] = useState(true)
    const { filmDetail, lichChieuTheoPhim } = useSelector(state => state.FilmReducer)
    const { param, navigate } = useRoute()
    const [percent, setPercent] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let dataVideoModal = useSelector(state => state.BannerReducer.modalData)

    const dispatch = useDispatch()


    useEffect(() => {
        history.listen(() => {
            window.scrollTo(0, 0);
        });
        const callApiChiTiet = async (id) => {
            try {
                const apiChiTiet = await LayThongTinPhimChiTiet(id)
                dispatch(getfilmDetail(apiChiTiet.data.content))
                dispatch(callApiLichChieuTheoPhim(apiChiTiet.data.content.maPhim))
                setIsLoadingDetail(false)
            } catch (error) {
                history.replace('/notfound')
            }
        }
        callApiChiTiet(param.id)
    }, [])

    const showModal = (link) => {
        dispatch(getModalVideo(link))
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    if (filmDetail) {
        setTimeout(() => {
            setPercent(() => {
                return filmDetail.danhGia * 10
            })
        }, 500)
    }

    return (
        <div>
            {isLoadingDetail ? <LoadingPage /> :
                <div className='relative film-detail'>
                    <img src={filmDetail.hinhAnh} className='w-full h-[90rem] lg:h-[80rem] object-cover object-top blur-md' />
                    <div className="container absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70%] p-4">
                        <div className='md:flex'>
                            <img className='w-36 md:w-32 h-full' src={filmDetail.hinhAnh} alt={filmDetail.hinhAnh} />
                            <div className='md:pl-8 '>
                                <h2 className='text-white tracking-wide text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] uppercase mb-3 font-semibold'>{filmDetail.tenPhim}</h2>
                                <p className='text-gray-300 tracking-wide text-justify'>{filmDetail.moTa.length > 300 ? filmDetail.moTa.slice(0, 300) + '...' : filmDetail.moTa}</p>
                                <p className='font-bold text-white mt-2'>{moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}</p>
                                <div className='hidden xl:block'>
                                    <button onClick={() => showModal(filmDetail.trailer)} className="bg-transparent tracking-widest text-[16px] hover:bg-blue-500 text-white font-semibold hover:text-white border-blue-500 border-[3px] hover:border-transparent rounded uppercase px-[5rem] py-[0.7rem] mt-4 ">
                                        Trailer
                                    </button>
                                    {isModalOpen ? <Modal
                                        footer={null}
                                        centered
                                        closable={false}
                                        open={isModalOpen}
                                        onCancel={handleCancel}>
                                        <iframe id='videoId' width='100%' height='100%' src={`https://www.youtube.com/embed/${dataVideoModal}`} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                    </Modal> : ''}
                                    <a href='#showtime' className="bg-transparent tracking-widest text-[16px] hover:bg-orange-400 text-white font-semibold hover:text-white border-orange-500 border-[3px] hover:border-transparent rounded uppercase px-[5rem] py-[0.7rem] mt-4 ml-4">
                                        Đặt vé
                                    </a>
                                </div>
                            </div>
                            <div className='hidden xl:block pl-6' >
                                <Progress trailColor="#e6f4ff" status='success' type="circle" percent={percent} format={(percent) => `${percent} Điểm`} />
                            </div>
                            <div className='overlayDetail'></div>
                        </div>
                        {lichChieuTheoPhim ? <ShowtimeDetail heThongRapChieu={lichChieuTheoPhim.heThongRapChieu} /> : ''}
                    </div>
                </div>}
        </div>
    )
}
