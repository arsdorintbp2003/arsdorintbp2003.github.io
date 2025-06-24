import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { language } from '../../Blog';
import LeftPanel from '../LeftPanel';
import Breadcrumb from '../Breadcrumbs';

const categories = [
    { name: 'Vietnam National Guard Medley (LK Thơ về Vệ Quốc Đoàn)', nameNom: '嗹曲詩撝卫囯团', link: '/blog/#/tho/first-phase/Lien-khuc-tho-ve-Ve-Quoc-Doan' },
    { name: 'Jianzi (Đá Cầu)', nameNom: '跢毬', link: '/blog/#/tho/first-phase/Da-cau' },
    { name: 'Moscow Night (Trăng Trắng)', nameNom: '𦝄𤽸', link: '/blog/#/tho/first-phase/Trang-trang' },
    { name: 'Congress (Đại-Hội)', nameNom: '大会', link: '/blog/#/tho/first-phase/Dai-hoi' },
    { name: 'Determination (Quyết-tâm)', nameNom: '决心 （暫讀）', link: '/blog/#/tho/first-phase/Quyet-tam' },
    { name: 'A Random Poem (Ngẫu Nhiên) + Relatives (Họ Hàng)', nameNom: '偶然 + 户行 （暫讀）', link: '/blog/#/tho/first-phase/Ngau-nhien-Ho-hang' },
    { name: 'My Helmet (Mũ-bảo-hiểm)', nameNom: '帽堡崄', link: '/blog/#/tho/first-phase/Mu-bao-hiem' },
    { name: 'Hanoi Liberation (Giải-phóng Thủ-đô)', nameNom: '解放首都', link: '/blog/#/tho/first-phase/Giai-phong-Thu-do' },
    { name: 'Sadness (Nỗi Buồn)', nameNom: '𢚶𢞂', link: '/blog/#/tho/first-phase/Noi-buon' },
    { name: 'Frederick the Great testament (fictional poem)', nameNom: '唎侇嘱𧶮󰃓嚦𠄩大帝', link: '/blog/#/tho/first-phase/Loi-Di-chuc-cua-Friedrich-II-Dai-de' },
    { name: 'Convenience (Tiện-nghi)', nameNom: '便冝 （暫讀）', link: '/blog/#/tho/third-phase/Tien-nghi' },
    { name: 'Lantern Fes (Rằm Tháng Giêng)', nameNom: '𠄻𣎃征', link: '/blog/#/tho/first-phase/Ram-thang-gieng' },
    { name: 'A RESEARCH POEM of 90S-BORN PEOPLE', nameNom: '題材研究𬩍𢒂嗌戈詩', link: '/blog/#/tho/first-phase/De-tai-Nghien-cuu-ve-9X-qua-tho' },
    { name: 'Kind and Elegant Style (Văn-minh Thanh-lịch)', nameNom: '文明圊儮', link: '/blog/#/tho/first-phase/Van-minh-Thanh-lich' },
    { name: 'Happy Lunar New Year 2017 (Năm Mới Đinh-Dậu 2017)', nameNom: '𢆥㵋丁丣𠄩空辻𦉱 （暫讀）', link: '/blog/#/tho/first-phase/Nam-moi-Dinh-dau-2017' },
];

const poemList = [
    {
        title: 'Giai Đoạn Sáng Tác Thứ Nhất (2015 - 2017)',
        titleChuNom: '階段創作次一（2015 - 2017）',
        poems: [
            { title: 'Liên Khúc Thơ Về Vệ Quốc Đoàn', titleChuNom: '嗹曲詩撝卫囯团' },
            { title: 'Đá Cầu', titleChuNom: '跢毬' },
            { title: 'Trăng-trắng', titleChuNom: '𦝄𤽸' },
            { title: 'Đại-Hội', titleChuNom: '大会' },
            { title: 'Quyết-tâm (tạm đặt)', titleChuNom: '决心 （暫讀）' },
            { title: 'Ngẫu Nhiên + Họ Hàng (tạm đặt)', titleChuNom: '偶然 + 户行 （暫讀）' },
            { title: 'Mũ-bảo-hiểm', titleChuNom: '帽堡崄' },
            { title: 'Giải-phóng Thủ-đô', titleChuNom: '解放首都' },
            { title: 'Nỗi-buồn', titleChuNom: '𢚶𢞂' },
            { title: 'Lời Di-chúc của Friedrich II Đại-đế', titleChuNom: '唎侇嘱𧶮󰃓嚦𠄩大帝' },
            { title: 'Tiện-nghi (tạm đặt)', titleChuNom: '便冝 （暫讀）' },
            { title: 'Rằm Tháng Giêng', titleChuNom: '𦝃𣎃𦙫' },
            { title: 'ĐỀ-TÀI NGHIÊN-CỨU VỀ 9X QUA THƠ', titleChuNom: '題材研究𬩍𢒂嗌戈詩' },
            { title: 'Văn-minh Thanh-lịch', titleChuNom: '文明圊儮' },
            { title: 'Năm Mới Đinh-Dậu 2017 (tạm đặt)', titleChuNom: '𢆥㵋丁丣𠄩空辻𦉱 （暫讀）' }
        ],
        link: '/tho/first-phase',
    }
];

const paragraphEng =
	"The First Phase marks my journey as a secondary school student, characterized by a profound passion for exploring Vietnamese history. Hence, the period's concept centered around my thoughts on the Vietnamese modern history, along with some stories from my daily life";
const paragraphNom =
	"階段創作次一𪜀时亓倅哙𪜀學生叝𠄩，拱𠇍念㤇惕歷史越南。低正𪜀仍內容主道𥪞各排詩於階段呢，𠇍𢚸㤇𫭔，𦍫磊仍句𡀯代常。";
const commentEng =
	"In terms of art, the poems in the First Phase are quite diverse in poetic forms, ranging from Lục bát (Six-Eight), Thất ngôn (Seven Words each line), Song thất lục bát (Double seven, six-eight), to Ngũ ngôn (Five Words each line).";
const commentNom = "𧗱藝術，各排詩於階段呢固事吔恙𧗱体詩，自六八，七言，双七六八，𨀏五言。";
const contactEng = "First Phase is not just the beginning of my poetic journey, but also helps develop my Vietnamese writing skills, and orient my poetic style for the next phases.";
const contactNom = "階段創作次一空只𪜀点起头朱行程創作𧶮倅，麻哙丸倅發展技能曰，吧定向朱風格詩𢖖呢。";

function FirstPhase() {
    const paragraph = language === "English" ? paragraphEng : paragraphNom;
    const comment = language === "English" ? commentEng : commentNom;
    const contact = language === "English" ? contactEng : contactNom;
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" style={{ marginTop: "2%" }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <LeftPanel categories={poemList} open={true} />
                    </Grid>
                    <Grid item xs={7}>
                        <Breadcrumb language={language} />
                        <Typography variant="h5" gutterBottom style={{ margin: "2% 0", fontWeight: "bold" }}>
                            { language === "English" ? "Overview" : "总觀" }
                        </Typography>
                        <Typography paragraph style={{ textAlign: 'justify' }}>
							{paragraph}
                        </Typography>
                        <Typography paragraph style={{ textAlign: 'justify' }}>
							{comment}
                        </Typography>
                        <Typography paragraph style={{ textAlign: 'justify' }}>
                            {contact}
                        </Typography>
                        <div className="poem-list">
                            <Typography variant="h5" gutterBottom style={{ margin: "5% 0 2% 0", fontWeight: "bold" }}>
                                { language === "English" ? "Poem List" : "名冊排詩" }
                            </Typography>
                            <ul>
                                {categories.map((category, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            color: hoveredIndex === index ? 'darkgreen' : 'inherit',
                                            textDecoration: hoveredIndex === index ? 'underline' : 'none',
                                            transition: 'color 0.3s ease-in-out, text-decoration 0.3s ease-in-out',
                                        }}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
									>
                                        <a href={category.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            { language === "English" ? category.name : category.nameNom }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default FirstPhase;