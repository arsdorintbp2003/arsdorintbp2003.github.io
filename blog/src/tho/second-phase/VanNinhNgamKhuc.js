import React from 'react';
import { language } from '../../Blog';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumbs';

function VanNinhNgamKhuc() {
    const centerTextStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
    };
    const nomTitle = `文佞吟曲`;
    const vietTitle = "Văn Nịnh Ngâm Khúc";

    const renderNomVersion = () => (
        <div style={{ ...centerTextStyle, fontSize: "150%" }}>
            <h3 style={{ marginTop: "50px" }}>
                { nomTitle }
                <div style={{ fontSize: "70%" }}>
                    （断摘 “情景禮㵢𧶮𠊛劄罚文”）	（featuring 河灵）
                </div>
            </h3>
            <h4 style={{ textAlign: "left" }}>19𣎃3𢆥2019</h4>
            <p style={{ marginBottom: "1em" }}>
	            𭧙呢𡥵固𡭧整皿<br />
                撰文少劄排唋揚<br />
                仃𢚷𡥵姅姑𠵌<br />
                固𡭧泮吨𣮹顛哺头<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                許𫪣空固吝次𠄩<br />
                㤈𢙱崙瑟丕世沛<br />
                油請倘悁撰排<br />
                㤇文滇𤀞𥹰曳某𢆥<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                平吳大誥征婦吟<br />
                賦滝白藤翹金蕓<br />
                調拧𦠘𠻀閞重<br />
                稣点朱𡋂文学𫭔家<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                文学正𪜀源知识<br />
                稣点朱奇𧀞心𡥵<br />
                思想刻骨𥱬心<br />
                正义人义忠君愛国<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                文学正𪜀焒試鐄<br />
                焠煉悥志越艰难<br />
                情㤇怆丕𦼇殘<br />
                渇滈幸福㫻𫼳𥪞命<br />
            </p>
            <p style={{ marginBottom: "1em" }}>
                文学㫻𫡠珑冷<br />
                𠒫𤊢𡧲現囸顛晬<br />
                固姑𡥵丕単孤<br />
                沾㤇𤵖惵泡𡗶扪文<br />
            </p>
            <p style={{ marginBottom: "7vh" }}>
                姑仃𢚷𡥵姅𠵌姑<br />
                𡥵許空𪵯姑失望<br />
                針撰排針发表<br />
                礼又𦬻唭𤇊𠒫𣇫芾<br />
            </p>
        </div>
    );

    const renderVietVersion = () => (
        <div style={centerTextStyle}>
            <h3 style={{ marginTop: "50px" }}>
                { vietTitle }
                <div style={{fontSize: "15px"}}>
                    (Đoạn trích "Tình cảnh "lẻ loi" của người chép phạt văn") - featuring HL
                </div>
            </h3>
            <h4 style={{ textAlign: "left" }}>19/3/2019</h4>
            <p style={{ marginBottom: "1em" }}>
	            Dạo-này con có chút chểnh-mảng <br />
	            Soạn văn thiếu, chép bài dở-dang <br />
	            Đừng giận con nữa cô nghen <br />
	            Có chút bận-rộn, tóc đen bù-đầu <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Hứa sẽ không có lần thứ-hai <br />
	            Tấm-lòng son-sắt chẳng thể phai <br />
	            Dù thỉnh-thoảng quên soạn-bài <br />
	            Yêu văn chan-chứa lâu-dài mấy năm <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Bình-Ngô Đại-cáo, Chinh-phụ ngâm <br />
	            Phú-sông Bạch-Đằng, Kiều-Kim-Vân <br />
	            Đều giữ vai-trò quan-trọng <br />
	            Tô-điểm cho nền văn-học nước-nhà <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Văn-học chính là nguồn tri-thức <br />
	            Tô-điểm cho cả trái-tim con <br />
	            Tư-tưởng khắc cốt ghi tâm <br />
	            Chính-nghĩa, nhân-nghĩa, trung-quân, ái-quốc <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Văn-học chính là lửa-thử-vàng <br />
	            Tôi luyện ý-chí vượt gian-nan <br />
	            Tình-yêu thương chẳng úa-tàn <br />
	            Khát-khao hạnh-phúc luôn mang trong mình <br />
	        </p>
	        <p style={{ marginBottom: "1em" }}>
	            Văn-học luôn mãi lung-linh <br />
	            Sáng-ngời giữa hiện-thực đen-tối <br />
	            Có cô con chẳng đơn-côi <br />
	            Thêm “yêu” nét-đẹp bầu-trời môn văn <br />
	        </p>
	        <p style={{ marginBottom: "7vh" }}>
	            Cô đừng giận con nữa nghen cô <br />
	            Con hứa không làm cô thất-vọng <br />
	            Chăm soạn bài, chăm phát-biểu <br />
	            Lấy lại nụ-cười bừng-sáng thuở-nào <br />
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

export default VanNinhNgamKhuc;
