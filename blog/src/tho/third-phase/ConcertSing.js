import React from 'react';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function ConcertSing() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        marginTop: '30px'
    };

    const nomTitle = `约 𢠩`;
    const vietTitle = 'Concert of Life';

    const nomPoem = `
        𠬠 𣇜 𠒫 冲 𫅞
        𡧲 𠬠 𡗶 嗃 伵
        𠬠 心 魂 忖 𧥾
        拉 𪮻 皮 约 𢠩

        辞 𠳝 𠒫 𠳝 暏
        𨀏 㴽 𬗢 𣳮 叭
        扽 埅 耒 杜 落
        每 役 拜 完 成

        轉 艚 拉 起 行
        踣 𨖲 塘 矯 𢙲
        博 巴 卢 实 速
        𧼋 麻 空 洎 咀

        吻 𪜀 𡥵 艚 𠂎
        些 迻 又 行 𣈗
        扔 感 覚 暗 𫢩
        如 於 層 𨗠 恪

        𨑗 艚 寅 咧 度
        𠬠 橄 牟 親 悁
        尽 紅 耒 又 顛
        𥪞 塸 域 伴 帝

        尽 待 除 湿 忝
        呵 加 冷 低 耒
        只 𠄧 笔 姅 催
        𪜀 𨀏 𡑝 运 动

        𡥵 塘 曳 吧 廣
        𫢩 廡 謹 汴 𠊛
        聚 𧗱 辞 泣 坭
        插 行 除 𨀏 辣

        泙 空 待 𤀞 渃
        𥝥 空 𤀞 啚 𩛖
        幸 麻 匣 𠲧 𩛖
        空 惫 哀 发 現

        𣇞 拜 除 𠀧 㗂
        渃 丕 固 悄 芾
        家 卫 生 𠮿 嗃
        插 行 𠄧 𠦹 𠼽

        忊 哙 壂 戈 𠼽
        呐 𡀯 朱 扡 忿
        扔 固 仍 𢚶 忿
        忊 插 行 觧 銼

        𡗶 𫢩 如 㯷 火
        𩂀 垾 丆 抖 曳
        扔 麻 丕 𩛖 哀
        𠇍 行 𠊛 𧷸 渃

        耒 供 越 戈 待
        𡑝 𢲫 𫔳 朱 皮
        速 如 𠬠 鋂 牢
        占 𡊲 𬆄 头 吉

        𠊛 峕 坐 練 咭
        𠊛 𠹗 𠇍 伴 佊
        固 𠊛 又 空 𠴜
        坐 习 忠 曰 傦

        𫵃 𩛖 𫵃 湿 慘
        𢗼 露 𠅍 匣 𩚵
        找 吔 𦉱 𣇞 欣
        𩛖 速 消 哙 趿

        刷 围 𫼔 待 发
        奇 𡑝 拱 仝 声
        仍 暎 眜 滝 玲
        𤼸 朝 念 幸 福

        只 𥪞 𠬠 笔 𠺷
        奇 𡑝 俸 熄 源
        㗂 嗂 呼 直 𣻆
        待 除 条 拉 𨀏

        𦊚 天 神 出 現
        炪 𪸔 奇 厹 场
        低 某 𪜀 天 塘
        仃 哙 吵 惕 势

        𥪞 触 感 慌 𢘽
        㗂 𠲣 𠿀 㘇 𨖲
        喂 只 悶 发 傎
        𦉱 𢆥 曳 除 待

        𡧲 汴 紅 𤊧 懙
        丕 㧙 拜 𪵯 之
        外 故 𪟙 咭 詩
        吧 拐 充 尽 𠽋

        催 戎 䏾 又 促
        叨 𬏚 耒 痺 痺
        丕 𨤧 拜 𪞷 𧗱
        暂 别 情 㤇 𣋽

        空 世 如 势 待
        𠶢 叨 𨀏 发 傎
        拜 於 又 位 銭
        拱 仝 𢚸 鼓 舞

        色 紅 顛 𬹏 銼
        漸 汲 仍 朵 花
        垖 些 𨑗 末 坦
        咍 於 層 𨗠 柁

        丕 过 厙 呧 㤇
        呧 𫑹 呧 拱 咭
        丕 哙 位 銭 鉑
        拱 都 都 都 都

        些 拱 憢 𥘷 𫡠
        𢖵 又 𣈗 吔 戈
        仍 𣈗 稟 𮨶 加
        𣈗 哙 𪜀 𡥥 𥘷

        仍 𣈗 青 春 𠂎
        丕 持 又 包 𣇞
        仍 記 忆 柁 初
        成 𠬠 份 泖 䏦

        拱 𪸔 𨖲 𠬠 吝
        如 世 𪜀 吝 季
        仍 暎 眜 㴷 涗
        仍 𡥵 舩 𪞷 洃

        俸 暎 畑 払 又
        結 束 聀 梦 曳
        仍 惜 𢗉 空 沛
        料 哙 𣈗 及 又
    `;

    const sentencePerPage = 12;

    const renderVietVersion = () => (

        <div style={centerTextStyle}>
            <h3> Ước Mơ </h3>
            <h4> Phần 1: { vietTitle } </h4>
            <h4>13/5/2023</h4>
            <p style={{ marginBottom: "1em" }}>
	            Một buổi sáng trong-lành<br/>
	            Giữa một trời háo-hức<br/>
	            Một tâm-hồn thổn-thức<br/>
	            Sắp chạm vào ước-mơ.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Từ bữa sáng, bữa trưa<br/>
	            Đến giặt-là, rửa bát<br/>
	            Dọn phòng rồi đổ rác<br/>
	            Mọi việc phải hoàn-thành.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Chuyến tàu sắp khởi-hành<br/>
	            Vội lên đường kẻo lỡ<br/>
	            Vác ba-lô thật nhanh<br/>
	            Chạy mà không kịp thở.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Vẫn là con tàu ấy<br/>
	            Ta đi lại hàng ngày<br/>
	            Nhưng cảm-giác hôm nay<br/>
	            Như ở tầng mây khác<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Trên tàu dần lác-đác<br/>
	            Một gam màu thân-quen<br/>
	            Hết hồng rồi lại đen<br/>
	            “Trong khu vực bạn đó”<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Hết đợi-chờ thấp-thỏm<br/>
	            Ga Gia-Lãnh đây rồi!<br/>
	            Chỉ vài phút nữa thôi<br/>
	            Là đến sân-vận-động!<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Con-đường dài và rộng<br/>
	            Nay phủ-kín biển người<br/>
	            Tụ về từ khắp nơi<br/>
	            Xếp-hàng chờ đến lượt.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Bình không được chứa nước<br/>
	            Cặp không chứa đồ ăn<br/>
	            May mà hộp thức-ăn<br/>
	            Không bị ai phát hiện.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Giờ phải chờ ba tiếng<br/>
	            Nước chẳng có tẹo nào<br/>
	            Nhà-vệ-sinh xôn-xao<br/>
	            Xếp-hàng vài chục mét<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Đành gọi điện qua Mes<br/>
	            Nói-chuyện cho đỡ buồn<br/>
	            Nhưng có những “nỗi-buồn”<br/>
	            Đành xếp-hàng giải-tỏa.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Trời nay như bốc-hỏa<br/>
	            Cơn “hạn-hán” kéo dài<br/>
	            Nhưng mà chẳng ăn ai<br/>
	            Với hàng người mua nước.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Rồi cũng vượt-qua được<br/>
	            Sân mở cửa cho vào<br/>
	            Nhanh như một mũi lao<br/>
	            Chiếm chỗ ngay đầu CAT<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Người thì ngồi luyện hát<br/>
	            Người chat với bạn-bè<br/>
	            Có người lại không care<br/>
	            Ngồi tập-trung viết code.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Vừa ăn vừa thấp-thỏm<br/>
	            Lo lộ mất hộp cơm<br/>
	            Chết! Đã bảy giờ hơn<br/>
	            Ăn nhanh tiêu còn kịp.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Loạt video được phát<br/>
	            Cả sân cùng đồng-thanh<br/>
	            Những ánh-mắt long-lanh<br/>
	            Dâng-trào niềm hạnh-phúc<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Chỉ trong một phút chốc<br/>
	            Cả sân bỗng “Tắt-nguồn”<br/>
	            Tiếng reo-hò trực tuôn<br/>
	            Đơi-chờ điều sắp đến…<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Bốn “thiên-thần” xuất-hiện<br/>
	            Đốt cháy cả cầu-trường<br/>
	            Đây mới là thiên-đường<br/>
	            Đừng hỏi: “Sao thích thế”<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Trong xúc-cảm “hoang-dại”<br/>
	            Tiếng “huýt-sáo” vang lên<br/>
	            Ôi! Chỉ muốn phát điên<br/>
	            Bảy năm dài chờ-đợi<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Giữa biển hồng rực-rỡ<br/>
	            Chẳng biết phải làm gì<br/>
	            Ngoài cố-gắng hát thi<br/>
	            Và quẩy sung hết nấc<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Thôi xong! Bụng lại xóc<br/>
	            Đau nhức rồi tê-tê<br/>
	            Chẳng lẽ phải ra về<br/>
	            “Tạm biệt tình-yêu” sớm?<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Không thể như thế được.<br/>
	            Dẫu đau đến phát điên<br/>
	            Phải ở lại vì … tiền<br/>
	            Cùng đồng-lòng cổ-vũ<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Sắc hồng đen lan-tỏa<br/>
	            Tràn-ngập những đóa-hoa<br/>
	            Đôi ta trên mặt-đất<br/>
	            Hay ở tầng mây xa?<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Chẳng quá khó để yêu<br/>
	            Để say, để cùng hát<br/>
	            Chẳng còn vì tiền-bạc<br/>
	            Cùng “DDU-DU DDU-DU”.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Ta cùng nhau trẻ mãi<br/>
	            Nhớ lại ngày đã qua<br/>
	            Những ngày “Boombayah”<br/>
	            Ngày còn là đứa trẻ.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Những ngày thanh-xuân ấy<br/>
	            Chẳng trở-lại bao-giờ<br/>
	            Những ký-ức xa-xưa<br/>
	            Thành một phần máu thịt.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Cùng cháy lên một lần<br/>
	            Như thể là lần cuối<br/>
	            Những ánh-mắt đắm-đuối<br/>
	            Những con-thuyền ra-khơi.<br/>
	        </p>
			<p style={{ marginBottom: "7vh" }}>
	            Bỗng ánh-đèn bật lại<br/>
	            Kết-thúc giấc-mộng dài<br/>
	            Những tiếc-nuối không phai<br/>
	            Liệu còn ngày gặp-lại?<br/>
	        </p>
        </div>
    );

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5vh' }}>
                <Breadcrumb language={language} />
            </div>
            { language === 'English' ? renderVietVersion() : renderNomVersion(nomTitle, nomPoem, sentencePerPage) }
            <Navigation poemTitle={ vietTitle + " (tạm đặt)" } />
        </div>
    );
}

export default ConcertSing;
