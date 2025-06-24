import React from 'react';
import Bike from '../../assets/images/ConDuongXua/BikeXua.png';
import Nay from '../../assets/images/ConDuongXua/Nay.png';
import Quat from '../../assets/images/ConDuongXua/Quat.png';
import ThiCong from '../../assets/images/ConDuongXua/ThiCongXua.png';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function ConDuongXua() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `𡥵塘初`;
    const vietTitle = "Con Đường Xưa ...";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30𣎃3𢆥2021</h4>
            <p style={{ marginBottom: "2em" }}>
	            𡥵塘初<br />
                岋䃄曲肘<br />
                𫗃拸香弍妙<br />
                路蹺𧿭蹎哀<br />
	        </p>
			<img
                src={Bike}
                alt="Bike"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            𡥵塘初<br />
                婆拸𡥙迻学<br />
                𨑗隻車踏𡥵𧋉<br />
                蜚匿大戈𡉦咏𨒺𧿼<br />
                踤䤲車 - 堯𣅶供当𢗼<br />
                丐㯊鉄垠溇𥪞潜识<br />
	        </p>
			<p style={{ marginBottom: "2em" }}>
	            𡥵塘初<br />
                工場珰施工<br />
                仍胋曳杜𠾦纵<br />
                尋踸。。。<br />
                抖曳无尽<br />
                㗂車辺和皮仍聀𢠩<br />
	        </p>
			<img
                src={ThiCong}
                alt="ThiCong"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "2em" }}>
	            𡥵塘初<br />
                𫢩吔空哙𪜀塘坦<br />
                空哙𡊱桃园橘<br />
                毎𣋑春𧗱<br />
	        </p>
			<img
                src={Quat}
                alt="Quat"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "2em" }}>
	            𡥵塘𫢩<br />
                𡗶𩄎𤂫𩙍北<br />
                拸些𧗱<br />
                仍感触忖腔<br />
                𧶮仍𣈗除待绵曼<br />
                𧶮𠬠时𠇍別包怀唸<br />
	        </p>
			<img
                src={Nay}
                alt="Nay"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30/3/2021</h4>
            <p style={{ marginBottom: "1em" }}>
	            Con-đường xưa <br />
	            Gập-ghềnh khúc-khuỷu <br />
	            Gió đưa hương nhẹ-dịu <br />
	            Lần theo vết-chân ai <br />
	        </p>
			<img
                src={Bike}
                alt="Bike"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Con-đường xưa <br />
	            Bà đưa cháu đi-học <br />
	            Trên chiếc xe-đạp con-cóc <br />
	            Phi nước đại qua ngõ-vắng quanh-co <br />
	            Tuột-xích xe - nhiều lúc cũng đáng-lo <br />
	            Cái yên-sắt hằn-sâu trong tiềm-thức <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Con-đường xưa <br />
	            Công-trường đang thi-công <br />
	            Những đêm dài đổ bê-tông <br />
	            Chầm-chậm <br />
	            Kéo-dài vô-tận <br />
	            Tiếng xe ben hòa vào những giấc-mơ <br />
	        </p>
			<img
                src={ThiCong}
                alt="ThiCong"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Con-đường xưa <br />
	            Nay đã không-còn là đường-đất <br />
	            Không còn chậu đào vườn quất <br />
	            Mỗi dịp xuân về <br />
	        </p>
			<img
                src={Quat}
                alt="Quat"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Con-đường nay <br />
	            Trời mưa phùn gió bấc <br />
	            Đưa ta về <br />
	            Những cảm-xúc xốn-xang <br />
	            Của những ngày chờ-đợi miên-man <br />
	            Của một thời với biết bao hoài-niệm… <br />
	        </p>
			<img
                src={Nay}
                alt="Nay"
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

export default ConDuongXua;
