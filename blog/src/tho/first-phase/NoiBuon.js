import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function NoiBuon() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `𢚶 忿`;
    const vietTitle = 'Nỗi-buồn'

    const nomPoem = `
        自 𣛠 𢒎 𨀈 𬺗
        隰 洸 𠬠 餒 𢞂
        怞 固 𠡚 悁 㫻
        扔 拯 体 潙 得

        餒 𢞂 怞 𡘯 𡮈
        扔 拯 曉 在 哰
        怞 推 擬 勢 𱜢
        拱 空 哰 曉 得

        期 試 𢴍 進 𬧐
        只 𡀳 𠇍 𣈜 催
        𦓡 餒 𢞂 空 𢢯
        時 試 哰 卒 得

        拯 体 𱜢 斷 𠓀
        結 果 𧵑 𪥘 團
        不 㘈 徽 章 鐄
        𥋏 𢠩 成 現 寔

        𣎀 巴 吞 𥅞 𤽸
        貝 戰 勝 𧵑 些
        扔 餒 𢞂 漊 賒
        拯 体 𱜢 潙 得

        𥆾 蘿 旗 祖 國
        唪 然 𧡊 𢖵 茹
        吧 餒 𢞂 漊 賒
        自 然 得 解 碼
    `;

    const sentencePerPage = 24;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> {vietTitle} </h3>
            <h4 style={{ textAlign: "left" }}>7/11/2015</h4>
            <p style={{ marginBottom: "1em" }}>
	            Từ máy-bay bước xuống<br />
	            Thấp-thoáng một nỗi-buồn<br />
	            Dù cố-gắng quên luôn<br />
	            Nhưng chẳng thể vơi-được<br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Nỗi-buồn dù lớn nhỏ<br />
	            Nhưng chẳng hiểu tại-sao<br />
	            Dù suy-nghĩ thế-nào<br />
	            Cũng không-sao hiểu được<br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Kì-thi dần tiến-tới<br />
	            Chỉ còn mấy ngày thôi<br />
	            Mà nỗi-buồn không nguôi<br />
	            Thì thi sao tốt được<br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Chẳng thể nào đoán trước<br />
	            Kết-quả của cả đoàn<br />
	            Bất-ngờ - huy chương Vàng<br />
	            Giấc-mơ thành hiện-thực<br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Đêm Pathum thức trắng<br />
	            Với chiến-thắng của ta<br />
	            Nhưng nỗi-buồn sâu-xa<br />
	            Chẳng thể-nào vơi được<br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            Nhìn lá-cờ Tổ-quốc<br />
	            Bỗng-nhiên thấy nhớ nhà<br />
	            Và nỗi-buồn sâu-xa<br />
	            Tự-nhiên được giải-mã …<br />
			</p>
        </div>
    );

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
                <Breadcrumb language={language} />
            </div>
            { language === 'English' ? renderVietVersion() : renderNomVersion(nomTitle, nomPoem, sentencePerPage) }
            <Navigation poemTitle={ vietTitle } />
        </div>
    );
}

export default NoiBuon;
