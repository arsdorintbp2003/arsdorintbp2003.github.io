import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function CuoiThapNien() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };
    const nomTitle = `季 十 年`;
    const vietTitle = 'Cuối Thập Niên';

    const nomPoem = `
        些 於 低 𥪞 𣈗 季 十 年
        拱 𥆾 又 辻 𢆥 些 吔 𨀈
        辻 𢆥 長 成 辻 𢆥 梦 约
        辻 𢆥 𧶮 惜 𢗉 吝 昇 华

        𠬠 十 纪 坐 𨑗 几 家 场
        徐 𣈗 哙 執 𨅰 𤵖 笔 墨
        𨀏 𣇞 𡘯 坤 漸 苔 感 興
        曰 年 章 接 蹺 𥪞 局 代

        十 年 呢 𠇍 约 𢠩 揚 唋
        约 𢠩 𧗱 次 情 感 空 沛
        暎 𠒫 吔 來 柁 寻 眜
        𣈖 晬 丕 世 𨑤 垃 𣈗 𣈕

        𠬠 十 纪 时 間 㵢 速 过
        仍 约 𢠩 耒 𨀏 𣅶 𠴑 华
        边 𫔳 䉤 長 炮 花 𤊧 𠒫
        招 念 𪝮 朱 轉 行 程 柁
    `;

    const sentencePerPage = 16;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>31/12/2019</h4>
            <p style={{ marginBottom: "1em" }}>
	            Ta ở đây trong ngày cuối thập-niên <br />
	            Cùng nhìn lại mười năm ta đã bước <br />
	            Mười năm trưởng-thành, mười năm mộng-ước <br />
	            Mười năm của tiếc nuối lẫn thăng-hoa <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Một thập-kỷ ngồi trên ghế nhà-trường <br />
	            Từ ngày còn chập-chững nét bút-mực <br />
	            Đến giờ lớn-khôn, tràn-đầy cảm-hứng <br />
	            Viết nên chương tiếp-theo trong cuộc-đời <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Thập-niên này với ước-mơ dang-dở <br />
	            Ước-mơ về thứ tình-cảm không phai <br />
	            Ánh-sáng đã rời xa tầm mắt <br />
	            Bóng-tối chẳng thể che-lấp ngày-mai <br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            Một thập-kỷ - thời-gian trôi nhanh quá <br />
	            Những ước-mơ rồi đến lúc nở-hoa <br />
	            Bên cửa-sổ tràng pháo-hoa rực-sáng <br />
	            Gieo niềm-tin cho chuyến hành-trình xa <br />
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

export default CuoiThapNien;
