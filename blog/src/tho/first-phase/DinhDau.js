import React from 'react';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function DinhDau() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };

	const nomTitle = "𢆥某丁酉𠄩空辻𦉱";
	const vietTitle = "Năm Mới Đinh-Dậu 2017";
    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>27𣎃1𢆥2017</h4>
            <p style={{ marginBottom: "1em" }}>
	            祝𢜠𢆥㵋春丁酉<br />
                𠬠時𤷙悞𫡠𡀳兜<br />
                𣇞時㐌𨖅𱑕𦊚歲<br />
                𠭤成𠬠公民全球<br />
            </p>
            <p style={{ marginBottom: "7vh" }}>
				揨爲失敗𦓡仃徠<br />
                打𠅒𠫾𪥘󠄁事業𨱽<br />
                唉𢝙𬨠𠫾揨𢞂𡛤<br />
                抵共僥向𬧐將來<br />
            </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>27/1/2017</h4>
            <p style={{ marginBottom: "1em" }}>
                Chúc-mừng-năm mới - Xuân Đinh-Dậu <br />
                Một thời ngây ngô mãi còn đâu <br />
                Giờ thì đã sang 14 tuổi <br />
                Trở thành một công-dân toàn-cầu <br />
            </p>
			<p style={{ marginBottom: "7vh" }}>
                Đừng vì thất-bại mà dừng-lại <br />
                Đánh-mất đi cả sự-nghiệp dài <br />
                Hãy vui lên đi đừng buồn nữa <br />
                Để cùng nhau hướng tới tương-lai <br />
            </p>
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

export default DinhDau;
