import React from 'react';
import Rain from '../../assets/images/NangMua/Mua.png'
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function Mua() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };
    const nomTitle = `𩄎`;
    const vietTitle = "Mưa";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>31𣎃12𢆥2021</h4>
            <p style={{ marginBottom: "1em" }}>
	            𨗠顛<br />
                揾揾抖𨀏<br />
                边𡍞<br />
                細㳻仍曷𩄎<br />
                仍𦰟苦盧疎<br />
                㧤动<br />
                行核𫽭𣍿興曾湥源𤯨<br />
                隻舩青蹺㴖渃𡥵𡥵<br />
                朗边軒团战士輪噂<br />
                寻坭住矯卷㵢位津<br />
                注𧎜﨡俸𧡊命孤嗗<br />
                𣳔渃㵢拸身殻𧗱丟<br />
                𪪳𡗶𫢩𩄎萡奇𠃅头<br />
                固拜位惫舅𪪳𠵩啧<br />
                𩄎洟𩆋𠬠咴又細㳻<br />
                𩙍𩗂嘔㪚丐𤎏行𣈗<br />
                𪵯包𠊛沉皮聀㬳𫑹<br />
                𠬠𣇜暏侒娿。。。<br />
	        </p>
            <img
                src={Rain}
                alt="𩄎"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "7vh" }}>
	            𢩾眜跩𣈖𨗠寅㪚変<br />
                俸丟低仍𣈢𪱆滝玲<br />
                喝气𡗶感覚实冲令<br />
                喂！球虹出現！<br />
			</p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>31/12/2021</h4>
            <p style={{ marginBottom: "1em" }}>
	            Mây đen <br />
	            Ùn-ùn kéo đến <br />
	            Bên thềm <br />
	            Tí-tách những hạt mưa <br />
	            Những ngọn cỏ lưa-thưa <br />
	            Rung-động <br />
	            Hàng cây vươn vai hứng từng giọt nguồn sống <br />
	            Chiếc thuyền xanh theo lạch nước con-con <br />
	            Lặng bên hiên đoàn “chiến-sĩ” lon-ton <br />
	            Tìm nơi trú kẻo cuốn trôi vì lụt <br />
	            Chú ốc-sên bỗng thấy mình côi-cút <br />
	            Dòng nước trôi đưa thân-xác về đâu ? <br />
	            Ông trời nay mưa bạc cả mái đầu <br />
	            Có phải vì bị cậu ông quở trách ? <br />
	            Mưa rì-rào một hồi lại tí tách <br />
	            Gió mát xua-tan cái nóng hàng ngày <br />
	            Làm bao người chìm vào giấc-ngủ say <br />
	            Một buổi trưa yên-ả … <br />
	        </p>
            <img
                src={Rain}
                alt="Mưa"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "7vh" }}>
	            Chợp mắt dậy bóng mây dần tan-biến <br />
	            Bỗng đâu-đây những tia nắng long-lanh <br />
	            Hít khí trời - cảm-giác thật trong-lành <br />
	            Ôi ! Cầu-vồng xuất hiện ! <br />
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

export default Mua;
