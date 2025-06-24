import React from 'react';
import Airport from '../../assets/images/MonNo/Airport.png';
import Doi from '../../assets/images/MonNo/Doi.png';
import Gap from '../../assets/images/MonNo/Gap.png';
import Tau from '../../assets/images/MonNo/Tau.png';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function MonNo() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };

    const nomTitle = `們嫧`;
    const vietTitle = "Món Nợ";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}> { nomTitle } </h3>
            <h4 style={{ textAlign: "left" }}>15𣎃2𢆥2022</h4>
            <p style={{ marginBottom: "1em" }}>
	            轉艚𣊿<br />
                𫼳包念希望<br />
                𧗱𣆰笔会晤𥪞頃刻<br />
                𧗱仍媒嫧吻哙低<br />
            </p>
            <p style={{ marginBottom: "2em" }}>
	            𨖨塘唻<br />
                𡥵艚蜚悛脱<br />
                舖坊吔𨖨柁寻眜<br />
                只哙亊咏朗<br />
                𦍫悋㗂𩙍洌联咴<br />
	        </p>
			<img
                src={Tau}
                alt="Tau"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "2em" }}>
	            𨀏坭耒！<br />
                飛場塳東北<br />
                咧度𣈖𠊛<br />
                丕𧡊㗂唭<br />
                丟耒仍湥渃眜<br />
                𠊛𨖨迻丕𠬠哀拸𢩮<br />
                𠊛呂又除𣆰笔格离<br />
            </p>
			<img
                src={Airport}
                alt="Airport"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            𡧲𣳔𠊛踣𨁱迻<br />
                固𠬠𠊛徘徊𢗼𢠯<br />
                𥪞𣇞笔待除兢倘<br />
                轉𠎩搭塘𨀰<br />
            </p>
            <p style={{ marginBottom: "2em" }}>
	            空𠬠𡭧漣㳯<br />
                偀𧼋蹲𧼋到<br />
                寻伴<br />
                連𨇒曾𡓃迻𡓃侻<br />
                吧仍𡋦垠支格𥪞 - 外<br />
	        </p>
			<img
                src={Doi}
                alt="Doi"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "2em" }}>
	            近𠬠𢆥曳<br />
                耒𣈗呢供𨀏<br />
                𠄩𡥵𠊛拱𨖲㗂<br />
                扔丕𦖑待㗂憢<br />
                𠶢末对末拪𪮻皮憢<br />
                𬆄倛边扔如𠺯𧀞坦<br />
	        </p>
			<img
                src={Gap}
                alt="Gap"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            𠬠景像固𨤧𪜀毒一<br />
                競边憢扔吻拜“呵卢“<br />
                仍唎哏约仍㗂葻嘟<br />
                𪵯𤯨又仍𣈗哙迻学<br />
                时蹺𡳪隻車踏𡥵𧋉<br />
                㫻𪜀形𣈖𧶮𠬠隻呒囌<br />
                𠄩隻車丕出发妐𣇞<br />
                扔㫻拱憢进𨖲𠌨畧<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            耒𣇞低將來哀㧙待<br />
                𠊛𧗱，𠊛接續轉𠎩<br />
                嘲暫别筭𢮿𠖯迻𬆄<br />
                俸肯又耒𥆾憢恋惜<br />
            </p>
            <p style={{ marginBottom: "7vh" }}>
	            𣈗𣈕𠊛𫪣𨖨塊坭呢<br />
                𠊛峕接續工役仍狂𢮿<br />
                只㧙哴塘𧗱家晬𫢩<br />
                又𬩅沾仍𢚶念們嫧 <br />
			</p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}> { vietTitle } </h3>
            <h4 style={{ textAlign: "left" }}>15/2/2022</h4>
            <p style={{ marginBottom: "1em" }}>
	            Chuyến tàu chiều <br />
	            Mang bao niềm hi-vọng <br />
	            Về giây-phút hội-ngộ trong khoảnh-khắc <br />
	            Về những mối-nơ vẫn còn đây <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Rời đường-ray <br />
	            Con tàu phi thoăn-thoắt <br />
	            Phố-phường đã rời-xa tầm mắt <br />
	            Chỉ còn sự vắng-lặng <br />
	            Xen-lẫn tiếng gió-rít liên-hồi <br />
	        </p>
			<img
                src={Tau}
                alt="Tau"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Đến nơi rồi ! <br />
	            Phi-trường vùng Đông-Bắc <br />
	            Lác-đác bóng người <br />
	            Chẳng thấy tiếng cười <br />
	            Đâu rồi những giọt nước-mắt <br />
	            Người rời đi chẳng một ai đưa dắt <br />
	            Người trở lại chờ giây-phút cách-ly <br />
            </p>
			<img
                src={Airport}
                alt="Airport"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Giữa dòng người vội-vã đi <br />
	            Có một người bồi-hồi, lo-lắng <br />
	            Trong giờ-phút đợi-chờ căng-thẳng <br />
	            Chuyến bay đáp đường-băng <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Không một chút lăn-tăn <br />
	            Anh chạy đôn chạy đáo <br />
	            Tìm bạn <br />
	            Len-lỏi từng lối-đi, lỗi-thoát <br />
	            Và những vách-ngăn chia cách trong - ngoài <br />
	        </p>
			<img
                src={Doi}
                alt="Doi"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Gần một năm dài <br />
	            Rồi ngày này cũng đến <br />
	            Hai con-người cùng lên tiếng <br />
	            Nhưng chẳng nghe được tiếng nhau <br />
	            Dẫu mặt đối mặt, tay chạm vào nhau <br />
	            Ngay kề-bên nhưng như vòng Trái-Đất <br />
	        </p>
			<img
                src={Gap}
                alt="Gap"
                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '3vh 0' }}
            />
            <p style={{ marginBottom: "1em" }}>
	            Một cảnh-tượng có lẽ là độc nhất <br />
	            Cạnh bên-nhau nhưng vẫn phải “a-lô” <br />
	            Những lời hẹn-ước, những tiếng bông-đùa <br />
	            Làm sống lại những ngày còn đi-học <br />
	            Thời theo đuôi chiếc xe-đạp con-cóc <br />
	            Luôn là hình-bóng của một chiếc mô-tô <br />
	            Hai chiếc-xe chẳng xuất-phát chung giờ <br />
	            Nhưng luôn cùng nhau tiến-lên phía trước <br />
            </p>
            <p style={{ marginBottom: "1em" }}>
	            Rồi giờ đây tương-lai ai biết được <br />
	            Người về, người tiếp tục chuyến-bay <br />
	            Chào tạm-biệt toan quay ngắt đi ngay <br />
	            Bỗng khựng-lại rồi nhìn nhau luyến-tiếc <br />
            </p>
            <p style={{ marginBottom: "7vh" }}>
	            Ngày-mai người sẽ rời khỏi nơi-này <br />
	            Người thì tiếp-tục công-việc những guồng-quay <br />
	            Chỉ biết rằng tàu về nhà tối nay <br />
	            Lại chở-thêm những nỗi-niềm, món-nợ <br />
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

export default MonNo;
