import React from 'react';
import { Routes, Route } from 'react-router-dom';

import VietnamesePoem from '../tho/VietnamesePoem';
import NineX from '../tho/first-phase/9X';
import DaCau from '../tho/first-phase/DaCau';
import DaiHoi from '../tho/first-phase/DaiHoi';
import DiChucFred from '../tho/first-phase/DiChucFred';
import DinhDau from '../tho/first-phase/DinhDau';
import FirstPhase from '../tho/first-phase/FirstPhase';
import GiaiPhongThuDo from '../tho/first-phase/GiaiPhongThuDo';
import HoHang from '../tho/first-phase/HoHang';
import MuBaoHiem from '../tho/first-phase/MuBaoHiem';
import NoiBuon from '../tho/first-phase/NoiBuon';
import QuyetTam from '../tho/first-phase/QuyetTam';
import RamThangGieng from '../tho/first-phase/RamThangGieng';
import TienNghi from '../tho/first-phase/TienNghi';
import TrangTrang from '../tho/first-phase/TrangTrang';
import VanMinhThanhLich from '../tho/first-phase/VanMinhThanhLich';
import VQD from '../tho/first-phase/VQD';
import ASCL from '../tho/second-phase/ASCL';
import BucTuong from '../tho/second-phase/BucTuong';
import ChuyenLopMinh from '../tho/second-phase/ChuyenLopMinh';
import CoGaiM57 from '../tho/second-phase/CoGaiM57';
import CoGaiM57phan2 from '../tho/second-phase/CoGaiM57phan2';
import CoGaiM57phan3 from '../tho/second-phase/CoGaiM57phan3';
import CuoiThapNien from '../tho/second-phase/CuoiThapNien';
import Fungi from '../tho/second-phase/Fungi';
import NgayMaiEmDi from '../tho/second-phase/NgayMaiEmDi';
import PhuPhiem from '../tho/second-phase/PhuPhiem';
import SecondPhase from '../tho/second-phase/SecondPhase';
import VanNinhNgamKhuc from '../tho/second-phase/VanNinhNgamKhuc';
import FiveYear from '../tho/third-phase/5Nam';
import ChiLamBlink from '../tho/third-phase/ChiLamBlink';
import ChuyenNha from '../tho/third-phase/ChuyenNha';
import ConcertSing from '../tho/third-phase/ConcertSing';
import ConcertViet from '../tho/third-phase/ConcertViet';
import ConDuongXua from '../tho/third-phase/ConDuongXua';
import FungiTwo from '../tho/third-phase/Fungi2';
import MonNo from '../tho/third-phase/MonNo';
import Mua from '../tho/third-phase/Mua';
import Nang from '../tho/third-phase/Nang';
import NgayTuBiet from '../tho/third-phase/NgayTuBiet';
import NguyenSo from '../tho/third-phase/NguyenSo';
import Tet from '../tho/third-phase/Tet';
import ThirdPhase from '../tho/third-phase/ThirdPhase'
import Thu from '../tho/third-phase/Thu';
import TrungThu from '../tho/third-phase/TrungThu';

function ThoRoutes() {
	return (
        <Routes>
	        <Route path="/" element={<VietnamesePoem />} />
	        <Route path="tungbay" element={<NineX />} />
	        <Route path="/first-phase" element={<FirstPhase />} />
	        <Route path="/first-phase/De-tai-Nghien-cuu-ve-9X-qua-tho" element={<NineX />} />
	        <Route path="/first-phase/Da-Cau" element={<DaCau />} />
	        <Route path="/first-phase/Dai-Hoi" element={<DaiHoi />} />
	        <Route path="/first-phase/Loi-Di-chuc-cua-Friedrich-II-Dai-de" element={<DiChucFred />} />
	        <Route path="/first-phase/Nam-moi-Dinh-dau-2017" element={<DinhDau />} />
	        <Route path="/first-phase/Giai-phong-Thu-Do" element={<GiaiPhongThuDo />} />
	        <Route path="/first-phase/Ngau-nhien-Ho-hang" element={<HoHang />} />
	        <Route path="/first-phase/Mu-bao-hiem" element={<MuBaoHiem />} />
	        <Route path="/first-phase/Noi-buon" element={<NoiBuon />} />
	        <Route path="/first-phase/Quyet-tam" element={<QuyetTam />} />
	        <Route path="/first-phase/Ram-thang-Gieng" element={<RamThangGieng />} />
	        <Route path="/first-phase/Tien-nghi" element={<TienNghi />} />
	        <Route path="/first-phase/Trang-trang" element={<TrangTrang />} />
	        <Route path="/first-phase/Van-minh-Thanh-lich" element={<VanMinhThanhLich />} />
	        <Route path="/first-phase/Lien-khuc-tho-ve-Ve-Quoc-Doan" element={<VQD />} />
	        <Route path="/second-phase" element={<SecondPhase />} />
	        <Route path="/second-phase/Anh-sang-Chan-ly" element={<ASCL />} />
	        <Route path="/second-phase/Buc-Tuong" element={<BucTuong />} />
	        <Route path="/second-phase/Chuyen-lop-minh" element={<ChuyenLopMinh />} />
	        <Route path="/second-phase/Co-gai-M57" element={<CoGaiM57 />} />
	        <Route path="/second-phase/Co-gai-M57-phan-2" element={<CoGaiM57phan2 />} />
	        <Route path="/second-phase/Co-gai-M57-phan-3" element={<CoGaiM57phan3 />} />
	        <Route path="/second-phase/Cuoi-thap-nien" element={<CuoiThapNien />} />
	        <Route path="/second-phase/Nam" element={<Fungi />} />
	        <Route path="/second-phase/Ngay-mai-em-di-2019" element={<NgayMaiEmDi />} />
	        <Route path="/second-phase/Phu-phiem" element={<PhuPhiem />} />
	        <Route path="/second-phase/Van-ninh-Ngam-khuc" element={<VanNinhNgamKhuc />} />
	        <Route path="/third-phase" element={<ThirdPhase />} />
	        <Route path="/third-phase/Ky-niem-5-nam-Lam-tho" element={<FiveYear />} />
	        <Route path="/third-phase/Nam-nhan-chi-chi-lam-trai" element={<ChiLamBlink />} />
	        <Route path="/third-phase/Chuyen-nha" element={<ChuyenNha />} />
	        <Route path="/third-phase/Concert-of-Life" element={<ConcertSing />} />
	        <Route path="/third-phase/Concert-de-la-Vie" element={<ConcertViet />} />
	        <Route path="/third-phase/Con-duong-xua" element={<ConDuongXua />} />
	        <Route path="/third-phase/Nam-2-Nam-doc" element={<FungiTwo />} />
	        <Route path="/third-phase/Mon-no" element={<MonNo />} />
	        <Route path="/third-phase/Mua" element={<Mua />} />
	        <Route path="/third-phase/Nang" element={<Nang />} />
	        <Route path="/third-phase/Ngay-tu-biet" element={<NgayTuBiet />} />
	        <Route path="/third-phase/Nguyen-so" element={<NguyenSo />} />
	        <Route path="/third-phase/Tet" element={<Tet />} />
	        <Route path="/third-phase/Thu" element={<Thu />} />
	        <Route path="/third-phase/Trung-thu" element={<TrungThu />} />
        </Routes>
    );
}

export default ThoRoutes;
