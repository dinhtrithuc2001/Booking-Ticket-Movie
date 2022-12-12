import { http } from "../utils/baseUrl";

export const LayThongTinTaiKhoan = () => http.post('/QuanLyNguoiDung/ThongTinTaiKhoan')

export const LayThongTinPhimNguoiDungEdit = (taiKhoan) => http.post(`/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)

export const DangNhap = userLogin => http.post('/QuanLyNguoiDung/DangNhap', userLogin)

export const DangKy = userRegister => http.post('/QuanLyNguoiDung/DangKy', userRegister)

export const LayDanhSachNguoiDung = () => http.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00`)

export const XoaNguoiDung = (taiKhoan) => http.delete(`/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${taiKhoan}`)

export const LayDanhSachLoaiNguoiDung = () => http.get(`/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`)

export const CapNhatThongTinNguoiDung = (user) => http.post(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,user)

export const ThemNguoiDungService = (user) => http.post(`/QuanLyNguoiDung/ThemNguoiDung`,user)