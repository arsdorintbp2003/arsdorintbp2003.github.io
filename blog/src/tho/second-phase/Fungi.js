import React from 'react';
import SooCute from '../../assets/images/Fungi/SooCuteBW.png';
import SooFan from '../../assets/images/Fungi/SooFan.png';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function Fungi() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `蕈`;
    const vietTitle = "Nấm";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30𣎃6𢆥2019</h4>
            <p style={{ marginBottom: "1em" }}>
	            香㛪仿怫奇空間<br />
                澜䏧𤽸雪拜啚傍<br />
                兆𢆥孤単迻𪵯媒<br />
                万年軟𢖵吻𢠩忙<br />
            </p>
			<img
                src={SooCute}
                alt="SooCute"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            娘似鮑魚𥪞弄汴<br />
                些只𪜀𥠯𠝖外軒<br />
                𥮊沐料固𢬗盤玉<br />
                咍橬黄某秤年緣<br />
	        </p>
			<img
                src={SooFan}
                alt="SooFan"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30/6/2019</h4>
            <p style={{ marginBottom: "2em" }}>
	            Hương em phảng-phất cả không-gian <br/>
	            Làn-da trắng, tuyết phải bẽ-bàng <br/>
	            Triệu năm cô-đơn, đi làm mối <br/>
	            Vạn năm nhung-nhớ, vẫn mơ-màng <br/>
            </p>
			<img
                src={SooCute}
                alt="SooCute"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "2em" }}>
	            Nàng tựa bào-ngư trong lòng-biển <br/>
	            Ta chỉ là rơm-rạ ngoài hiên <br/>
	            Đũa-mốc liệu có chòi mâm-ngọc <br/>
	            Hay trâm-vàng mới xứng nên duyên <br/>
	        </p>
			<img
                src={SooFan}
                alt="SooFan"
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

export default Fungi;
