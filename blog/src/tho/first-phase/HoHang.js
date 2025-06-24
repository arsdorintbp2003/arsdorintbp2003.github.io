import React from 'react';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function HoHang() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h4 style={{ textAlign: "left", marginTop: "50px" }}>29𣎃9𢆥2015</h4>
            <h3> 偶然 </h3>
            <p style={{ marginBottom: "7vh" }}>
	            春吹梨黰桀𣳔瀧<br />
                渃瀧污染𢭰𠓨垌<br />
                𠬠𨉟撒渃𢧚拯得<br />
                權兜𣇞𠅒工𪶎𣑺<br />
	        </p>
	        <h3 style={{ marginTop: "3vh" }}> 𣱆行 </h3>
	        <p style={{ marginBottom: "7vh" }}>
	            𣱆行罗指𠊛茹<br />
                共終𠬠蘔咍賒勢𱜢<br />
                時埃拱𱺵𡾵𣇟<br />
                𥗹匏𡗶𣱆自豪茹些<br />
	        </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h4 style={{ textAlign: "left", marginTop: "50px" }}>29/9/2015</h4>
            <h3> Ngẫu-nhiên </h3>
            <p style={{ marginBottom: "5vh" }}>
	            Xuân xui, lê đen kịt dòng-sông <br />
	            Nước sông ô-nhiễm đổ vào đồng <br />
	            Một mình tát nước nên chẳng được <br />
	            Quyền đâu, giờ mất công gieo-trồng <br />
	        </p>
	        <h3 style={{ marginTop: "3vh" }}> Họ-hàng </h3>
	        <p style={{ marginBottom: "7vh" }}>
	            Họ-hàng là chỉ người-nhà <br />
	            Cùng chung một nhánh hay xa thế-nào <br />
	            Thì ai cũng là ngôi-sao <br />
	            Tô bầu-trời họ, tự-hào nhà ta <br />
	        </p>
        </div>
    );

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
                <Breadcrumb language={language} />
            </div>
            { language === 'English' ? renderVietVersion() : renderNomVersion() }
            <Navigation poemTitle="Ngẫu Nhiên + Họ Hàng (tạm đặt)" />
        </div>
    );
}

export default HoHang;
