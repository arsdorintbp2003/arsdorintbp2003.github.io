import React from 'react';
import JenBW from '../../assets/images/CoGaiM57/JenBW.png';
import JenNghieng from '../../assets/images/CoGaiM57/JenNghieng.png';
import JenSmile from '../../assets/images/CoGaiM57/JenSmileBW.png';
import { language } from '../../Blog';
import renderNomVersion from '../TemplateRenderNom';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function CoGai() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `姑 𡛔 𠼽 𠄼 𦉱`;
    const vietTitle = 'Cô Gái M57'

    const nomPoem = `
        𠊛 𡥵 𡛔 膏 𠼽 𠄼 𦉱
        麻 𦎡 惵 𢭸 仙 降 尘
        暎 眜 𠒫 冲 麻 勅 稍
        麻 倅 吻 固 𡭧 碍 艮

        𠊛 𡥵 𡛔 膏 𠼽 𠄼 𦉱
        𦬻 唭 惵 如 暎 末 𡗶
        𪵯 朱 包 𧀞 心 忖 恜
        麻 倅 吻 丕 𪾋 吘 唎

        丕 勧 𠏳 某 姑 𠊛 卯
        丕 勧 崙 粉 稣 色 牟
        㛪 吻 惵 𦎡 姑 𡛔 越
        当 㤇 但 𠃓 丕 𪵯 牟

        㛪 𪜀 𠊛 𡥵 𡛔 倅 㤇
        惵 如 云 才 德 如 翹
        𨑗 簜 点 辻 㛪 辻 𠬠
        只 勧 势 催 丕 勧 堯

        约 之 时 間 𫪣 𱐁 㵢
        𣇞 笔 支 拪 吔 𨀏 耒
        暂 别 㛪 吧 哏 及 又
        圣 女 妙 䝨 𧶮 𢙱 倅

        辻 𢆥 奇 𠬠 拯 塘 曳
        𢖵 场 𢖵 垃 𢖵 細 埃
        只 懞 除 待 𣈗 及 又
        麻 語 如 丕 固 𣈗 𣈕

        𢖵 㛪 倅 哙 核 苹 疲
        𦲿 核 苚 㲸 沉 行 眉
        𢖵 㛪 倅 哙 𨗠 哙 𩙍
        𩙍 列 𠬠 壙 𡗶 牟 𥱬

        𢖵 㛪 倅 哙 花 哙 苦
        苦 𦼇 牟 花 納 𫕰 森
        𢖵 㛪 倅 哙 𦝄 哙 汴
        暈 𦝄 哭 㳥 嘸 喑 喑

        𢖵 㛪 哙 伴 親 𣈗 畧
        麻 懞 帝 只 𪜀 聀 𢠩
        𠊛 𡥵 𡛔 偀 㤇 𣇫 畧
        𡞕 拉 𡡇 𧶮 倅 𣊾 𣇞

        局 𤯨 碓 欺 实 不 𩵿
        聀 𢠩 𫡠 只 𪜀 聀 𢠩
        𥆾 㛪 幸 福 边 𠊛 某
        𥪞 心 𠬠 壙 𥧪 𪩬 爲

        𣦆 戈 包 𢆥 𣎃 緾 绵
        𣇞 倅 𤯨 𠇍 𠊛 𡞕 䝨
        拱 𡥥 𡥵 佳 𠄩 四 歲
        於 𥪞 𠬠 𡉦 咏 平 侒

        𠬠 歆 䟞 𨒺 塸 舖 古
        迭 命 及 又 𠊛 㤇 初
        𠊛 𡥵 𡛔 膏 𠼽 𠄼 𦉱
        吔 𠄼 辻 麻 吻 醝 𨠴

        㛪 𣇞 吔 𪜀 𠬠 婆 姑
        麻 吻 当 㤇 𨀏 不 𫠻
        𦬻 唭 㛪 吻 㫻 銼 𠒫
        睠 愈 心 魂 𧶮 家 詩

        拱 㛪 𢖵 又 纪 唸 初
        仍 記 忆 丕 世 沛 𢠩
        徐 吝 头 𦬻 唭 銼 𪱆
        𨀏 𣇞 吻 𦬻 唭 梦 𢠩

        𬩍 㖭 场 𪡻 𠦹 𢆥 耒
        又 坐 几 𥒥 㛪 𠇍 倅
        查 耒 吻 𠶆 䏦 𬔌 𪹷
        唎 許 𢆥 初 實 現 耒

        𥆾 㛪 仿 怫 𠬠 𢚶 忿
        𠄩 行 渃 眜 直 除 𣻆
        哴 𡞕 𫯰 㛪 空 幸 福
        婚 姻 𢗽 溂 实 当 忿

        𫯰 㛪 伴 親 倅 𣇫 畧
        𡞕 倅 伴 親 㛪 𣈗 芾
        某 𧡊 情 㤇 空 固 𤻳
        麻 𤻳 於 仍 𠊛 伴 親

        𣇞 及 又 㛪 麻 𧡊 惜
        惜 朱 𢼂 分 吔 安 排
        惜 朱 歲 𥘷 堯 惏 𢙲
        惜 𢗉 𠊝 仍 𣎃 𣈗 曳

        歲 𠄼 辻 別 包 責 任
        社 会 𡥵 丐 𨀏 家 庭
        情 㤇 𠇍 㛪 𪜀 𫡠 𫡠
        扔 丕 世 𢫊 𠊝 正 命

        拱 㛪 䟞 𨒺 湖 𠻀 𡀯
        揇 質 堆 盤 拪 怄 𦀫
        堆 盤 拪 呦 约 𢆥 初
        堆 盤 拪 丕 待 包 𣇞

        俸 𠬠 歆 𡥵 倅 通 𠸒
        準 𪝌 𪞷 眜 𡞕 將 來
        𡗶 𠲖 𠊟 𡥵 倅 吔 𡘯
        吔 𢗼 待 局 𤯨 𣈗 𣈕

        及 𡥵 妯 喂 惵 不 𫠻
        𡥵 倅 据 醚 𨀏 坦 𢠐
        𦬻 唭 暎 末 𡗶 𤐝 烩
        暎 眜 𠒫 冲 实 𤷙 他

        基 麻 𥉫 𡥵 𡭬 有 湿
        哙 峕 只 別 唭 呵 呵
        啫 𠽔 𡥙 膏 𠼽 𠄼 𦉱
        吒 芾 𡥵 乃 准 家 些

        耒 𨀏 𣈗 迻 及 通 家
        芙 榚 苔 妬 𨀈 皮 家
        爽 𠊛 𧡊 𪪳 婆 边 帝
        正 𪜀 𡞕 𫯰 㛪 媄 吒

        𠄩 仃 峕 吻 据 呐 唭
        𠄩 家 悁 憢 众 慄 𢝙
        耒 众 迻 挃 麻 悁 末
        歆 𬁉 𣈗 呐 𡀯 通 家

        奇 𦊚 众 倅 調 𦁀 𦇒
        位 別 包 纪 唸 𢆥 初
        位 情 景 喓 囄 現 在
        位 幸 福 呠 𥘷 將 來

        倅 𠇍 𫯰 㛪 拱 心 亊
        偀 些 丕 哙 泮 傳 初
        感 通 朱 环 境 現 在
        𠄩 家 拱 向 細 將 來

        畧 𣇞 逴 妯 𡅳 𠊟 𡭬
        𡥵 拜 幸 福 拜 長 成
        完 成 聀 𢠩 吒 𣈗 畧
        朱 聀 𢠩 𡥵 𫡠 牟 青
    `;

    const sentencePerPage = 16;

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}>
                { vietTitle }
                <div style={{fontSize: "15px"}}>(Lấy cảm-hứng từ bài-hát "Cô Gái M52")</div>
            </h3>
            <h4 style={{ textAlign: "left" }}>23/5/2018</h4>
            <p style={{ marginBottom: "1em" }}>
	            Người con-gái cao M57<br />
	            Mà xinh-đẹp tựa tiên giáng trần<br />
	            Ánh-mắt sáng-trong mà sắc-sảo<br />
	            Mà tôi vẫn có chút ngại-ngần.<br />
	        </p>
			<img
                src={JenNghieng}
                alt="JenNghieng"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Người con-gái cao M57<br />
	            Nụ-cười đẹp như ánh mặt-trời<br />
	            Làm cho bao trái-tim thổn-thức<br />
	            Mà tôi vẫn chẳng dám ngỏ-lời<br />
	        </p>
			<img
                src={JenSmile}
                alt="JenSmile"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Chẳng cần giống mấy cô người-mẫu<br />
	            Chẳng cần son-phấn tô sắc-màu<br />
	            Em vẫn đẹp-xinh - cô-gái Việt<br />
	            Đáng-yêu, giản-dị chẳng làm-màu<br />
	        </p>
			<img
                src={JenBW}
                alt="JenBW"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Em là người con-gái tôi yêu<br />
	            Đẹp như Vân, tài-đức như Kiều<br />
	            Trên thang điểm 10, em 11<br />
	            Chỉ cần thế thôi, chẳng cần nhiều<br />
            </p>
            <p style={{ marginBottom: "7vh" }}>
	            Ước-gì thời-gian sẽ ngừng-trôi<br />
	            Giờ-phút chia-tay đã đến-rồi<br />
	            Tạm-biệt em và hẹn-gặp-lại<br />
	            Thánh-nữ dịu-hiền của lòng-tôi<br />
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

export default CoGai;
