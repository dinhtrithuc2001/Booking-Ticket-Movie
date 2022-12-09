import React from 'react'
import { Tabs } from 'antd'


export default function News() {
    const dienAnh = () => {
        return <div className='md:my-[3rem] my-[0.5rem] md:w-[80%] mx-auto'>
            <div className='md:flex'>
                <div className='md:w-[50%] p-4'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png" alt="" />
                    <div>
                        <h2 className='font-bold text-[15px] my-2'>TENET công bố ngày khởi chiếu chính thức tại Việt Nam</h2>
                        <p className='text-justify'>Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.</p>
                    </div>
                </div>
                <div className='md:w-[50%] p-4'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[15px] my-2'>Khi phụ nữ không còn ở thế trốn chạy của nạn nhân</h2>
                        <p className='text-justify'>Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai người phụ nữ cùng hợp sức để vạ..</p>
                    </div>
                </div>
            </div>
            <div className='md:flex'>
                <div className='p-4 md:w-[33%]'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png" alt="" />
                    <h2 className='font-bold my-2'>TENET công bố ngày khởi chiếu chính thức tại Việt Nam</h2>
                    <p>Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.</p>
                </div>
                <div className='p-4 md:w-[33%]'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518743844.png" alt="" />
                    <h2 className='font-bold my-2'>TENET công bố ngày khởi chiếu chính thức tại Việt Nam</h2>
                    <p>Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.</p>
                </div>
                <div className='p-4 md:w-[33%]'>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/07/pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep-15937498464029.png" alt="" />
                        <p>Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/07/loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7-15937470779379.png" alt="" />
                        <p>Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!.</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/06/rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de-15929959532579.jpg" alt="" />
                        <p>RÒM tung trailer hé lộ cuộc sống của dân chơi số đề</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/06/antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them-15929866818923.jpg" alt="" />
                        <p>Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì</p>
                    </div>
                </div>
            </div>
        </div>
    }
    const review = () => {
        return <div className='md:my-[3rem] my-[0.5rem] md:w-[80%] mx-auto'>
            <div className='md:flex'>
                <div className='md:w-[50%] p-4'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[15px] my-2'>[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn</h2>
                        <p className='text-justify'>Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.</p>
                    </div>
                </div>
                <div className='md:w-[50%] p-4'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/03/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[15px] my-2'>[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân</h2>
                        <p className='text-justify'>Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.</p>
                    </div>
                </div>
            </div>
            <div className='md:flex'>
                <div className='p-4 md:w-[33%]'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/02/review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh-15828835353362.jpg" alt="" />
                    <h2 className='font-bold my-2'>[Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn vô hình?</h2>
                    <p>Phiên bản hiện đại của The Invisible Man là một trong những phim kinh dị xuất sắc nhất năm nay.</p>
                </div>
                <div className='p-4 md:w-[33%]'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/02/review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa-15823608583110.jpg" alt="" />
                    <h2 className='font-bold my-2'>[Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa</h2>
                    <p>Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết lại không tương xứng với phần mở đầu hứa hẹn.</p>
                </div>
                <div className='p-4 md:w-[33%]'>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/02/review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi-15821907793369.jpg" alt="" />
                        <p>[Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu thanh</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/02/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967038683.jpg" alt="" />
                        <p>[Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao giờ là việc dễ dàng</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/02/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958389162.jpg" alt="" />
                        <p>[Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2020/02/review-birds-of-prey-15809871977193.jpg" alt="" />
                        <p>[Review] Birds of Prey - Màn lột xác hoành tráng của Harley Quinn và DC</p>
                    </div>
                </div>
            </div>
        </div>
    }
    const promotion = () => {
        return <div className='md:my-[3rem] my-[0.5rem] md:w-[80%] mx-auto'>
            <div className='md:flex'>
                <div className='md:w-[50%] p-4'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976725554.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[15px] my-2'>[123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang</h2>
                        <p className='text-justify'>123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi đặt vé Bắc Kim Thang trên ứng dụng 123Phim.</p>
                    </div>
                </div>
                <div className='md:w-[50%] p-4'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663933683466.jpg" alt="" />
                    <div>
                        <h2 className='font-bold text-[15px] my-2'>Sinh Nhật Mega GS</h2>
                        <p className='text-justify'>Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến tháng 8, tháng sinh nhật của Mega GS Cinemas.</p>
                    </div>
                </div>
            </div>
            <div className='md:flex'>
                <div className='p-4 md:w-[33%]'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583511037699.jpg" alt="" />
                    <h2 className='font-bold my-2'>[123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa</h2>
                    <p>Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.</p>
                </div>
                <div className='p-4 md:w-[33%]'>
                    <img className='w-full' src="https://s3img.vcdn.vn/123phim/2019/05/galaxy-trang-thi-xem-phim-hay-say-qua-tang-15572160162243.jpg" alt="" />
                    <h2 className='font-bold my-2'>[Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng</h2>
                    <p>Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các Stars Hà Nội loạt phần quà siêu hấp dẫn.</p>
                </div>
                <div className='p-4 md:w-[33%]'>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2019/04/mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve-15563607309238.jpg" alt="" />
                        <p>Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2019/04/123phim-ban-la-fan-cung-marvel-15562538560772.jpg" alt="" />
                        <p>[123Phim] Bạn Là Fan Cứng Marvel?.</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2019/04/galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui-15561704693167.jpg" alt="" />
                        <p>[Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui</p>
                    </div>
                    <div className='flex mb-4'>
                        <img className='w-[50px] h-[50px]' src="https://s3img.vcdn.vn/123phim/2019/04/mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve-15547979641987.jpg" alt="" />
                        <p>Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé</p>
                    </div>
                </div>
            </div>
        </div>
    }
    const items = [
        { label: <h2 className='text-[14px] md:text-[18px] uppercase font-medium'>Điện ảnh</h2>, key: 'item-1', children: dienAnh() },
        { label: <h2 className='text-[14px] md:text-[18px] uppercase font-medium'>Review</h2>, key: 'item-2', children: review() },
        { label: <h2 className='text-[14px] md:text-[18px] uppercase font-medium'>Khuyến mãi</h2>, key: 'item-3', children: promotion() },
    ];
    return <div className='news mt-[6rem] h-full '>
        <Tabs centered items={items} />
    </div>;
}
