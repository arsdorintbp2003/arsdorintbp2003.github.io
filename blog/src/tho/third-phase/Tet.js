import React from 'react';
import SP from '../../assets/images/Tet/Supermarket.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function Tet() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `緤`;
    const vietTitle = 'Tết'

    const nomPoem = `
        𢆥 呢 期 拧 節
        抖 曳 𨀏 𠦹 旬
        麻 空 气 忏 使
        据 如 某 头 春

        泣 搁 超 市 𡘯
        𠊛 𠊛 匝 笠 𧷸
        尽 䏦 蒌 榘 果
        耒 𫗗 𪭯 茄 咮

        各 件 行 尽 沚
        哀 速 吔 固 份
        車 𢵯 馱 奇 嬊
        車 唉 佇 𤾓 斤

        边 外 塘 咏 朗
        行 舘 変 𠅍 丟
        据 如 𣈗 尽 世
        吔 拉 降 𠖈 头

        節 据 曳 无 尽
        如 油 吻 哙 余
        自 𣈗 𩵜 𣎃 腊
        𨀏 𣇞 𩵜 𣎃 四
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> Tết </h3>
            <h4 style={{ textAlign: "left" }}>31/3/2020</h4>
            <p style={{ marginBottom: "1em" }}>
	            Năm nay kì-nghỉ Tết <br />
	            Kéo-dài đến chục tuần <br />
	            Mà không-khí sắm-sửa <br />
	            Vẫn như mới đầu xuân <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Khắp các siêu-thị lớn <br />
	            Người-người tấp-nập mua <br />
	            Hết thịt, rau củ quả, <br />
	            Rồi mì-gói, cà-chua <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Các kiện-hàng hết-sạch <br />
	            Ai nhanh đã có phần <br />
	            Xe-máy thồ cả yến <br />
	            Xe-hơi trữ trăm cân <br />
	        </p>
			<img
                src={SP}
                alt="SP"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Bên ngoài đường vắng-lặng <br />
	            Hàng-quán biến mất đâu <br />
	            Cứ như ngày tận-thế <br />
	            Đã sắp giáng xuống đầu <br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            Tết cứ dài vô-tận <br />
	            Như dầu vẫn còn dư <br />
	            Từ ngày cá tháng Chạp <br />
	            Đến giờ - Cá tháng Tư <br />
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

export default Tet;
