import React from 'react';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function NineX() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `題材研究𬩍𢒂嗌戈詩`;
    const vietTitle = "ĐỀ-TÀI NGHIÊN-CỨU VỀ 9X QUA THƠ";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>21/6/2016</h4>
            <p style={{ marginBottom: "1em" }}>
                <h4>份𠬠：馬头 </h4>
                𠃩益𣈜𠸗𦤾𣈜𣈕<br />
                兜只固每於站戒<br />
                恆𢆥兜只𠓨巴𬦮<br />
                固沛埃拱適債差<br />
                兜只𱖗茹印絲涅<br />
                𫜵𬆄韋椂抵鉤来<br />
                揨打價𡍚會𠃩益<br />
                𫜵閧𠬠世系將来<br />
			</p>
			<p style={{ marginBottom: "1em" }}>
                <h4>份𠄩：𣈗初 </h4>
	            𠊛越些呠𱺵民忱𠻨<br />
                固役扔拯𠹾𢬾𠬠句<br />
                唪然𩂀雹自兜<br />
                𫜵𢧚句傗餒𤴬𨁲𧗱<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                塊東歐唪然𨀎𢭰<br />
                越南𠅒𡊲澦聯搊<br />
                拱𠶣𢷮㵋㐌𠓺<br />
                迻些會入歇孤夐耒<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Internet 𣈜𪨈發展<br />
                𢆥𠃩𠤩越南固𠸜沔<br />
                自低發展纏綿<br />
                𫜵𢧚世系頭先得用<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                梗解智扒頭𠊝𢷮<br />
                樂韓㐌𦤾越南耒<br />
                𢴍迻風格𬨠𡾵<br />
                成潮流㵋搐𤉚𢖖󠄁尼<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                𠊛越呠𱺵民𠻨到<br />
                拯𠇍欺適吶𧗱𨉟<br />
                𦓡 Yahoo! 拱實驚<br />
                𫜵𫥨 blog 學生常用<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                仍館涅𠚐𬨠如菍<br />
                Game online 𢫈𨷯曾茹<br />
                Audition 貝聯軍<br />
                MU, 突擊武林傳期<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                隻 webcam 𠬠時神聖<br />
                起源包 hot teen 𠁀頭<br />
                𠊛𤷍膠𤢇𩯀𣘽<br />
                𣭛時獅子𦟐紅朱腜<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                Yahoo Mes 𠬠時玄話<br />
                𢫈痗𢬣 nick chat 𨓐𦖻<br />
                寄𣳔 teencode 𬧐埃<br />
                𦓡䟻㗂 buzz 自𣈜𬧐𣎀<br />
			</p>
			<p style={{ marginBottom: "7vh" }}>
                <h4>份𠀧：𣈗𫢩 </h4>
	            耒時埃拱沛𡘯<br />
                𫼳仍重責𧵑時將來<br />
                時間𠓀眜𡀳𨱽<br />
                扔揨𢱚費抵𣈕耒𫜵<br />
                抵迻形影渃南<br />
                𫏖尋世界𠁔卬英豪<br />
                抵欺戎𢖵𣈜𱜢<br />
                𠬠時歲𥘷別包𢝙𢞂<br />
	        </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>21/6/2016</h4>
            <p style={{ marginBottom: "1em" }}>
                <h4>Phần 1: Mở đầu </h4>
                9x ngày-xưa đến ngày-mai <br />
	            Đâu chỉ có mỗi ở trạm-cai <br />
	            Hằng năm đâu chỉ vào bar nhảy <br />
	            Có phải ai cũng thích trái-sai <br />
	            Đâu chỉ ngồi nhà - Internet <br />
	            Làm ngay Vlog để câu Like <br />
	            Đừng đánh-giá nhầm hội 9x <br />
	            Làm hỏng 1 thế hệ tương-lai. <br />
			</p>
			<p style={{ marginBottom: "1em" }}>
                <h4>Phần 2: Ngày xưa </h4>
	            Người Việt ta vốn là dân thầm-kín <br />
	            Có việc nhưng chẳng chịu hé một câu <br />
	            Bỗng-nhiên cơn-bão từ đâu <br />
	            Làm nên cú-sốc - nỗi-đau ập về. <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Khối Đông Âu bỗng nhiên sụp đổ <br />
	            Việt Nam mất chỗ dựa Liên Xô <br />
	            Cũng may Đổi Mới đã vô <br />
	            Đưa ta hội-nhập hết cô-quạnh rồi <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Internet ngày càng phát-triển <br />
	            Năm 97 Việt Nam có tên miền <br />
	            Từ đây phát-triển triền-miên <br />
	            Làm nên thế-hệ đầu-tiên được dùng <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Ngành giải-trí bắt-đầu thay-đổi <br />
	            Nhạc Hàn đã đến Việt Nam rồi <br />
	            Dần đưa phong-cách lên ngôi <br />
	            Thành trào-lưu mới sục-sôi sau này <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Người Việt vốn là dân kín-đáo <br />
	            Chẳng mấy khi thích nói về mình <br />
	            Mà Yahoo! cũng thật kinh <br />
	            Làm ra Blog, học-sinh thường dùng <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Những quán net mọc lên như nấm <br />
	            Game online gõ cửa từng nhà <br />
	            Audition với Liên Quân <br />
	            MU, Đột kích, Võ Lâm Truyền Kỳ. <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Chiếc webcam một thời thần-thánh <br />
	            Khởi nguồn bao hot teen đời đầu <br />
	            Người gầy keo vuốt tóc nâu <br />
	            Bờm thì sư-tử má hồng chu môi <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Yahoo Mes - một thời huyền-thoại <br />
	            Gõ mỏi tay nick chat lạ tai <br />
	            Gửi dòng teencode tới ai <br />
	            Mà chờ tiếng Buzz từ ngày tới đêm <br />
			</p>
			<p style={{ marginBottom: "7vh" }}>
                <h4>Phần 3: Ngày nay </h4>
	            Rồi thì ai cũng phải lớn <br />
	            Mang những trọng-trách của thời tương-lai <br />
	            Thời-gian trước mắt còn dài <br />
	            Nhưng đừng phung-phí để mai rồi làm <br />
	            Để đưa hình-ảnh nước Nam <br />
	            Vươn tầm thế-giới sánh-ngang anh hào <br />
	            Để khi nhung nhớ ngày nào <br />
	            Một thời tuổi-trẻ biết bao vui buồn <br />
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

export default NineX;
