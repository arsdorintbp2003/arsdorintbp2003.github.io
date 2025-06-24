import React from 'react';
import Portrait from '../../assets/images/DiChucFred/FredrichIIPortrait.png'
import War from '../../assets/images/DiChucFred/War.png'
import Navigation from '../Navigation';
import { language } from '../../Blog';
import Breadcrumb from '../Breadcrumbs';

function DiChucFred() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

	const nomTitle = "𠳒侇嘱𧶮󰃓嚦𠄩大帝";
	const vietTitle = "Lời Di-chúc của Friedrich II Đại-đế"
    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30𣎃12𢆥2015</h4>
            <p style={{ marginBottom: "1em" }}>
                𨉟些𪥘󠄁𠬠江山<br />
                東西南北埃溳得些<br />
                𨉟些𪥘󠄁𠬠渃茹<br />
                東西南北用魔𦓡溳<br />
            </p>
			<img
                src={Portrait}
                alt="Portrait"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
                爲些𱺵鬼猛欣<br />
                𫜵朱𡐙渃𠁀𠁀平安<br />
                渚𢧚𨠳釁外邊<br />
                𢆥洲𦊚㴜調𱺵英㛪<br />
                𢖵𠳒些吲空悁<br />
                東西南北𡀳𨑗戰場<br />
            </p>
			<img
                src={War}
                alt="War"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "7vh" }}>
                㦖些成𠬠烈強<br />
                𢟙𢥈𠦳役𤾓塘朱民<br />
            </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle + " (giả tưởng)"} </h3>
            <h4 style={{ textAlign: "left" }}>30/12/2015</h4>
            <p style={{ marginBottom: "1em" }}>
                Mình ta cả một giang-sơn <br />
                Đông Tây Nam Bắc ai vờn được ta <br />
                Mình ta cả một nước-nhà <br />
                Đông Tây Nam Bắc dùng ma mà hờn <br />
            </p>
			<img
                src={Portrait}
                alt="Portrait"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
                Vì ta là quỷ - mạnh hơn <br />
                Làm cho đất-nước đời-đời bình-yên <br />
                Chớ nên gây hấn ngoài biên <br />
                Năm châu bốn biển đều là anh em <br />
                Nhớ lời ta dặn không quên <br />
                Đông Tây Nam Bắc còn trên chiến-trường <br />
            </p>
			<img
                src={War}
                alt="War"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "7vh" }}>
                Muốn ta thành một liệt-cường <br />
                Chăm lo nghìn việc trăm đường cho dân. <br />
            </p>
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

export default DiChucFred;
