import React from 'react';
import Peach from '../../assets/images/VQD/peach.png';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function FiveYear() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `纪唸𠄼𢆥𪵯詩`;
    const vietTitle = "Kỷ niệm 5 năm làm thơ";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>21𣎃9𢆥2020</h4>
            <p style={{ marginBottom: "1em" }}>
	            渚年㧡衅外边<br />
                𠄼周𦊚汴調𪜀偀俺<br />
            </p>
			<img
                src={Peach}
                alt="Peach"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            𢖵𣈗胋吻𠒫畑<br />
                傈曾張𬁫推㷙扪文<br />
                吔戈耒仍𣎃𢆥<br />
                曰詩生日毎𢆥𠬠吝<br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            𠄩𣳔詩固某韵<br />
                丕曳丕妬丕純越南<br />
                內容固𡭧枯乾<br />
                扔𪜀起点𠄼𢆥礼凌<br />
                自花𦲿苦核𨀏棱<br />
                自成功𨀏尽拱失敗<br />
                每形暻調待留拧𫡠<br />
                𢖵𣭲吵仍𢆥𣎃空沛<br />
	        </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>21/9/2020</h4>
            <p style={{ marginBottom: "1em" }}>
	            “Chớ nên gây-hấn ngoài biên <br />
	            Năm châu bốn biển đều là anh-em.” <br />
            </p>
			<img
                src={Peach}
                alt="Peach"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Nhớ ngày đêm vẫn sáng đèn <br />
	            Lật từng trang vở chui-rèn môn văn <br />
	            Đã qua rồi những tháng-năm <br />
	            Viết thơ sinh-nhật mỗi năm một lần <br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            Hai dòng-thơ có mấy vần <br />
	            Chẳng dài, chẳng đủ, chẳng thuần Việt-Nam <br />
	            Nội-dung có chút khô-khan <br />
	            Nhưng là khởi-điểm năm năm lẫy-lừng <br />
	            Từ hoa, lá, cỏ, cây đến rừng <br />
	            Từ thành-công, đến tận-cùng thất-bại <br />
	            Mọi hình-ảnh đều được lưu-giữ mãi <br />
	            Nhớ-nhung sao những năm-tháng không phai. <br />
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

export default FiveYear;
