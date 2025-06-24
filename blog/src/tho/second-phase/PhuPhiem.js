import React from 'react';
import Friendzone from '../../assets/images/PhuPhiemASCLBucTuong/Friendzone.jpg';
import Anhsang from '../../assets/images/PhuPhiemASCLBucTuong/AnhSang.jpg';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function PhuPhiem() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `凫 氾`;
    const vietTitle = 'Phù Phiếm!';

    const nomPoem = `
        对 𠇍 埃 倅 只 𪜀 凫 氾
        𦊚 𢆥 曳 偎 实 当 自 豪
        沖 𨒺 倅 众 奴 据 唭 皮
        伴 親 一 番 敦 𪜀 𫡠 𫡠

        对 𠇍 埃 倅 只 𪜀 凫 氾
        固 仍 欺 倅 只 悶 发 傎
        辱 全 份 𦖑 呠 奴 𢯧 扦
        拪 扲 刀 只 悶 𠛌 𠄧 发

        对 𠇍 埃 倅 只 𪜀 凫 氾
        拙 𦊚 𢆥 丕 固 之 𢫊 𠊝
        吵 呠 众 据 𥆾 皮 倅 低
        𠇍 暎 眜 𫵃 轻 𫵃 怆 敢

        对 𠇍 埃 倅 只 𪜀 凫 氾
        唹 伴 親 𡨧 过 諸 𪵯 吵
        欣 块 𠊛 丕 固 埃 噞 皮
        凫 氾 如 势 呢 哙 唱 𠺲

        对 𠇍 埃 倅 只 𪜀 凫 氾
        对 𠇍 倅 众 奴 丕 𪜀 之
        𨑗 𡥵 塘 麻 倅 吻 𨀈 迻
        暎 𠒫 真 俚 㫻 擂 烩
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>8/4/2018</h4>
            <p style={{ marginBottom: "1em" }}>
	            Đối với ai tôi chỉ là phù-phiếm? <br />
	            4 năm dài ôi thật đáng "tự-hào" <br />
	            Xung-quanh tôi chúng-nó cứ cười vào: <br />
	            "BẠN-THÂN-NHẤT - FRIENDZONE là mãi-mãi" <br />
	        </p>
			<img
                src={Friendzone}
                alt="Friendzone"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
			<br/>
			<p style={{ marginBottom: "1em" }}>
	            Đối với ai tôi chỉ là phù-phiếm? <br />
	            Có những khi tôi chỉ muốn phát-điên <br />
	            Nhục toàn-phần nghe bọn-nó xỏ-xiên <br />
	            Tay cầm dao, chỉ muốn đâm vài phát. <br />
            </p>
			<p style={{ marginBottom: "1em" }}>
	            Đối với ai tôi chỉ là phù-phiếm? <br />
	            Suốt bốn năm chẳng có gì đổi-thay <br />
	            Sao bọn-chúng cứ nhìn vào tôi đây? <br />
	            Với ánh mắt vừa khinh vừa "thương-cảm". <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Đối với ai tôi chỉ là phù-phiếm? <br />
	            Ừ bạn-thân, tốt quá chứ làm-sao? <br />
	            Hơn khối người chẳng có ai thèm vào. <br />
	            Phù-phiếm như-thế-này, còn sướng chán <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Đôi với ai tôi chỉ là phù-phiếm? <br />
	            Đối với tôi, chúng-nó chẳng là gì. <br />
	            Trên con-đường mà tôi vẫn bước-đi <br />
	            Ánh-sáng chân-lý luôn soi rọi… <br />
	        </p>
			<img
                src={Anhsang}
                alt="Anhsang"
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

export default PhuPhiem;
