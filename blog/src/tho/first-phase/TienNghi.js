import React from 'react';
import TV from '../../assets/images/TienNghi/TV.jpg';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function TienNghi() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };
    const nomTitle = `便冝`;
    const vietTitle = "Tiện-nghi";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>15𣎃2𢆥2016</h4>
            <p style={{ marginBottom: "1em" }}>
	            空伴空讎空之㵋<br />
                只懃𣛠併貝司韋<br />
                勢催𱺵𨁥𢧚基業<br />
                拯懃𠬠𡭧之便宜<br />
            </p>
			<img
                src={TV}
                alt="TV"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>15/2/2016</h4>
            <p style={{ marginBottom: "1em" }}>
	            Không bạn, không thù, không gì mới <br />
	            Chỉ cần máy-tính với tivi <br />
	            Thế-thôi là đủ nên cơ-nghiệp <br />
	            Chẳng cần một chút gì tiện-nghi. <br />
            </p>
			<img
                src={TV}
                alt="TV"
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
            <Navigation poemTitle={ vietTitle + " (tạm đặt)" } />
        </div>
    );
}

export default TienNghi;
