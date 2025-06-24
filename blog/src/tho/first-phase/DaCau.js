import React from 'react';
import DaCauImg from '../../assets/images/DaCau/DaCau.png'
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function DaCau() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };

    const nomTitle = `跢毬`;
    const vietTitle = "Đá Cầu";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>25𣎃9𢆥2015</h4>
            <p style={{ marginBottom: "1em" }}>
                㐌𠇍𣋚𫢩空跢球 <br />
                勢尼時固𠹾得兜 <br />
                𠭤徠、精神如回𡮈 <br />
                𢝙鮮、𪵯排徠自頭 <br />
			</p>
            <img
                src={DaCauImg}
                alt="DaCau"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
        </div>
    )

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>25/9/2015</h4>
            <p style={{ marginBottom: "1em" }}>
                Đã mấy hôm nay không đá cầu <br />
                Thế này thì có chịu được đâu <br />
                Trở lại, tinh-thần như hồi nhỏ <br />
                Vui-tươi, làm bài lại từ đầu. <br />
			</p>
            <img
                src={DaCauImg}
                alt="DaCau"
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

export default DaCau;
