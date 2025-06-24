import React from 'react';
import Boat from '../../assets/images/ChiLamBlink/boat.png'
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function ChiLamBlink() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };

    const nomTitle = `男人志`;
    const vietTitle = "Nam Nhân Chí (Chí làm trai)";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>14𣎃6𢆥2020</h4>
            <p style={{ marginBottom: "1em" }}>
                人前東渡對林風<br />
                清願如來望興隆<br />
                别鄉年少無患難<br />
                失機末運不怨嘆<br />
            </p>
            <p style={{ marginBottom: "2em" }}>
                或是縘恳韁黑馬<br />
                周遊四海滅紅魚<br />
                鬚眉剃净迎新日<br />
                酒色气財不憂思<br />
            </p>
            <img
                src={Boat}
                alt="Boat"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
            <h3 style={{ marginTop: "50px" }}> 志𪵯𤳆（版譯）</h3>
            <p style={{ marginBottom: "1em" }}>
	            扦𨃷渡東𠇍𫗃岸<br />
                妮姑唸仸祝平安<br />
                离别故乡时𤳆𥘷<br />
                𬇭埮𢙲运丕㤪𪡩<br />
	        </p>
	        <p style={{ marginBottom: "2em" }}>
	            枝甭切繮𡥵黒馬<br />
                週遊𦊚波斬𩵜紅<br />
                𫘼𣭒𠜯忍𣈗𧎛殻<br />
                痴醚酒嗇丕縝𥿁<br />
	        </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>14/6/2020</h4>
			<p style={{ marginBottom: "1em", fontSize: "1.5em", fontFamily: "Nom Na Tong" }}>
                人前東渡對林風<br />
                清願如來望興隆<br />
                别鄉年少無患難<br />
                失機末運不怨嘆<br />
            </p>
            <p style={{ marginBottom: "2em", fontSize: "1.5em", fontFamily: "Nom Na Tong" }}>
                或是縘恳韁黑馬<br />
                周遊四海滅紅魚<br />
                鬚眉剃净迎新日<br />
                酒色气財不憂思<br />
            </p>
            <img
                src={Boat}
                alt="Boat"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0 7vh 0' }}
            />
            <h4 style={{ textAlign: "left" }}>Dịch Hán Việt</h4>
            <p style={{ marginBottom: "1em" }}>
	            Nhân tiền Đông-độ đối lâm phong<br />
	            Thỉnh-nguyện Như-Lai vọng hưng-long<br />
	            Biệt hương niên-thiếu vô hoạn-nạn<br />
	            Thất-cơ mạt-vận bất oán-than <br />
            </p>
            <p style={{ margin: '3vh 0 7vh 0' }}>
	            Hoặc thị hệ khẩn cương hắc mã<br />
	            Chu-du tứ hải diệt hồng ngư<br />
	            Tu mi thế tịnh nghênh tân nhật<br />
	            Tửu-sắc-khí-tài, bất ưu-tư<br />
            </p>
            <h4 style={{ textAlign: "left" }}>Bản Việt</h4>
            <p style={{ marginBottom: "1em" }}>
	            Chen-chúc đò-đông với gió-ngàn <br />
	            Ni-cô niệm Phật chúc bình-an <br />
	            Ly-biệt cố-hương thời trai-trẻ <br />
	            Sa-cơ-lỡ-vận, chẳng oán-than <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Chi bằng siết-cương con hắc-mã <br />
	            Chu-du bốn bể chém cá-hường <br />
	            Râu-mày cạo-nhẵn ngày lột-xác <br />
	            Si-mê tửu-sắc, chẳng vấn-vương <br />
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

export default ChiLamBlink;
