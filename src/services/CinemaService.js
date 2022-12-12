import { http } from "../utils/baseUrl";
import { GROUPID } from "../utils/constant";

export const LayThongTinLichChieuHeThongRap = () => http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)

export const LayThongTinLichChieu =  (maPhim) =>  http.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)

export const layThongTinHeThongRap = () => http.get(`/QuanLyRap/LayThongTinHeThongRap`)

export const layThongTinCumRapTheoHeThong = (maHeThongRap) => http.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)