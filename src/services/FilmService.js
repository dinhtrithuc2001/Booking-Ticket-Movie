import { http } from "../utils/baseUrl";
import { GROUPID } from "../utils/constant";


export const LayDanhSachPhim = () => http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`, null)

export const LayThongTinPhimChiTiet = (id) =>  http.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)

export const themPhimUpload = (formData) => http.post(`/QuanLyPhim/ThemPhimUploadHinh`, formData)

export const capNhatPhimUpload = (formData) => http.post(`/QuanLyPhim/CapNhatPhimUpload`, formData)

export const xoaPhim = (maPhim) => http.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)

