import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, Modal } from 'antd';
import { getBannerMovie, getModalVideo } from '../../redux/reducers/BannerReducer'; 

export default function HomeCarousel() {
    const dataBanner = useSelector(state => state.BannerReducer.data)
    let dataVideoModal = useSelector(state => state.BannerReducer.modalData)
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = (link) => {
        dispatch(getModalVideo(link))
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(()=>{
        dispatch(getBannerMovie())
    }, [])

    return (
        <div className='carousel hidden sm:block'>
            <Carousel effect="fade" autoplay='true'>
                {dataBanner.map((item, index) => {
                    return <div key={index}>
                        <img src={item.img} alt={item.img} className='img-carousel' />
                        <button onClick={()=> showModal(item.link)}>
                            <svg width={80} height={80} fill='#fff' className='iconPlay cursor-pointer' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 502 502" style={{ enableBackground: 'new 0 0 502 502' }} xmlSpace="preserve">
                                <g><g><path d="M251,502c-67.045,0-130.076-26.108-177.483-73.516C26.108,381.076,0,318.044,0,251S26.108,120.924,73.517,73.516 C120.924,26.108,183.955,0,251,0s130.076,26.108,177.483,73.516C475.892,120.924,502,183.956,502,251 s-26.108,130.076-73.517,177.484C381.076,475.892,318.045,502,251,502z M251,20C123.626,20,20,123.626,20,251s103.626,231,231,231 s231-103.626,231-231S378.374,20,251,20z" /></g><g><g><path d="M194.134,401c-5.627,0-11.23-1.394-16.204-4.03c-11.344-6.015-18.391-17.728-18.391-30.567V135.597 c0-12.839,7.047-24.552,18.39-30.566c11.343-6.013,24.992-5.276,35.62,1.93L383.78,222.363 c9.508,6.445,15.184,17.151,15.184,28.637c0,11.485-5.676,22.191-15.184,28.637L213.549,395.04 C207.799,398.939,201.085,401,194.134,401z M194.138,120.995c-2.341,0-4.688,0.564-6.84,1.706 c-4.786,2.538-7.759,7.479-7.759,12.896v230.806c0,5.417,2.973,10.359,7.759,12.896c2.099,1.112,4.463,1.701,6.836,1.701 c2.934,0,5.766-0.869,8.191-2.514l170.232-115.403c4.011-2.72,6.406-7.236,6.406-12.083s-2.395-9.363-6.406-12.082 L202.326,123.515C199.858,121.842,197.004,120.995,194.138,120.995z" /></g></g><g><path d="M286.012,63.038c-0.574,0-1.156-0.049-1.741-0.152c-21.184-3.718-43.425-3.829-64.641-0.324 c-5.453,0.903-10.597-2.787-11.496-8.236c-0.9-5.449,2.787-10.596,8.236-11.496c23.431-3.871,47.965-3.75,71.359,0.358 c5.439,0.955,9.075,6.139,8.12,11.579C294.997,59.621,290.776,63.038,286.012,63.038z" /></g><g><path d="M439.844,192.001c-4.08,0-7.911-2.516-9.394-6.57c-16.37-44.791-48.719-81.657-91.086-103.808 c-4.895-2.559-6.788-8.601-4.229-13.495c2.56-4.895,8.601-6.788,13.495-4.229c46.792,24.464,82.521,65.186,100.605,114.666 c1.896,5.187-0.772,10.929-5.96,12.825C442.143,191.804,440.983,192.001,439.844,192.001z" /></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                            </svg>
                        </button>
                        {isModalOpen ? <Modal
                            footer={null}
                            centered
                            closable={false}
                            open={isModalOpen}
                            onCancel={handleCancel}>
                            <iframe id='videoId' className="w-full h-full rounded-xl" src={`https://www.youtube.com/embed/${dataVideoModal}`} allowFullScreen></iframe>
                        </Modal> : ''}
                    </div>
                })}
            </Carousel>
        </div>
    )
}
