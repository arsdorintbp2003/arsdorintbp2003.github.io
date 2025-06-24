import React from 'react';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function NgayTuBiet() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };

    const nomTitle = `𣈗辞别`;
    const vietTitle = "Ngày Từ-biệt";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30𣎃6𢆥2021</h4>
            <p style={{ marginBottom: "1em" }}>
	            辞别坉𠦳𢆥文献<br />
                城都畱恋𠊛青年<br />
                巴亭青春偀𫡠𢖵<br />
                黃梅還劍丕世悁<br />
	        </p>
			<p style={{ marginBottom: "7vh" }}>
	            家𪡻俸呂年𥧪𣥱<br />
                新加眣扽暎班𣈕<br />
                𠀧𢆥𠄼𢆥𥹰欣姅<br />
                除偀𧗱建造將來<br />
			</p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>30/6/2021</h4>
            <p style={{ marginBottom: "1em" }}>
	            Từ-biệt chốn ngàn năm văn-hiến <br />
	            Thành-đô lưu-luyến người thanh-niên <br />
	            Ba-Đình, Thanh-Xuân, anh mãi nhớ <br />
	            Hoàng-Mai, Hoàn Kiếm, chẳng thể quên <br />
	        </p>
			<p style={{ marginBottom: "7vh" }}>
	            Nhà-cũ bỗng trở nên trống-trải <br />
	            Tân Gia chợt đón ánh ban-mai <br />
	            Ba năm, năm năm, lâu hơn nữa <br />
	            Chờ anh về kiến-tạo tương-lai <br />
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

export default NgayTuBiet;
