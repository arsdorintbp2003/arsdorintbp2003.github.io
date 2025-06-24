import React from 'react';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function QuyetTam() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };
    const nomTitle = "决心";
    const vietTitle = "Quyết-tâm";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>1𣎃10𢆥2015</h4>
            <p style={{ marginBottom: "7vh" }}>
	            𣇜𣋁𨑗塘𠫾𢭰𧅫<br />
                𬦮踤嵩縱增𨑗塘鐄<br />
                喝版雄歌革命<br />
                𥆾𡗶、𥆾𡐙𢚸𪨈迷醝<br />
                迷醝、𢣸哴𨉟別𢒎<br />
                𢒎𬦮、𢧚苦𤴬勢尼<br />
                𰸣𠓨丐㙤𬆄低<br />
                頭𨆝摨䓬、蹎𢬣𧖱𣹓<br />
                𠶣𱺵姉行𥯎別𬆄<br />
                𮞊𢬣、繃抪如勢尼<br />
                𢣸𨉟成𠊛傷兵<br />
                於𥪝病院、青平靜心<br />
                𧗱茹、裙𧛊𢧚唭忱<br />
                數𨉟黰𢫊時執催<br />
                耒突兀認信𢞂<br />
                偨祥當𫏚、㤮狂𨁟簜<br />
                𩩫𦘹𢭮、學徒空別<br />
                𣇞只𢥈偨儗休催<br />
                丕𦓡些吻據𱖗<br />
                𤴬蹎嘆咀空催責𡗶<br />
                𣇞㵋𧡊𠁀𨉟𠶣慜<br />
                𨁟扔空𢭁釁之𡗉<br />
                𬧺貝𠊛偨敬㤇<br />
                戰爭、𠰏彈、𡗉吝𱱇過<br />
                催𣇞沛決心最多<br />
                懃勤劬於笠如於茹<br />
                丕時㵋固成果<br />
                搷恩偨、𡏦渃茹𧵑些<br />
	        </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>1/10/2015</h4>
            <p style={{ marginBottom: "7vh" }}>
	            Buổi tối trên đường đi đổ rác <br />
	            Nhảy-nhót tung-tăng trên đường vàng <br />
	            Hát bản hùng ca Cách-mạng <br />
	            Nhìn trời, nhìn đất lòng càng mê-say <br />
	            Mê-say, ngỡ rằng mình biết bay <br />
	            Bay nhảy, nên khổ-đau thế này <br />
	            Vấp vào cái hố ngay-đây <br />
	            Đầu gối trầy xước, chân tay máu đầy <br />
	            May là chị hàng-xóm biết ngay <br />
	            Nhanh tay, băng bó như thế này <br />
	            Ngỡ mình thành người thương-binh <br />
	            Ở trong bệnh-viện, thanh-bình tĩnh-tâm <br />
	            Về nhà, quần rách nên cười thầm <br />
	            Số mình đen-đủi thì chấp thôi <br />
	            Rồi đột-ngột nhận tin buồn <br />
	            Thầy Tường đang vội, cuống cuồng ngã thang <br />
	            Xương-sườn gãy, học-trò không biết <br />
	            Giờ chỉ lo thầy nghỉ-hưu thôi <br />
	            Vậy mà ta vẫn cứ ngồi <br />
	            Đau chân than-thở không thôi trách trời <br />
	            Giờ mới thấy đời mình may-mắn <br />
	            Ngã nhưng không hề-hấn gì nhiều <br />
	            So với người thầy kính-yêu <br />
	            Chiến-tranh, bom đạn, nhiều lần trải-qua <br />
	            Thôi giờ phải quyết-tâm tối-đa <br />
	            Cần-cù ở lớp như ở nhà <br />
	            Vậy thì mới có thành-quả <br />
	            Đền ơn thầy, xây nước-nhà của ta <br />
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

export default QuyetTam;
