import React from 'react';
import Autumn from '../../assets/images/CoGaiM57/Autumn.png';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import CoGai from './CoGaiM57';
import Breadcrumb from '../Breadcrumbs';

function CoGaiPhan2() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const vietTitle = "Cô Gái M57 (phần 2)";
    const renderVietVersion = () => (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
                <Breadcrumb language={language} />
            </div>
	        <div style={centerTextStyle}>
	            <h3 style={{ marginTop: "50px" }}>
	                { vietTitle }
	                <div style={{fontSize: "15px"}}>(Lấy cảm-hứng từ bài-hát "Tôi hỏi cây tần-bì")</div>
	            </h3>
	            <h4 style={{ textAlign: "left" }}>3/6/2018</h4>
	            <p style={{ marginBottom: "1em" }}>
		            10 năm - cả 1 chặng-đường dài <br />
		            Nhớ trường, nhớ lớp, nhớ tới ai <br />
		            Chỉ mong-chờ được ngày gặp-lại <br />
		            Mà ngỡ như chẳng có ngày-mai <br />
		        </p>
		        <p style={{ marginBottom: "1em" }}>
		            Nhớ em, tôi hỏi cây tần-bì <br />
		            Lá cây rụng ướt-đẫm hàng-mi <br />
		            Nhớ em, tôi hỏi mây hỏi gió <br />
		            Gió rít, một khoảng-trời màu-ghi <br />
	            </p>
				<img
	                src={Autumn}
	                alt="Autumn"
	                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
	            />
	            <p style={{ marginBottom: "1em" }}>
		            Nhớ em, tôi hỏi hoa hỏi cỏ <br />
		            Cỏ úa màu, hoa nấp bóng-râm <br />
		            Nhớ em, tôi hỏi trăng hỏi biển <br />
		            Vầng trăng khóc, sóng vỗ ầm-ầm <br />
		        </p>
		        <p style={{ marginBottom: "1em" }}>
		            Nhớ em, hỏi bạn-thân ngày-trước <br />
		            Mà mong đó chỉ là giấc-mơ: <br />
		            “Người con-gái anh yêu thuở-trước <br />
		            Vợ sắp cưới của tôi bây-giờ…” <br />
		        </p>
		        <p style={{ marginBottom: "7vh" }}>
		            Cuộc-sống đôi khi thật bất-ngờ <br />
		            Giấc-mơ mãi chỉ là giấc-mơ <br />
		            Nhìn em hạnh-phúc bên người-mới <br />
		            Trong tim một khoảng-trống bơ-vơ. <br />
				</p>
			</div>
			<Navigation poemTitle={ vietTitle } />
        </div>
    );

    return (
        <div>
            { language === 'English' ? renderVietVersion() : <CoGai/> }
        </div>
    );
}

export default CoGaiPhan2;
