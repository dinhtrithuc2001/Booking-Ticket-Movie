import { http } from "../utils/baseUrl";
import { GROUPID } from "../utils/constant";


export const LayDanhSachPhim = () => http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`, null)

export const LayThongTinLichChieu =  (value) =>  http.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${value}`)