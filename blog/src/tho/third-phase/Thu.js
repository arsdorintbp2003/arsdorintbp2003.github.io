import React from 'react';
import Cafe from '../../assets/images/Thu/Cafe.png';
import LuoiLiem from '../../assets/images/Thu/LuoiLiem.jpg';
import ThuVe from '../../assets/images/Thu/ThuVe.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function Thu() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `秋`;
    const vietTitle = "Thu";
    const nomPoem = `
        暎 末 𡗶 吔 𠓬
        城 舖 吔 𨖲 畑
        㗂 𧥇 車 𠸄 喂
        㘇 望 泣 塳 𫩸

        踭 蹎 坭 舘 𪡻
        𡆑 唲 碏 咖 啡
        眣 丟 味 花 𣳪
        务 秋 𫢩 吔 𧗱

        𩂀 𫗃 秋 倘 倘
        捽 𢠿 𠃅 𬨻 青
        扠 妙 弄 曩 沼
        𫫞 味 秋 𠮾 令

        草 原 青 叭 兀
        除 待 𧿫 蹎 𠊛
        坭 曾 𪜀 𡉦 𡭕
        万 物 俸 𡨧 𦳦

        暎 末 𡗶 吔 𠓬
        𦝄 某 只 𦧜 鎌
        𢚸 𠊛 哀 𤍄 尽
        胋 𦝄 固 平 侒
    `;

    const sentencePerPage = 20;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>16/9/2020</h4>
            <p style={{ marginBottom: "1em" }}>
	            Ánh mặt-trời đã lặn <br />
	            Thành-phố đã lên đèn <br />
	            Tiếng còi xe inh-ỏi <br />
	            Vang-vọng khắp vùng ven <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Dừng chân nơi quán-cũ <br />
	            Nhâm-nhi tách cà-phê <br />
	            Chợt đâu mùi hoa-sữa <br />
	            Mùa-thu nay đã về <br />
            </p>
			<img
                src={Cafe}
                alt="Cafe"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Cơn gió thu thoang-thoảng <br />
	            Vuốt-ve mái tóc xanh <br />
	            Xoa-dịu lòng nặng-trĩu <br />
	            Nếm vị thu ngọt-lành <br />
            </p>
			<img
                src={ThuVe}
                alt="ThuVe"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Thảo-nguyên xanh bát-ngát <br />
	            Chờ đợi dấu chân người <br />
	            Nơi từng là ngõ-cụt <br />
	            Vạn vật bỗng tốt-tươi <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Ánh mặt-trời đã lặn <br />
	            Trăng mới chỉ lưỡi liềm <br />
	            Lòng người ai tỏ hết <br />
	            Đêm trăng có bình-yên? <br />
	        </p>
			<img
                src={LuoiLiem}
                alt="LuoiLiem"
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
            <Navigation poemTitle={ vietTitle + " (tạm đặt)" } />
        </div>
    );
}

export default Thu;
