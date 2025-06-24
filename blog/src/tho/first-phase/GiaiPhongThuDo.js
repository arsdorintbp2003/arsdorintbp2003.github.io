import React from 'react';
import GPTD from '../../assets/images/GiaiPhongThuDo/GiaiPhongThuDo.png';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function GiaiPhongThuDo() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };

    const nomTitle = `觧放首都`;
    const vietTitle = "Giải-phóng Thủ-đô";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>10𣎃10𢆥2015</h4>
            <p style={{ marginBottom: "1em" }}>
	            孟𱑕𣎃𱑕𣈜解放<br />
                軍賊滌𣈖𬨢首都<br />
                𠄩隖橋𧁶吧橋紙<br />
                迍團軍戰勝𠭤𧗱<br />
	        </p>
			<img
                src={GPTD}
                alt="GPTD"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>10/10/2015</h4>
            <p style={{ marginBottom: "1em" }}>
	            Mùng mười tháng mười, ngày giải-phóng <br />
	            Quân-giặc sạch-bóng khắp Thủ-đô <br />
	            Hai ô Cầu-Dền và Cầu-Giấy <br />
	            Đón đoàn-quân chiến-thắng trở về <br />
	        </p>
			<img
                src={GPTD}
                alt="GPTD"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
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

export default GiaiPhongThuDo;
