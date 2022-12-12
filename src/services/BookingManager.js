import { http } from "../utils/baseUrl";
import { GROUPID } from "../utils/constant";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";


export const LayDanhSachPhongVeService = (maLichChieu) => http.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)

export const DatVe = (thongTinDatVe = new ThongTinDatVe()) => http.post(`QuanLyDatVe/DatVe`, thongTinDatVe)

export const TaoLichChieu = (dataLichChieu) => http.post(`QuanLyDatVe/TaoLichChieu`, dataLichChieu)