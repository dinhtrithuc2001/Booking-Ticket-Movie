import { http } from "../utils/baseUrl";

export const LayThongTinTaiKhoan = () => http.post('/QuanLyNguoiDung/ThongTinTaiKhoan')

export const DangNhap = userLogin => http.post('/QuanLyNguoiDung/DangNhap', userLogin)

export const DangKy = userRegister => http.post('/QuanLyNguoiDung/DangKy', userRegister)