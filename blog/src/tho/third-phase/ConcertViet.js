import React from 'react';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function ConcertViet() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `约𢠩`;
    const vietTitle = "Concert de la Vie";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3> { nomTitle } </h3>
            <h4> 份𠄩： { vietTitle } </h4>
            <h4>30𣎃7𢆥2023</h4>
            <p style={{ marginBottom: "1em" }}>
	            歲𠄩辻<br />
                习𪵯𠊛𡘯<br />
                仍𣎃复𱞰代空想<br />
                喋工役据㕸又空𱐁<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            眣𠬠𣈗𪱆𨖲<br />
                徐皿坦䖏金芝㳥𠖭<br />
                𠬠信息𤈠𥻠<br />
                勞𤊧奇心魂<br />
                俸𢗼𢠯盆屯<br />
                位哙包計劃<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            仍㘉𠸒𨅮憢返映<br />
                𦁸社会待𣋑弩曽𤇊<br />
                扔边𧣲仉𢝙𠊛𢜏<br />
                𪜀仍对像直除皮𡄾<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            𢒂兆銅𥆾皮麻兢倘<br />
                近𡛤𣎃俍諸固𠃝丟<br />
                扔吔𧷸𪜀拜决坐头<br />
                榝𡑝冦待𥋴𥆾尽眜<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            耒接蹺𪜀𠁻𣈗兢倘<br />
                𦧜𤙭咍𠰘𦧜世間<br />
                据𠇼蹺𠯽不執丏𠴞<br />
                哴㤇𫭔拜洒𪸔甭每价<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            於丟帝人名𪪳婆奇<br />
                哴介𥘷丕㧙𪵯𪞷銭<br />
                麻𨅮𠾕撝摱位𠬠胋<br />
                櫟固銭他迻𪵯辞僐<br />
                𠬠𡦂櫟𪜀妬皛句𡀯<br />
                捏奇巴藜皮𠬠丐𥑂 <br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            𣈗𧷸派苔工準備<br />
                戾卟通信个人囸㨳<br />
                戎工役坐除待曾細<br />
                辻𠄩𣇞<br />
                𠶟𠄼連續<br />
                过愊<br />
                丕固之𢫊𠊝<br />
                𫡠某𧡊行待拜皮𬆄<br />
                喂催戎𠄼万𠊛唐畧<br />
                諸𨀏辣峕派吔沚𤂧<br />
                自安㾯命𥪞𩂀失盲<br />
                哙𣇜𣊿<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            辻𠄻𣇞<br />
                奇垠埅靓朗<br />
                曾𨀈僅愼<br />
                戎耒<br />
                唱悶找麻吻据拜坐<br />
                丕勢除𣈗𧗱拉細<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            派𢄂顛俸𧿨年𤎏烸<br />
                泣会呫𠊛𠊛热情哰<br />
                諸包𣇞起业𨒟𢝙世<br />
                毎罪𣇞丕𬥓待𡮯芾<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            𦒹𤾓兆𢂞朱銭𡡇𡞕<br />
                婁𠬠𣊿吔空𦑃麻𮨶<br />
                补𠬠亿侞𧷸𤾓派𠰏<br />
                𣇞侞哀𧷸又丸浽低<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            耒𨀏𣈗认釯拪𣇜演<br />
                边外𡑝𠬠椌景親悁<br />
                𠊛𠊛拁榜号派呢畨<br />
                唩麻吵价只哙𠬠𡛤<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            擦𣈗演又𨀏𡀯版權<br />
                喂囉吗𪵯吵麻𪩦世<br />
                唑毀刍欺𣈗演近倛<br />
                幸麻耒待解決彻底<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            𣈗𠬠坐家律躡𥈰<br />
                空互名傳統越南<br />
                初㗂咭𢖮㗂𠻅𪜀世<br />
                𫢩㗂咭𢖮奇㗂哎图<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            耒㧙包幪程演颯弩<br />
                焒恨讐炪𪸔記忆𠄩些<br />
                刍卢喂𥹰𪩦耒某𧡊<br />
                吧𤵶情丕世想潒𪞷<br />
                喝𨖲迻吵麻岣呞势<br />
                隊𥶄𦲿𥆾𥉫麻惕醚<br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            婁𣈗𠬠派又曾突変<br />
                𨖲𠖈速欣裱图𨆡心<br />
                𦊚辻兆喂丕㧙哀信<br />
                催嘿喝𣈗𣈕哙迻拐<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            边外𡑝暗𫢩实攏礼<br />
                𦊚隻車捌𦊚成員<br />
                扴牙抉唻昔苔外𫔳<br />
                幡堯𠊛𥉫供惵如仙<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            寻𡊲坐供固𠬠𡭧烦<br />
                𠄩𠔭𠄩呵隄丟耒𠰚<br />
                哙人員供丕㧙麻扺<br />
                摸𠬠徊𠬠感触破呱<br />
                𬆄行头𡑝冦附丕柁<br />
                坐正𡧲幸尽份天下<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            仍𣆰笔親悁麻某吕<br />
                仍排咭𦖑䀡吔万吝<br />
                扔暗𫢩某待等实近<br />
                呧信哴天神𪜀固实<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            𠬠勾呐经典麻合一<br />
                外代哙𦎡惵扱堯吝<br />
                辞神采咚咭𨀏垖蹎<br />
                念惕𧼈𠇍𥹘麺吧𬖾<br />
                焒恨讐又㘇𨖲吝姅<br />
                幔捻銭𥪞欺演吗呢<br />
                不𫠻𦍫念幸福毎欺<br />
                炮花颯𨖲自𨑗𡑝冦<br />
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            𠬠勾咭妬呐𨖲感触<br />
                倅固體找𥪞頃刻呢<br />
                约𢠩拱些迻𠁸𦉱𢆥𫢩<br />
                吔𨀏𣈗呂成亊实<br />
	        </p>
			<p style={{ marginBottom: "7vh" }}>
	            炮花凝吧暎畑又弻<br />
                惜𢗉𦍫念幸福𤼸朝<br />
                𠶢𣈗𣈕每次固势芾<br />
                峕胋𫢩𫡠皮𥪞潜識<br />
	        </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3> Ước Mơ </h3>
            <h4> Phần 2: { vietTitle } </h4>
            <h4>30/7/2023</h4>
            <p style={{ marginBottom: "1em" }}>
	            Tuổi hai-mươi<br/>
	            Tập làm người lớn<br/>
	            Những tháng hè chán-đời không tưởng<br/>
	            Nhịp công-việc cứ lặp-lại không ngừng<br/>
	            Chẳng còn tưng-bừng<br/>
	            Buổi trưa hè xỏ giày ra sân bóng<br/>
	            Đêm đô-thị chỉ còn trong giấc-mộng<br/>
	            Dạo bờ-hồ qua phố rồi ăn kem.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Chợt một ngày nắng lên<br/>
	            Từ mảnh đất xứ kim-chi lạnh-lẽo<br/>
	            Một tin-tức sốt-dẻo<br/>
	            Rạo-rực cả tâm-hồn<br/>
	            Bỗng lo-lắng, bồn-chồn<br/>
	            Vì còn bao kế-hoạch.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Những tít báo đua-nhau phản-ánh<br/>
	            Mạng xã-hội được dịp nổ tưng-bừng<br/>
	            Nhưng bên-cạnh kẻ vui người mừng<br/>
	            Là những đối-tượng trực-chờ vào “cắn”.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Chín triệu đồng - nhìn vào mà căng-thẳng<br/>
	            Gần nửa tháng lương chứ có ít đâu<br/>
	            Nhưng đã mua là phải quyết ngồi đầu<br/>
	            Sát sân-khấu được ngắm nhìn tận mắt.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Rồi tiếp-theo là chuỗi ngày căng-thẳng<br/>
	            Lưỡi bò hay miệng-lưỡi thế-gian?<br/>
	            Cứ hùa theo chửi bất-chấp miễn bàn<br/>
	            Rằng yêu nước phải tẩy chay bằng mọi giá<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Ở đâu đó nhân-danh “ông bà cả”<br/>
	            Rằng “giới-trẻ chẳng biết làm ra tiền<br/>
	            Mà đua-đòi vay mượn vì một đêm<br/>
	            Nếu có tiền thà đi làm từ-thiện”<br/>
	            Một chữ “nếu” là đủ hiểu câu-chuyện<br/>
	            Nhét cả Paris vào một cái chai.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Ngày mua vé - dày công chuẩn bị<br/>
	            Liệt-kê thông-tin cá-nhân thật kĩ<br/>
	            Xong công-việc! Ngồi chờ-đợi từng tí<br/>
	            Mười hai giờ!<br/>
	            F5 liên-tục<br/>
	            Quá bực!<br/>
	            Chẳng có gì đổi-thay<br/>
	            Mãi mới thấy hàng-đợi - phải vào ngay<br/>
	            Ôi thôi xong! Năm vạn người đằng trước<br/>
	            Chưa đến lượt thì vé đã sạch bong<br/>
	            Tự an-ủi mình trong cơn thất-vọng<br/>
	            Còn buổi chiều …<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Mười-lăm giờ!<br/>
	            Cả căn-phòng tĩnh-lặng<br/>
	            Từng bước cẩn-thận<br/>
	            Xong rồi!<br/>
	            Sướng muốn chết mà vẫn cứ phải ngồi<br/>
	            Chẳng thể chờ ngày về sắp tới!<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Vé chợ đen bỗng trở nên nóng-hổi<br/>
	            Khắp hội nhóm người-người nhiệt-tình giao<br/>
	            Chưa bao giờ khởi-nghiệp đông vui thế<br/>
	            Mỗi tội giờ chẳng bán được tẹo nào<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Sáu trăm triệu - bố cho tiền cưới vợ<br/>
	            Sau một chiều đã không cánh mà bay<br/>
	            Bỏ một tỷ nhờ mua trăm vé VIP<br/>
	            Giờ nhờ ai mua lại giúp nổi đây?<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Rồi đến ngày nhận vòng tay buổi diễn<br/>
	            Bên ngoài sân một khung-cảnh thân-quen<br/>
	            Người người giơ bảng hiệu “Vé đây friend”<br/>
	            Ơ mà sao giá chỉ còn một nửa?<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Sát ngày diễn lại đến chuyện bản-quyền<br/>
	            Ôi drama - làm sao mà lắm thế?<br/>
	            Dọa hủy show khi ngày diễn cận-kề<br/>
	            May mà rồi được giải-quyết triệt-để.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Ngày một - ngồi nhà lót dép hóng<br/>
	            Không hổ-danh truyền-thống Việt-Nam<br/>
	            Xưa - tiếng-hát át tiếng-bom là thế<br/>
	            Nay - tiếng hát át cả tiếng “ai-đồ”<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Rồi biết-bao màn trình-diễn bùng-nổ<br/>
	            “Lửa hận thù đốt-cháy ký-ức hai ta”<br/>
	            Solo - ôi lâu lắm rồi mới thấy<br/>
	            Và “See Tình” - chẳng thể tưởng-tượng ra<br/>
	            “Hét lên đi” - sao mà cute thế<br/>
	            Đội nón lá - nhìn trông mà thích mê.<br/>
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Sau ngày một vé lại tăng đột-biến<br/>
	            Lên-xuống nhanh hơn biểu-đồ nhịp-tim<br/>
	            Bốn mươi triệu - ôi chẳng biết ai tin<br/>
	            Thôi mặc kệ! Ngày-mai còn đi quẩy!<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Bên ngoài sân hôm-nay thật lộng-lẫy<br/>
	            Bốn chiếc xe buýt - bốn thành-viên<br/>
	            Banner, quạt, light stick, đầy ngoài cửa<br/>
	            Fan nhiều người trông cũng đẹp như tiên.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Tìm chỗ ngồi - cũng có một chút phiền<br/>
	            282 AD - đâu rồi nhỉ?<br/>
	            Hỏi nhân-viên cũng chẳng biết mà chỉ<br/>
	            Mò một hồi - một cảm-xúc vỡ-òa!<br/>
	            Ngay hàng-đầu - sân khấu phụ chẳng xa<br/>
	            Ngồi chính-giữa - may hết phần thiên-hạ.<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Những giây-phút thân-quen mà mới-lạ<br/>
	            Những bài-hát nghe, xem đã vạn lần<br/>
	            Nhưng hôm-nay mới được đứng thật-gần<br/>
	            Để tin rằng “thiên-thần” là có thật<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Một câu nói kinh-điển mà hợp nhất<br/>
	            Ngoài đời còn xinh-đẹp gấp nhiều lần<br/>
	            Từ thần-thái, giọng hát đến đôi chân<br/>
	            Niềm thích-thú với bánh mì cùng phở<br/>
	            “Lửa hận-thù” lại vang lên lần nữa<br/>
	            Màn ném tiền trong khi diễn “Money”<br/>
	            Bất-ngờ xen niềm hạnh-phúc mỗi khi<br/>
	            Pháo-hoa bùng lên từ trên sân-khấu<br/>
	        </p>
			<p style={{ marginBottom: "1em" }}>
	            Một câu hát đủ nói lên cảm-xúc<br/>
	            “Tôi có thể chết trong khoảnh-khắc này”<br/>
	            Ước-mơ cùng ta đi suốt bảy năm nay<br/>
	            Đã đến ngày trở-thành sự-thật!<br/>
	        </p>
			<p style={{ marginBottom: "7vh" }}>
	            Pháo-hoa ngừng và ánh-đèn lại bật<br/>
	            Tiếc nuối xen niềm hạnh-phúc dâng-trào<br/>
	            Dẫu ngày mai mọi-thứ có thế nào<br/>
	            Thì đêm-nay mãi vào trong tiềm-thức.<br/>
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

export default ConcertViet;
