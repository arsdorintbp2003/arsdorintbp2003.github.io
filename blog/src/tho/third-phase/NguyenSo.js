import React from 'react';
import AnhTrang from '../../assets/images/NguyenSo/AnhTrang.jpg';
import Chim from '../../assets/images/NguyenSo/Chim.png';
import RungCo from '../../assets/images/NguyenSo/RungCo.png';
import ThaoNguyen from '../../assets/images/NguyenSo/Thaonguyen.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function NguyenSo() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `原 初`;
    const vietTitle = 'Nguyên-sơ'

    const nomPoem = `
        𦣰 朗 边 棱 椇
        𪜀 𠬠 园 苦 核
        𩙍 秋 倘 丟 低
        𩂀 𩄎 黄 𥪞 𪱆

        𦣰 朗 边 棱 椇
        𡧲 胞 𡗶 包 啰
        𫚳 丕 悶 𠎩 柁
        𫚳 𧗱 棱 𪵯 駔

        𦣰 朗 边 棱 椇
        些 沉 皮 𩂀 𢠩
        𧗱 𠬠 𡲈 惵 初
        𡧲 𠬠 时 現 代

        𦣰 朗 边 棱 椇
        𠬠 草 原 方 南
        𠬠 蹎 𡗶 柁 審
        𠬠 𢚶 𢖵 绵 曼

        𦣰 朗 边 棱 椇
        眣 井 聀 冲 𫅞
        𠬠 暎 𦝄 䝨 妙
        𠬠 暎 眜 矇 朚
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>12/10/2022</h4>
            <p style={{ marginBottom: "1em" }}>
	            Nằm lặng bên rừng-cọ <br />
	            Là một vườn cỏ-cây <br />
	            Gió thu thoảng đâu-đây <br />
	            Cơn mưa vàng trong nắng … <br />
            </p>
			<img
                src={RungCo}
                alt="RungCo"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Nằm lặng bên rừng-cọ <br />
	            Giữa bầu trời bao-la <br />
	            Chim chẳng muốn bay-xa <br />
	            Chim về rừng làm tổ. <br />
            </p>
			<img
                src={Chim}
                alt="Chim"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Nằm lặng bên rừng-cọ <br />
	            Ta chìm vào cơn mơ <br />
	            Về một vẻ đẹp xưa <br />
	            Giữa một thời hiện-đại. <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Nằm lặng bên rừng cọ <br />
	            Một thảo-nguyên phương-nam <br />
	            Một chân-trời xa thẳm <br />
	            Một nỗi-nhớ miên-man. <br />
	        </p>
			<img
                src={ThaoNguyen}
                alt="Thaonguyen"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Nằm lặng bên rừng-cọ <br />
	            Chợt tỉnh-giấc trong-lành <br />
	            Một ánh-trăng hiền-dịu <br />
	            Một ánh-mắt mong-manh … <br />
	        </p>
			<img
                src={AnhTrang}
                alt="AnhTrang"
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

export default NguyenSo;
