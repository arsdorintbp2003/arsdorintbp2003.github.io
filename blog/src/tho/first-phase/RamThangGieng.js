import React from 'react';
import Moon from '../../assets/images/RamThangGieng/Moon.jpg';
import ThapHuong from '../../assets/images/RamThangGieng/ThapHuong.jpg';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function RamThangGieng() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `𦝃𣎃𦙫`;
    const vietTitle = "Rằm Tháng Giêng";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>22𣎃2𢆥2016</h4>
            <p style={{ marginBottom: "1em" }}>
	            𣋚𫢩𱺵𣈜𦝃𣎃正<br />
                化鐄迻香汲𥯎𫣂<br />
                𨅸𠓀盤𰨂𢬣拜𥚄<br />
                𠓨𫷨求佛於外軒<br />
	        </p>
			<img
                src={ThapHuong}
                alt="ThapHuong"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            求懞𢆥㵋汲襊錢<br />
                咍𱺵只㦖得平安<br />
                𨑗𡗶𦝄𤽸圇爃𤊨<br />
                𢣸𱺵落𨀈坉神仙<br />
            </p>
			<img
                src={Moon}
                alt="Moon"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>22/2/2016</h4>
            <p style={{ marginBottom: "1em" }}>
	            Hôm-nay là ngày Rằm tháng Giêng <br />
	            Hóa-vàng đưa hương ngập xóm-giềng <br />
	            Đứng trước bàn-thờ, tay vái-lạy <br />
	            Vào chùa cầu Phật ở ngoài hiên. <br />
	        </p>
			<img
                src={ThapHuong}
                alt="ThapHuong"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Cầu mong năm mới ngập túi-tiền <br />
	            Hay là chỉ muốn được bình-yên <br />
	            Trên trời trăng trắng, tròn vằng-vặc <br />
	            Ngỡ là lạc bước chốn thần-tiên. <br />
            </p>
			<img
                src={Moon}
                alt="Moon"
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

export default RamThangGieng;
