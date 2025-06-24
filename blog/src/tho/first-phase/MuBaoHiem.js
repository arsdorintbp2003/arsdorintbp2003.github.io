import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function MuBaoHiem() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        textAlign: 'center',
    };

    const nomTitle = `帽 保 險`;
    const vietTitle = 'Mũ-bảo-hiểm'

    const nomPoem = `
		孟 𠤩 𣎃 𱑕 𣈜 𣋚 𫢩
        𱺵 𣈜 重 大 𧵑 𣎃 尼
        丐 𢃱 保 險 𦭷 青 𧘇
        用 𠤩 𢆥 𡗶 吻 於 低

        𠤩 𢆥 實 𨱽 𦓡 實 𠦯
        些 㐌 同 行 𱍿 𡗋 耒
        𢺹 𢩿 𢞂 𢝙 𡀯 咍 𡁎
        吧 𨑗 仍 壙 塘 賒 𥸷

        請 倘 唏 猛 𢬣 𠬠 子
        打 淶 𬺗 𡐙 侐 𥒮 耒
        勢 𦓡 𢃱 拯 𢭁 反 背
        忠 誠 絕 對 貝 主 𨉟

        喂 丐 𢃱 保 險 𦭷 青
        共 些 縱 橫 𤗆 方 𡗶
        局 𤯩 勢 𱜢 拱 空 𢷮
        只 𠬠 𢃱 催 𪥘 局 𠁀
    `;

    const sentencePerPage = 16;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> {vietTitle} </h3>
            <h4 style={{ textAlign: "left" }}>7/10/2015</h4>
            <p style={{ marginBottom: "1em" }}>
	            Mùng bảy tháng mười, ngày hôm nay <br />
	            Là ngày trọng-đại của tháng này <br />
	            Cái mũ bảo-hiểm màu xanh ấy <br />
	            Dùng bảy năm trời, vẫn ở đây <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Bảy năm thật dài mà thật ngắn <br />
	            Ta đã đồng-hành lâu lắm rồi <br />
	            Chia-sẻ buồn vui, chuyện hay dở <br />
	            Và trên những quãng-đường xa-xôi <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Thỉnh-thoảng hơi mạnh-tay một tí <br />
	            Đánh rơi xuống đất, suýt vỡ rồi <br />
	            Thế mà mũ chẳng hề phản-bội <br />
	            Trung-thành tuyệt-đối với chủ mình <br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            Ôi, cái mũ bảo-hiểm màu xanh <br />
	            Cùng ta tung-hoành mọi phương-trời <br />
	            Cuộc-sống thế nào cũng không đổi <br />
	            Chỉ một mũ thôi, cả cuộc-đời <br />
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

export default MuBaoHiem;
