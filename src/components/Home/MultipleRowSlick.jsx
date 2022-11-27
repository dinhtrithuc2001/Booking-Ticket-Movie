import React from 'react'
import { Card } from 'antd';
import Slider from "react-slick";


export default function MultipleRowSlick(props) {

    const arrFilm = [...props.arrFilm]

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "transparent" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "transparent" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 4,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "0",
                    rows: 2,
                    slidesPerRow: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: "0",
                    rows: 2,
                    slidesPerRow: 1,
                }
            },

        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='animate__animated animate__fadeInUp animate__fast pb-4'>
            <Slider {...settings}>
                {arrFilm?.filter(item => item.sapChieu === props.status).map((film, index) =>
                    <Card className='slick-card' bordered={false} key={index}>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={film.hinhAnh} className='w-full h-full' alt={film.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/75/75' }}/>
                                </div>
                                <div className="flip-card-back">
                                    <div className='overlay-card-back'></div>
                                    <img src={film.hinhAnh} className='w-full h-full' alt={film.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/75/75' }} />
                                    <button className='btn-card text-base uppercase'>Mua Vé</button>
                                </div>
                            </div>
                        </div>
                        <h2 className='film-name-card mt-3 uppercase font-medium'>{
                            film.tenPhim.length > 26 ? film.tenPhim.slice(0, 26) + '...' : film.tenPhim
                        }</h2>
                    </Card>
                )}
            </Slider>
        </div>
    )
}
