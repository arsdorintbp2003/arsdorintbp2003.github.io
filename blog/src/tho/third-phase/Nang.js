import React from 'react';
import Mat from '../../assets/images/NangMua/ChaeEyes.png';
import Mu from '../../assets/images/NangMua/ChaeHatBW.png';
import Begin from '../../assets/images/NangMua/WinBegin.png';
import End from '../../assets/images/NangMua/WinEndBW.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function Nang() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `𪱆`;
    const vietTitle = 'Nắng'

    const nomPoem = `
        㗂 鵸 𠰁 联 咴
        望 皮 椌 𫔳 𡮈
        𣋃 東 吝 垃 露
        𠬠 𣈗 某 𪱆 𨖲

        𩙍 囂 𨗠 唲 弍
        捽 𢠿 末 湖 𤐝
        除 𪱆 黄 恗 嗇
        吧 𪵯 惵 朱 代

        𪱆 踨 噌 䟞 舖
        𪱆 染 牟 苦 核
        𪱆 朱 代 𡭧 𠼦
        吧 奇 𡭧 𡃻 𠹽

        𪱆 蹦 戈 岱 𡶀
        𪱆 𧗱 𠇍 大 岸
        𨄾 戈 垌 穭 𤇢
        挃 𨒻 扒 坉 寻

        𪱆 皮 𥪞 勾 咭
        𪱆 染 牟 眜 㛪
        𪱆 𣅙 牟 花 紺
        𪱆 愁 拱 𠇍 㛪

        暎 𪱆 暏 迻 𠅍
        越 閍 重 大 洋
        补 嘿 𠊛 於 又
        拱 𩄎 𩙍 縝 𥿁

        𥪞 𩂀 𫑹 忱 哙
        𪱆 𪜀 哀 𪜀 哀
        𪱆 迻 耒 𢮿 又
        咍 𫡠 𫡠 柁 𠊛

        𩂀 𩄎 𩆋 樾 𩄳
        𩙍 坤 制 嗂 𢜏
        眣 戈 椌 𫔳 𡮈
        仍 𣈢 𪱆 矇 朚

        𨗠 紅 拱 核 苦
        朗 扽 𣇜 黃 昏
        𥋴 𥆾 𣈢 𪱆 季
        耒 𫑹 聀 㬳 唁

        𣈗 𣈕 𡗶 又 𪱆
        耒 匙 倘 又 𩄎
        哙 边 椌 𫔳 𡮈
        固 𣈖 哀 待 除
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}>
                { vietTitle }
                <div style={{fontSize: "15px"}}>(Lấy cảm-hứng từ bộ-phim "Em và Trịnh")</div>
            </h3>
            <h4 style={{ textAlign: "left" }}>23/7/2022</h4>
            <p style={{ marginBottom: "1em" }}>
	            Tiếng gà-gáy liên-hồi <br />
	            Vọng vào khung-cửa nhỏ <br />
	            Rạng-đông liền lấp-ló <br />
	            Một ngày mới nắng lên <br />
            </p>
			<img
                src={Begin}
                alt="Begin"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Gió heo mây nhè-nhẹ <br />
	            Vuốt-ve mặt hồ soi <br />
	            Chờ nắng-vàng khoe-sắc <br />
	            Và làm đẹp cho đời <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Nắng tung-tăng dạo phố <br />
	            Nắng nhuộm màu cỏ-cây <br />
	            Nắng cho đời chút mặn <br />
	            Và cả chút đắng-cay. <br />
            </p>
			<img
                src={Mu}
                alt="Mu"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Nắng băng qua đồi-núi <br />
	            Nắng về với đại-ngàn <br />
	            Ghé-qua đồng lúa chín <br />
	            Chơi đuổi-bắt, trốn-tìm. <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Nắng vào trong câu-hát <br />
	            Nắng nhuộm màu mắt em <br />
	            Nắng khuya màu hoa tím <br />
	            Nắng sầu cùng với em <br />
            </p>
			<img
                src={Mat}
                alt="Mat"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Ánh nắng trưa đi mất <br />
	            Vượt muôn trùng đại-dương <br />
	            Bỏ mặc người ở-lại <br />
	            Cùng mưa, gió vấn-vương. <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Trong cơn-say thầm-hỏi: <br />
	            “Nắng là ai ? Là ai ?” <br />
	            Nắng đi rồi quay lại <br />
	            Hay mãi-mãi xa người ? <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Cơn mưa rào vụt-tạnh <br />
	            Gió khôn-xiết reo-mừng <br />
	            Chợt qua khung-cửa nhỏ <br />
	            Những tia-nắng mong-manh. <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Mây-hồng cùng cây-cỏ <br />
	            Lặng đón buổi hoàng-hôn <br />
	            Ngắm-nhìn tia-nắng cuối <br />
	            Rồi say-giấc ngủ ngon <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Ngày-mai trời lại nắng <br />
	            Rồi thi-thoảng lại mưa <br />
	            Còn bên khung-cửa nhỏ <br />
	            Có bóng ai đợi-chờ. <br />
	        </p>
			<img
                src={End}
                alt="End"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />

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

export default Nang;
