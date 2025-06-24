import React from 'react';
import Anhsang from '../../assets/images/PhuPhiemASCLBucTuong/AnhSang.jpg';
import RongThieng from '../../assets/images/PhuPhiemASCLBucTuong/RongThieng.jpg';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function ASCL() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `暎 𠒫 真 理`;
    const vietTitle = 'Ánh-sáng chân-lý';

    const nomPoem = `
        暎 𠒫 真 理 𧶮 𢙱 倅
        暎 𠒫 出 发 自 末 𡗶
        擂 烩 皮 心 魂 冲 沼
        扔 只 固 𠬠 𠬠 麻 催

        暎 𠒫 真 理 𧶮 𢙱 倅
        吔 戈 𠬠 份 四 局 代
        自 𣈗 哙 蹎 㲸 蹎 燥
        𣇞 化 𧏵 𪹂 𨑗 泡 𡗶

        暎 𠒫 蹎 理 𧶮 𢙱 倅
        吔 包 𢆥 麻 吻 捽 潙
        开 𠒫 冲 倅 念 奮 起
        將 來 汲 色 牟 𢝙 𦳦

        暎 𠒫 真 理 𧶮 𢙱 倅
        时 間 㵢 速 过 末 耒
        哙 丢 仍 𣎃 𣈗 胜 利
        只 哙 亊 孤 独 𥪞 倅

        暎 𠒫 真 理 𧶮 𢙱 倅
        油 固 拜 待 奇 局 代
        關 重 𪜀 些 㫻 除 待
        𠬠 务 弩 𡘯 𫪣 𣋽 催
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>11/4/2018</h4>
            <p style={{ marginBottom: "1em" }}>
	            Ánh-sáng chân-lý của lòng tôi <br />
	            Ánh-sáng xuất-phát từ mặt-trời <br />
	            Soi-rọi vào tâm-hồn trong-trẻo <br />
	            Nhưng chỉ có một, một mà thôi. <br />
	        </p>
			<img
                src={Anhsang}
                alt="Anhsang"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
			<p style={{ marginBottom: "1em" }}>
	            Ánh-sáng chân-lý của lòng tôi <br />
	            Đã qua một phần tư cuộc-đời <br />
	            Từ ngày còn chân-ướt chân-ráo <br />
	            Giờ hóa rồng-thiêng trên bầu-trời. <br />
	        </p>
			<img
                src={RongThieng}
                alt="RongThieng"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
			<p style={{ marginBottom: "1em" }}>
	            Ánh-sáng chân-lý của lòng tôi <br />
	            Đã bao-năm mà vẫn tuyệt-vời <br />
	            Khai-sáng trong tôi niềm phấn-khởi <br />
	            Tương-lai ngập sắc-màu vui-tươi. <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Ánh-sáng chân-lý của lòng tôi <br />
	            Thời-gian trôi nhanh quá mất rồi <br />
	            Còn đâu những tháng-ngày thắng-lợi <br />
	            Chỉ còn sự cô-độc trong tôi. <br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            Ánh-sáng chân-lý của lòng tôi <br />
	            Dù cho phải đợi cả cuộc-đời <br />
	            Quan-trọng là ta luôn chờ-đợi <br />
	            Một “vụ-nổ-lớn” - sẽ sớm thôi. <br />
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

export default ASCL;
