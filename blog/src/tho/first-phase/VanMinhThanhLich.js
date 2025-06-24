import React from 'react';
import ThangLong from '../../assets/images/VanMinhThanhLich/ThangLong.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function VanMinhThanhLich() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `文 明 青 歷`;
    const vietTitle = 'Văn-minh Thanh-lịch'

    const nomPoem = `
		文 明 青 歷 埃 拱 懃
        一 𱺵 些 仍 𠊛 公 民
        坭 𡐙 昇 龍 𠦳 𢆥 史
        坭 河 內 㐌 𠇍 𠦳 春

        學 咹 時 㫻 㫻 慈 遜
        學 吶 沛 別 𡨺 丐 𠵘
        學 襘 珥 瓖 曾 䌰 扱
        學 𢲫 珥 𢬣 渚 盆 𤶐

        文 明 青 歷 𱺵 應 處
        𨑗 敬 𨑜 讓 𨤰 自 然
        宗 師 重 道 空 体 少
        㕵 渃 𢖵 源 𰨂 祖 先

        傷 𠊛 傷 身 和 𫜵 𠬠
        𡥵 欣 仛 茹 享 福 𪠗
        姉 𨁟 㛪 㨢 怞 㳥 𩙍
        英 㛪 𦅰 襆 仍 𣎃 𣈜

        文 明 青 歷 𱺵 交 接
        吶 沛 𡨺 𠳒 渚 固 悁
        𠳒 嘲 𠫾 𠓀 𫼳 𦭷 冉
        攄 𠳒 𦓡 吶 拯 𠅒 錢

        吶 𡗉 禍 𨁲 𦤾 實 𮞊
        𠬠 句 忍 平 𠃩 句 令
        捥 𦧜 𠤩 吝 𱺵 上 策
        抵 局 𠁀 𣼼 汲 𦭷 青

        文 明 正 𱺵 經 驗 𤯩
        得 翁 仛 些 㐌 傳 𠫾
        揨 包 𣇞 悁 𠫾 傳 統
        𦓡 民 族 些 𫡠 刻 𥱬
    `;

    const sentencePerPage = 14;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>29/9/2016</h4>
            <p style={{ marginBottom: "1em" }}>
	            Văn-minh thanh-lịch ai cũng cần <br />
	            Nhất là ta, những người công-dân <br />
	            Nơi đất Thăng-Long ngàn năm sử <br />
	            Nơi Hà-Nội đã mấy nghìn xuân <br />
	        </p>
			<img
                src={ThangLong}
                alt="ThangLong"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
			<p style={{ marginBottom: "1em" }}>
	            Học ăn thì luôn-luôn từ-tốn <br />
	            Học nói phải biết giữ cái-mồm <br />
	            Học gói nhẹ-nhàng từng nếp-gấp <br />
	            Học mở nhẹ tay, chớ bồn-chồn <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Văn-minh thanh-lịch là ứng-xử <br />
	            Trên-kính-dưới-nhường, lẽ tự-nhiên <br />
	            Tôn-sư-trọng-đạo, không thể thiếu <br />
	            Uống-nước-nhớ-nguồn, thờ tổ-tiên <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Thương-người-thương-thân hòa làm một <br />
	            Con hơn cha, nhà hưởng phúc dày <br />
	            Chị-ngã-em-nâng, dù sóng-gió <br />
	            Anh-em đùm bọc những tháng-ngày <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Văn-minh thanh-lịch là giao-tiếp <br />
	            Nói phải giữ lời chớ có quên <br />
	            Lời-chào đi trước mang màu-nhiệm <br />
	            Lựa lời mà nói chẳng mất tiền <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Nói nhiều họa ập đến thật nhanh <br />
	            Một câu nhịn bằng chín câu lành <br />
	            Uốn-lưỡi-bảy-lần là thượng-sách <br />
	            Để cuộc-đời tràn ngập màu xanh <br />
			</p>
			<p style={{ marginBottom: "7vh" }}>
	            Văn-minh chính là kinh-nghiệm sống <br />
	            Được ông-cha-ta đã truyền-đi <br />
	            Đừng bao giờ quên đi truyền-thống <br />
	            Mà dân-tộc ta mãi khắc-ghi <br />
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

export default VanMinhThanhLich;
