import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function TrungThu() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `中 秋`;
    const vietTitle = 'Trung Thu';

    const nomPoem = `
        暎 𦝄 𦝃 𣎃 𠔭
        於 方 𡗶 柁 吹
        吻 院 元 苔 惮
        𠒫 𤐝 奇 胞 𡗶

        𢖵 仍 𣈗 𡮲 𡭬
        习 𪵯 畑 𪪳 𣇟
        弍 𪜉 曾 錆 竹
        皁 椌 演 紙 桃

        㗂 𢱖 麐 吨 𣳮
        㘇 望 奇 坫 廊
        踣 𪞷 家 文 化
        拱 破 𩚩 矯 㪚

        逴 畑 耒 𢱖 咭
        𡆑 唲 𥹘 中 秋
        眣 迭 命 喝 俊
        喂 注 最 珰 吁

        𣎃 𢆥 寅 迻 𠅍
        畑 吔 於 婁 𦝄
        只 哙 暈 𦝄 奴
        吻 惵 如 吔 層

        於 𠬠 方 𡗶 恪
        又 𥈴 眜 𨖲 𡗶
        懞 约 待 𨖲 挃
        𠇍 姉 姮 注 桧
    `;

    const sentencePerPage = 24;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30/9/2021</h4>
            <p style={{ marginBottom: "1em" }}>
	            Ánh trăng rằm tháng tám <br />
	            Ở phương-trời xa-xôi <br />
	            Vẫn vẹn-nguyên đầy-đặn <br />
	            Sáng-soi cả bầu-trời <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Nhớ những ngày thơ bé <br />
	            Tập làm đèn-ông-sao <br />
	            Nhẹ-nhàng từng thanh trúc <br />
	            Tạo khung - dán giấy đào <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Tiếng múa lân rộn-rã <br />
	            Vang-vọng cả xóm làng <br />
	            Vội ra nhà văn-hóa <br />
	            Cùng phá cỗ kẻo tan <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Rước đèn rồi múa hát <br />
	            Nhâm-nhi bánh trung-thu <br />
	            Chợt giật-mình hét toáng <br />
	            “Ôi chú tễu đang hù!” <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Tháng năm dần đi mất <br />
	            Đèn đã ở sau lưng <br />
	            Chỉ còn vầng trăng nọ <br />
	            Vẫn đẹp như đã từng <br />
	        </p>
			<p style={{ marginBottom: "7vh" }}>
	            Ở một phương trời khác <br />
	            Lại ngước mắt lên trời <br />
	            Mong ước được lên chơi <br />
	            Với chị Hằng, chú Cuội … <br />
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

export default TrungThu;
