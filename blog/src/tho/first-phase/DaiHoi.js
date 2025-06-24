import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function DaiHoi() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `大 会`;
    const vietTitle = "Đại-Hội";

    const nomPoem = `
		𣈜 𣈕 𪜀 大 会
        𧵑 聯 隊 場 些
        𥈴 𥆾 自 滕 賒
        𦓡 𢞂 空 寫 浽

        𤗆 次 㫻 𠊝 𢷮
        扔 條 空 𢷮 𠊝
        𪜀 扒 頭 自 尼
        空 包 𣇞 與 𡛤

        𠀧 𢆥 連 侐 與
        少 固 𠇍 票 催
        𦓡 𣇞 低 吻 𱖗
        𥆾 𠓨 𥪝 房 合

        大 會 𬆄 𠓀 眜
        扔 過 𡑖 賒 𡸏
        怞 㦖 𠬠 吝 催
        拱 空 𡀳 基 会

        𱖗 責 𡗶 責 𡐙
        責 𪥘 󠄁 身 分 𨉟
        𪥘 󠄁 𠤩 點 排 形
        空 体 形 容 浽

        催 揨 嘆 咀 𡛤
        凭 𨀈 𠫾 𧗱 茹
        学 𫜵 排 增 加
        朱 戈 事 辱 若
    `;

    const sentencePerPage = 24;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30/9/2015</h4>
            <p style={{ marginBottom: "1em" }}>
	            Ngày mai là Đại-hội <br />
	            Của Liên-đội trường ta <br />
	            Đứng nhìn từ đằng-xa <br />
	            Mà buồn không tả nổi <br />
            </p>
			<p style={{ marginBottom: "1em" }}>
	            Mọi thứ luôn thay đổi <br />
	            Nhưng điều không đổi thay <br />
	            Là bắt đầu từ nay <br />
	            Không bao giờ dự nữa <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Ba năm liền “suýt” dự <br />
	            Thiếu có mấy phiếu thôi <br />
	            Và giờ-đây vẫn ngồi <br />
	            Nhìn vào trong phòng họp <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Đại-hội ngay trước mặt <br />
	            Nhưng quá đỗi xa-vời <br />
	            Dù muốn một lần thôi <br />
	            Cũng không còn cơ-hội <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Ngồi trách trời trách đất <br />
	            Trách cả thân-phận mình <br />
	            Cả 7 điểm bài hình <br />
	            Không thể hình dung nổi <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Thôi đừng than-thở nữa <br />
	            Vững bước đi về nhà <br />
	            Học, làm bài tăng-gia <br />
	            Cho qua sự nhục-nhã <br />
	        </p>
        </div>
    );

	return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
                <Breadcrumb language={language} />
            </div>
            {language === 'English' ? renderVietVersion() : renderNomVersion(nomTitle, nomPoem, sentencePerPage)}
            <Navigation poemTitle={ vietTitle } />
        </div>
    );}

export default DaiHoi;
