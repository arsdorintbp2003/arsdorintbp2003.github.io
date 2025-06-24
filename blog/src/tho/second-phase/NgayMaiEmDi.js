import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function NgayMaiEmDi() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center'
    };

    const nomTitle = `𣈗 𣈕 㛪 迻`;
    const vietTitle = 'Ngày mai em đi (2019)'

    const nomPoem = `
        𣈗 𣈕 㛪 𫪣 來 塊 坭 呢
        每 𡥵 塘 調 向 𨀏 𡑝 𠎩
        坭 执 𦑃 朱 约 𢠩 遊 学
        坭 湥 泪 𥿁 𨑗 眭 眉 𠹽

        𣈗 𣈕 㛪 𫪣 來 塊 坭 呢
        暎 𦝄 𥊚 迻 𦲿 核 初 殻
        𫚳 丕 哙 悶 拮 膏 㗂 咭
        只 哙 坭 低 仍 㗂 咀 𪡩

        𣈗 𣈕 㛪 𫪣 來 塊 坭 呢
        哙 胋 呢 只 命 倅 於 又
        𠇍 盞 酒 過 去 吧 現 在
        𥪞 𩂀 𫑹 滔 恜 𢖵 𧗱 哀

        𣈗 𣈕 㛪 𫪣 來 塊 坭 呢
        𣈗 𣈕 𠇍 倅 曳 如 世 纪
        懞 吵 於 坭 吀 重 柁 格
        㛪 仃 悁 仍 𣎃 𣈗 𦳦 青
    `;

    const sentencePerPage = 16;

    const renderVietVersion = () => (

        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}>
                { vietTitle }
                <div style={{fontSize: "15px"}}>(Lấy cảm-hứng từ bài-hát "Ngày Mai Em Đi (2017)")</div>
            </h3>
            <h4 style={{ textAlign: "left" }}>2/9/2019</h4>
            <p style={{ marginBottom: "1em" }}>
	            Ngày-mai em sẽ rời-khỏi nơi-này <br />
	            Mọi con-đường đều hướng đến sân-bay <br />
	            Nơi chắp-cánh cho ước-mơ du-học <br />
	            Nơi giọt-lệ vương trên khóe-mi cay <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Ngày-mai em sẽ rời-khỏi nơi-này <br />
	            Ánh-trăng mờ-đi, lá cây xơ-xác <br />
	            Chim chẳng còn muốn cất-cao tiếng hát <br />
	            Chỉ còn nơi-đây những tiếng thở-than <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Ngày-mai em sẽ rời-khỏi nơi-này <br />
	            Còn đêm-nay chỉ mình tôi ở-lại <br />
	            Với chén-rượu, quá-khứ và hiện-tại <br />
	            Trong cơn-say thao-thức nhớ về ai <br />
            </p>
            <p style={{ marginBottom: "7vh" }}>
	            Ngày-mai em sẽ rời-khỏi nơi-này <br />
	            Ngày-mai với tôi dài như thế-kỷ <br />
	            Mong sao ở nơi nghìn trùng xa-cách <br />
	            Em đừng quên những tháng-ngày tươi-xanh <br />
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

export default NgayMaiEmDi;
