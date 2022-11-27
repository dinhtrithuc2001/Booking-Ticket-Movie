import { http } from "../utils/baseUrl";
import { GROUPID } from "../utils/constant";

export const LayThongTinLichChieuHeThongRap = () => http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`, null)