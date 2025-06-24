import React from 'react';
import Ngo from '../../assets/images/ChuyenNha/Alley.png';
import Nhin from '../../assets/images/ChuyenNha/Balcon.png';
import Leave from '../../assets/images/ChuyenNha/Leave.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function ChuyenNha() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `轉 茹`;
    const vietTitle = 'Chuyển Nhà';

    const nomPoem = `
		 鉢 箸 哙 低 𠊛 坭 丟
		 𡹃 𣘃 𠊝 𦲿 坦 薄 牟
		 𡉦 咏 𣊿 冬 空 㗂 动
		 𫔳 茹 咻 𣔲 尽 𡎟 溇

		 袄 裙 册 𡲈 拮 袞 強
		 眣 丟 䉤 𫇰 哙 某 張
		 傈 踣 耒 催 哙 包 役
		 質 苔 㨂 匣 耒 博 𫼳

		 調 和 匬 冷 耒 波 𩵜
		 層 壙 𥧪 寅 寅 現 𪞷
		 园 撩 絲 蝒 𢒎 蹺 𩙍
		 朗 𣈖 𪀄 𢒎 𣇜 𣊿 斜

		 毎 𠬠 轉 車 戈 𡉦 咏
		 𪜀 添 𠬠 家 庭 𪞷 𠫾
		 內 室 𫔳 簾 拱 𠫾 訥
		 只 哙 椌 筩 丿 别 離

		 朗 𨤰 𪞷 𠫾 空 𥋓 又
		 拙 𠫾 挭 𥘀 𠬠 𢆥 𨱽
		 只 懞 稳 定 䟻 迍 節
		 吧 包 預 定 於 將 來

		 俸 丟 率 又 對 鉢 箸
		 知 㰁 𥪞 𣎀 𣋁 𣔲 咻
		 眣 𢖵 算 𤥑 車 𢮿 又
		 𣃣 𠓨 头 𡉦 俸 𨅸 奄

		 𠬠 㗂 𠽍 𤌋 𢒎 霧 𩆪
		 丿 𠺷 茹 只 哙 𥪞 心
		 渃 眜 𣻆 淶 如 𠀲 稚
		 𦲿 苚 層 𩂀 拯 体 鉗

		 層 𤗖 𥒮 層 𤗖 記 忆
		 𫪣 寅 𢫆 𠫾 蹺 𣎃 𢆥
		 耒 𣈕 𡉦 咏 丟 哙 姅
		 𢝜 搛 悉 奇 𡨺 𥪞 𢚸
    `;

    const sentencePerPage = 16;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}>
                { vietTitle }
            </h3>
            <h4 style={{ textAlign: "left" }}>31/12/2023</h4>
            <p style={{ marginBottom: "1em" }}>
	            Bát đũa còn đây, người nơi đâu<br />
                Rừng cây thay lá, đất bạc màu <br />
                Ngõ vắng chiều đông không tiếng động <br />
                Cửa nhà hiu-quạnh tận hang sâu <br />
            </p>
			<img
                src={Ngo}
                alt="Ngo Vang"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Áo-quần, sách-vở cất gọn-gàng <br />
                Chợt đâu sổ cũ còn mấy trang <br />
                Lật vội rồi thôi - còn bao việc <br />
                Chất đầy, đóng hộp rồi vác mang <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Điều-hòa, tủ-lạnh rồi bể cá <br />
                Từng khoảng-trống dần-dần hiện ra <br />
                Vườn treo tơ-nhện bay theo gió <br />
                Lặng bóng chim bay buổi chiều tà <br />
            </p>
			<img
                src={Nhin}
                alt="Buồn"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Mỗi một chuyến-xe qua ngõ vắng <br />
                Là thêm một gia-đình ra đi <br />
                Nội-thất, cửa, rèm, cùng đi nốt <br />
                Chỉ còn khung rỗng phút biệt-ly <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Lặng-lẽ ra đi không ngoảnh lại <br />
                Trút đi gánh-nặng một năm dài <br />
                Chỉ mong ổn-định chờ đón Tết <br />
                Và bao dự-định ở tương-lai <br />
            </p>
			<img
                src={Leave}
                alt="Rời đi"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Bỗng đâu sót lại đôi bát-đũa<br />
                Trơ-trọi trong đêm tối quanh-hiu<br />
                Chợt nhớ toan vòng xe quay lại <br />
                Vừa vào đầu ngõ - bỗng đứng im<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Một tiếng rầm - khói bay mù-mịt <br />
                Phút chốc nhà chỉ còn trong tim <br />
                Nước mắt tuôn rơi như đứa trẻ <br />
                Lá rụng từng cơn chẳng thể kìm <br />
            </p>
            <p style={{ marginBottom: "3em" }}>
	            Từng mảnh-vỡ - từng mảng ký-ức <br />
                Sẽ dần vụn đi theo tháng năm <br />
                Rồi mai ngõ vắng đâu còn nữa <br />
                Đành gom tất cả giữ trong lòng  <br />
            </p>
        </div>
    );
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
        	    <Breadcrumb language={language} />
        	</div>
            { language === 'English' ? renderVietVersion() : renderNomVersion(nomTitle, nomPoem, sentencePerPage) }
            <Navigation poemTitle={ vietTitle } />
        </div>
    );
}

export default ChuyenNha;