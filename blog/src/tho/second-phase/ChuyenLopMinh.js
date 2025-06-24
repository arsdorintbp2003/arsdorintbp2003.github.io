import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function ChuyenLopMinh() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `𡀯 情 阿 𠬠`;
    const vietTitle = 'Chuyện Lớp Mình'

    const nomPoem = `
        𡀯 𧗱 𠬠 隊 情 人 𥘷
        𠇍 𠬠 媒 情 眣 𦬑 花
        情 棋 学 沾 鈡 𠬠 垃
        𠀧 𢆥 如 鈡 𠬠 𠃅 家

        油 哴 固 斥 覔 唤 𠳿
        峕 耒 吻 𠊡 𨀈 越 戈
        呧 耒 认 𪞷 𠬠 真 理
        平 侒 丕 拜 寻 丟 柁

        𡀯 𧗱 𠬠 隊 情 人 𥘷
        𠬠 朵 花 𦬑 晚 𡧲 𡗶
        式 𤯨 扛 漸 吧 猛 烈
        供 丕 劍 𠮾 嗷 𢝙 𦳦

        拱 憢 越 戈 包 㳥 𫗃
        丕 世 拱 憢 迍 末 𡗶
        惜 朱 𦑃 花 残 畧 𫔳
        只 哙 𪜀 記 忆 偧 吹

        𡀯 𧗱 𠬠 隊 情 人 𥘷
        𠬠 朵 花 沉 𬉵 謙 讓
        陰 忱 䒞 芃 实 朗 𨤧
        扔 吻 院 元 角 𡑝 场

        弍 𪜉 扽 仍 𣈢 𪱆 𣋽
        扽 奇 情 㤇 𣇜 𣊿 斜
        另 柁 仍 嗢 呦 社 会
        刴 花 𠂎 吻 据 生 𢐝

        𡀯 𧗱 𠬠 隊 情 人 𥘷
        刴 花 𫽭 自 埬 𱪳 殘
        𥿥 絏 𦀊 紅 𫵃 某 𠛣
        情 伴 𥹰 𢆥 俸 𨁝 散

        𠬠 勾 𡀯 𠮾 嗷 儉 𧡊
        油 格 柁 憢 尽 𡛤 𣈗
        情 惵 如 𢠩 𪜀 固 实
        念 㤇 怆 滇 𤀞 冬 苔
    `;

    const sentencePerPage = 16;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>27/1/2019</h4>
            <p style={{ marginBottom: "1em" }}>
				Chuyện về một đôi tình-nhân trẻ <br />
				Với một mối-tình chợt nở-hoa <br />
				Tình-cờ học thêm chung một lớp <br />
				Ba năm như chung một mái-nhà
			</p>
			<p style={{ marginBottom: "1em" }}>
                Dù rằng có xích-mích, cãi-vã <br />
                Thì rồi vẫn vững-bước vượt qua <br />
                Để rồi nhận-ra một chân-lý <br />
                Bình-yên chẳng-phải tìm đâu xa <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Chuyện về một đôi tình-nhân trẻ <br />
                Một đóa-hoa nở-muộn giữa trời <br />
                Sức-sống căng-tràn và mãnh-liệt <br />
                Cũng chẳng kém ngọt-ngào vui-tươi <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Cùng-nhau vượt-qua bao sóng-gió <br />
                Chẳng thể cùng-nhau đón Mặt-Trời  <br />
                Tiếc cho cánh-hoa tàn trước cửa <br />
                Chỉ còn là kí-ức xa-xôi <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Chuyện về một đôi tình-nhân trẻ <br />
                Một đóa hoa trầm-mặc, khiêm-nhường <br />
                Âm-thầm đơm bông thật lặng-lẽ <br />
                Nhưng vẫn vẹn-nguyên góc sân-trường <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Nhẹ-nhàng đón những tia-nắng sớm <br />
                Đón cả tình-yêu buổi chiều-tà <br />
                Tránh-xa những ồn-ào xã-hội <br />
                Đóa-hoa ấy vẫn cứ sinh-sôi <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Chuyện về một đôi tình-nhân trẻ <br />
                Đóa-hoa vươn từ đống tro-tàn <br />
                Sợi-dây tơ-hồng vừa mới dứt <br />
                Tình-bạn lâu-năm bỗng vụt-tan <br />
            </p>
            <p style={{ marginBottom: "7vh" }}>
                Một câu-chuyện ngọt-ngào hiếm-thấy <br />
                Dù cách xa-nhau tận nửa ngày <br />
                Tình đẹp như mơ là có thật <br />
                Niềm yêu-thương chan-chứa đong-đầy <br />
			</p>
		</div>
    );

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
                <Breadcrumb language={language} />
            </div>
            { language === 'English' ? renderVietVersion() : renderNomVersion(nomTitle, nomPoem, sentencePerPage) }
            <Navigation poemTitle={ vietTitle + " (tạm đặt)" } />
        </div>
    );
}

export default ChuyenLopMinh;
