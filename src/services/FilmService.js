import { http } from "../utils/baseUrl";
import { GROUPID } from "../utils/constant";


export const LayDanhSachPhim = () => http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`, null)

export const LayThongTinPhimChiTiet = (id) =>  http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)

