import React from 'react';
import BomBaCang from '../../assets/images/VQD/BomBaCang.png';
import DienBienPhu from '../../assets/images/VQD/DienBienPhu.png';
import VNDCCH from '../../assets/images/VQD/VNDCCH.png';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';
function VQD() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };
    const nomTitle = "嗹曲詩撝卫囯团";
    const vietTitle = "Liên Khúc Thơ Về Vệ Quốc Đoàn";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>21𣎃9𢆥2015</h4>
            <p style={{ marginBottom: "7vh" }}>
                渚𢧚𨠳衅外边<br />
                𠄼洲𦊚㴜調罗英㛪<br />
            </p>
            <h4 style={{ textAlign: "left" }}>23𣎃9𢆥2015</h4>
            <p style={{ marginBottom: "1em" }}>
                𨑮𢆥𫜵卫国团<br />
                𠸋𫩒、艱苦𤈟𠦳斤撩<br />
                勢軍勢渃吻隢<br />
                決心㧅銃越岹海云<br />
                打散內應外侵<br />
                北南侺合、人民𢝙𢯷。<br />
            </p>
            <img
                src={DienBienPhu}
                alt="DienBienPhu"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
            <h4 style={{ textAlign: "left" }}>24𣎃9𢆥2015</h4>
            <p style={{ marginBottom: "1em" }}>
                軍隊些、团卫国軍<br />
                犧牲戰鬥爲人民<br />
                𢷮𠸜扔𢚸胣空𢷮<br />
                㫻𡨺凭𦰟焒精神。<br />
            </p>
            <img
                src={BomBaCang}
                alt="BomBaCang"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
            <h4 style={{ textAlign: "left" }}>26𣎃9𢆥2015</h4>
            <p style={{ marginBottom: "1em" }}>
                渃越南民主共和<br />
                茹渃偉大𧵑民些<br />
                戰鬥𠁸欣𠀧十紀<br />
                掙獨立、統一渃茹。<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                扔𣇞𪜀𠬠時期恪<br />
                時社會主義共和<br />
                會入世界𡗉橄擺<br />
                团結、固𠡚𢖮越過。<br />
            </p>
            <img
                src={VNDCCH}
                alt="VNDCCH"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            /><br/>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>21/9/2015</h4>
            <p style={{ marginBottom: "7vh" }}>
                Chớ nên gây-hấn ngoài biên <br />
                Năm châu bốn biển đều là anh-em. <br />
            </p>
            <h4 style={{ textAlign: "left" }}>23/9/2015</h4>
            <p style={{ marginBottom: "1em" }}>
                Mười năm làm Vệ Quốc Đoàn <br />
                Khó-khăn, gian-khổ như ngàn cân treo <br />
                Thế quân thế nước vẫn nghèo <br />
                Quyết-tâm đeo súng vượt đèo Hải Vân <br />
                Đánh tan nội ứng, ngoại xâm <br />
                Bắc Nam sum họp, nhân-dân vui vầy. <br />
            </p>
            <img
                src={DienBienPhu}
                alt="DienBienPhu"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
            <h4 style={{ textAlign: "left" }}>24/9/2015</h4>
            <p style={{ marginBottom: "1em" }}>
                Quân-đội ta, Đoàn Vệ Quốc Quân <br />
                Hi-sinh chiến-đấu vì nhân-dân <br />
                Đổi tên nhưng lòng-dạ không đổi <br />
                Luôn giữ-vững ngọn-lửa tinh-thần. <br />
            </p>
            <img
                src={BomBaCang}
                alt="BomBaCang"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
            <h4 style={{ textAlign: "left" }}>26/9/2015</h4>
            <p style={{ marginBottom: "1em" }}>
                Nước Việt-Nam Dân-chủ Cộng-hòa <br />
                Nhà-nước vĩ-đại của dân ta <br />
                Chiến-đấu suốt hơn ba thập-kỷ <br />
                Giành độc-lập, thống-nhất nước nhà. <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Nhưng giờ là một thời-kỳ khác <br />
                Thời xã-hội chủ-nghĩa cộng-hòa <br />
                Hội-nhập thế-giới, nhiều cạm-bẫy <br />
                Đoàn-kết, cố-gắng ắt vượt-qua. <br />
            </p>
            <img
                src={VNDCCH}
                alt="VNDCCH"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            /><br/>
        </div>
    );

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
                <Breadcrumb language={language} />
            </div>
            { language === 'English' ? renderVietVersion() : renderNomVersion() }
            <Navigation poemTitle={ vietTitle } />
        </div>
    );
}

export default VQD;
