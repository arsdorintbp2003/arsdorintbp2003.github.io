import React from 'react';
import Berlin from '../../assets/images/PhuPhiemASCLBucTuong/Berlin.jpg';
import BlackWay from '../../assets/images/PhuPhiemASCLBucTuong/BlackWay.jpg';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function BucTuong() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `幅 墙`;
    const vietTitle = 'Bức-Tường'

    const nomPoem = `
        固 幅 墙 牟 青
        固 幅 墙 牟 𪜕
        吧 𨑗 代 供 固
        幅 墙 𠸜 无 形

        固 墙 曳 𠄼 𠼽
        固 墙 曳 万 𠲹
        扔 𠇍 幅 墙 呢
        朝 曳 如 无 尽

        墙 曳 垠 暎 𠒫
        𤐝 烩 心 魂 倅
        代 吻 据 势 㵢
        𨑗 𡥵 塘 𣅵 晬

        局 代 包 艰 厙
        調 伮 力 越 戈
        希 望 吻 𥪞 些
        諸 包 𣇞 𨁝 𢴑

        幅 墙 吔 支 㓤
        𠬠 份 四 局 代
        只 哙 包 惜 𢗉
        縝 𥿁 𥪞 𢙱 𠊛
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (

        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>13/4/2018</h4>
            <p style={{ marginBottom: "1em" }}>
	            Có bức-tường màu-xanh <br />
	            Có bức-tường màu-đỏ <br />
	            Và trên-đời cũng có <br />
	            Bức-tường tên “Vô Hình”. <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Có tường dài năm mét <br />
	            Có tường dài vạn cây <br />
	            Nhưng với bức-tường này <br />
	            Chiều dài như vô tận <br />
	        </p>
			<img
                src={Berlin}
                alt="Berlin"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
			<p style={{ marginBottom: "1em" }}>
	            Tường dài ngăn ánh-sáng <br />
	            Soi rọi tâm-hồn tôi <br />
	            Đời vẫn cứ thế trôi <br />
	            Trên con đường tăm-tối <br />
	        </p>
			<img
                src={BlackWay}
                alt="BlackWay"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
			<p style={{ marginBottom: "1em" }}>
	            Cuộc-đời bao gian-khó <br />
	            Đều nỗ-lực vượt-qua <br />
	            Hi vọng vẫn trong ta <br />
	            Chưa bao giờ vụt-tắt <br />
	        </p>
			<p style={{ marginBottom: "7vh" }}>
	            Bức-tường đã chia-cắt <br />
	            Một-phần-tư cuộc-đời <br />
	            Chỉ còn bao tiếc-nuối <br />
	            Vấn-vương trong lòng-người <br />
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

export default BucTuong;
