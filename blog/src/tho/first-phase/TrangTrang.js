import React from 'react';
import Katyusha from '../../assets/images/TrangTrang/KatyushaBW.png'
import LoweringFlag from '../../assets/images/TrangTrang/LoweringFlag.png'
import Moonstar from '../../assets/images/TrangTrang/Moonstar.jpg'
import Reichstag from '../../assets/images/TrangTrang/Reichstag.jpg'
import Snow from '../../assets/images/TrangTrang/SnowBW.png'
import WhiteMoon from '../../assets/images/TrangTrang/TrangTrang.jpg'
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function TrangTrang() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `𦝄 𤽸`;
    const vietTitle = 'Trăng-trắng'

    const nomPoem = `
		渃 俄 𣈜 𦝄 𤽸
        𤎜 𤊢 𬨢 坭 坭
        𥈴 眜 𥆾 𬨠 𡗶
        映 豪 光 𡸏 𡸏

        時 搊 曰 英 雄
        𫼳 包 饒 紀 念
		仍 張 史 曰 接
        訣 戰 鬥 𬧐 窮

        𡇐 發 掇 澭 勇
        侵 陵 𡐙 渃 尼
        共 僥 訣 𫥨 𢬣
        打 散 𡇐 兇 惡

        自 城 黎 𠲃 詰
        𦤾 𡐙 莫 斯 科
        大 砲 迦 朱 砂
        訣 打 散 軍 賊

        聚 合 自 漨 北
        訣 勝 陣 𠬒 箕
        越 瀧 咜 妮 押
        仍 𨀈 進 凭 傍

        𣎀 柏 林 𢠩 恾
        如 𪜀 𥪝 𥋏 夢
        總 反 攻 大 勝
        旗 斧 鐮 嵩 𢒎

        扔 𦓡 實 空 𠶣
        聯 搊 被 𨀎 𢭰
        旗 斧 鐮 被 下
        𠊝 憑 旗 渃 俄

        欣 𠄩 十 紀 戈
        每 欺 𱖗 𢖵 徠
        餒 𢞂 空 体 潙
        渃 眜 灑 𨑗 𦟐

		𢖵 砲 迦 朱 砂
        𢏑 賒 𤾓 𣘃 數
        𢖵 旗 斧 鐮 𧹻
        嵩 𢒎 𨑗 𧂭 茹

        𢖵 𣊿 莫 斯 科
        雪 撫 𤽸 𣹓 茹
        增 喀 𪵯 添 𣋁
        爲 主 义 社 會

        渃 俄 𣇞 𠊝 𢷮
        𪜀 渃 資 本 耒
        扔 𣎃 𣈜 賒 𥸷
        吻 𡀳 㘇 𠻾 𫡠

        𣊾 𣇞 𱖗 𢖵 徠
        𥈴 眜 𬨠 匏 𡗶
        𦝄 𤽸 𬨢 坭 坭
        映 豪 光 𡸏 𡸏
    `;

    const sentencePerPage = 16;


    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> Trăng-trắng </h3>
            <h4 style={{ textAlign: "left" }}>29/9/2015</h4>
            <p style={{ marginBottom: "1em" }}>
	            Nước Nga ngày trăng trắng <br />
	            Rạng-ngời khắp nơi-nơi <br />
	            Ngước mắt nhìn lên trời <br />
	            Ánh hào-quang vời-vợi… <br />
			</p>
            <img
                src={WhiteMoon}
                alt="TrangTrang"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Thời Xô-Viết anh-hùng <br />
	            Mang bao nhiêu kỉ-niệm <br />
	            Những trang sử viết tiếp <br />
	            Quyết chiến-đấu tới cùng <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Bọn phát-xít ung-dung <br />
	            Xâm lăng đất-nước này <br />
	            Cùng nhau quyết ra tay <br />
	            Đánh tan bọn hung-ác <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Từ thành Lê-nin-grát <br />
	            Đến đất Mát-xcơ-va <br />
	            Đại pháo Ka-chiu-sa <br />
	            Quyết đánh tan quân giặc <br />
			</p>
            <img
                src={Katyusha}
                alt="Katyusha"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Tụ họp từ vùng Bắc <br />
	            Quyết thắng trận Cút-xcơ <br />
	            Vượt sông Đni-ép <br />
	            Những bước-tiến vững-vàng <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Đêm Béc-lin mơ-màng <br />
	            Như là trong giấc-mộng <br />
	            Tổng phản-công đại thắng <br />
	            Cờ búa-liềm tung bay <br />
			</p>
            <img
                src={Reichstag}
                alt="Reichstag"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Nhưng mà thật không may <br />
	            Liên-Xô bị sụp-đổ <br />
	            Cờ búa-liềm bị hạ <br />
	            Thay bằng cờ nước Nga <br />
			</p>
            <img
                src={LoweringFlag}
                alt="LoweringFlag"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Hơn hai thập-kỉ qua <br />
	            Mỗi khi ngồi nhớ-lại <br />
	            Nỗi buồn không thể vơi <br />
	            Nước-mắt rơi trên má <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Nhớ pháo Ka-chiu-sa <br />
	            Bắn xa trăm cây-số <br />
	            Nhớ cờ búa-liềm đỏ <br />
	            Tung bay trên nóc-nhà. <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Nhớ chiều Mát-xcơ-va <br />
	            Tuyết phủ trắng đầy nhà <br />
	            Tăng ca, làm thêm tối <br />
	            Vì chủ-nghĩa xã-hội <br />
			</p>
            <img
                src={Snow}
                alt="Snow"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Nước Nga giờ thay-đổi <br />
	            Là nước tư-bản rồi <br />
	            Nhưng tháng ngày xa-xôi <br />
	            Vẫn còn vang-vọng mãi. <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
	            Bây-giờ ngồi nhớ-lại <br />
	            Ngước-mắt lên bầu-trời <br />
	            Trăng trắng khắp nơi-nơi <br />
	            Ánh hào-quang vời-vợi… <br />
	        </p>
            <img
                src={Moonstar}
                alt="Moonstar"
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

export default TrangTrang;
