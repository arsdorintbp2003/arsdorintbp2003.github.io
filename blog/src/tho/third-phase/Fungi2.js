import React from 'react';
import LisaChuMoi from '../../assets/images/Fungi/LisaChuMoi.png';
import LisaCute from '../../assets/images/Fungi/LisaCute.png';
import LisaNghieng from '../../assets/images/Fungi/LisaNghieng.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function Fungi2() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `蕈 毒`;
    const vietTitle = 'Nấm 2 (Nấm độc)'

    const nomPoem = `
        斜 袄 㛪 隊 𦑃 天 神
        嵩 𠎩 𥪞 𩂀 𫗃 头 冬
        垠 溇 皮 尽 窮 块 腛
        𢚶 𢖵 𣭲 空 𠛣 香 脓

        隊 盤 拪 妙 陽 𣈗 𠂎
        吔 曾 招 包 𢚶 待 懞
        𢯒 揑 包 𧀞 心 脉 泖
        奇 青 春 除 待 枉 工

        隊 眜 碧 青 苔 魔 力
        披 腜 据 𠲖 𠾺 𠲺 𱐁
        𣈗 㛪 迻 外 𡗶 𫗃 攏
        斜 袄 初 𫢩 俸 吕 𨓡

        𣊿 冬 梗 伞 𠎩 初 殻
        胋 𧗱 胞 伴 𠇍 𥽔 𫑹
        𢖵 斜 袄 𥪞 𩂀 幻 覚
        悁 𢚶 愁 囸 在 𣅶 呢

        姑 𡛔 𢆥 𠂎 如 核 蕈
        丕 膏 扔 吻 拜 𥈴 𥆾
        殺 打 包 払 𤳆 某 𡘯
        𪵯 包 偀 散 𥓅 𡥵 心
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>25/12/2020</h4>
            <p style={{ marginBottom: "1em" }}>
	            Tà-áo em - đôi-cánh thiên-thần <br />
	            Tung-bay trong cơn-gió đầu đông <br />
	            Hằn-sâu vào tận-cùng khối-óc <br />
	            Nỗi nhớ-nhung không dứt hương-nồng <br />
            </p>
			<img
                src={LisaNghieng}
                alt="LisaNghieng"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Đôi bàn-tay dịu-dàng ngày-ấy <br />
	            Đã từng gieo bao nỗi đợi-mong <br />
	            Bóp-nát bao trái-tim mạch-máu <br />
	            Cả thanh-xuân chờ-đợi uổng-công <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Đôi-mắt biếc xanh đầy ma-lực <br />
	            Bờ-môi cứ e-thẹn ngập-ngừng <br />
	            Ngày em đi ngoài trời gió lộng <br />
	            Tà-áo xưa nay bỗng lạ-lùng <br />
	        </p>
			<img
                src={LisaCute}
                alt="LisaCute"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Chiều đông cành tán bay xơ-xác <br />
	            Đêm về bầu bạn với men say <br />
	            Nhớ tà-áo trong cơn ảo-giác <br />
	            Quên nỗi-sầu thực-tại lúc-này <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Cô-gái năm-ấy như cây nấm <br />
	            Chẳng cao nhưng vẫn phải ngước-nhìn <br />
	            “Sét-đánh” bao chàng-trai mới lớn <br />
	            Làm bao anh tan-vỡ con-tim. <br />
	        </p>
			<img
                src={LisaChuMoi}
                alt="LisaChuMoi"
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

export default Fungi2;
