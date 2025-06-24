import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { language } from '../../Blog';
import LeftPanel from '../LeftPanel';
import Breadcrumb from '../Breadcrumbs';

const categories = [
    { name: 'Nothing To Me! (Phù Phiếm!)', nameNom: '凫氾!', link: '/blog/#/tho/second-phase/Phu-phiem' },
    { name: 'My Sunshine (Ánh-sáng chân-lý)', nameNom: '暎𠒫真理', link: '/blog/#/tho/second-phase/Anh-sang-Chan-ly' },
    { name: 'The Wall (Bức-Tường)', nameNom: '幅墙', link: '/blog/#/tho/second-phase/Buc-Tuong' },
    { name: 'M57 Girl (Cô Gái M57)', nameNom: '姑𡛔𠼽𠄼𦉱', link: '/blog/#/tho/second-phase/Co-gai-M57' },
    { name: 'M57 Girl (part 2) ', nameNom: '姑𡛔𠼽𠄼𦉱（份𠄩）', link: '/blog/#/tho/second-phase/Co-gai-M57-phan-2' },
    { name: 'M57 Girl (part 3)', nameNom: '姑𡛔𠼽𠄼𦉱（份𠀧）', link: '/blog/#/tho/second-phase/Co-gai-M57-phan-3' },
    { name: 'Love Stories (Chuyện Lớp Mình)', nameNom: '𡀯情阿𠬠', link: '/blog/#/tho/second-phase/Chuyen-lop-minh' },
    { name: 'Lament of Literature Studies (Văn Nịnh Ngâm Khúc)', nameNom: '文佞吟曲', link: '/blog/#/tho/second-phase/Van-ninh-Ngam-khuc' },
    { name: 'Fungi (Nấm)', nameNom: '蕈', link: '/blog/#/tho/second-phase/Nam' },
    { name: `Tomorrow You're Gone (Ngày mai em đi 2019)`, nameNom: '𣈗𣈕㛪迻 𠄩空辻𢒂', link: '/blog/#/tho/second-phase/Ngay-mai-em-di-2019' },
    { name: 'Ends of the Decade (Cuối Thập Niên)', nameNom: '季十年', link: '/blog/#/tho/second-phase/Cuoi-thap-nien' }
];

const poemList = [
	{
        title: 'Giai Đoạn Sáng Tác Thứ Hai (2018 - 2020)',
        titleChuNom: '階段創作次𠄩（2018 - 2020）',
        poems: [
            { title: 'Phù Phiếm!', titleChuNom: '凫氾!' },
            { title: 'Ánh-sáng chân-lý', titleChuNom: '暎𠒫真理' },
            { title: 'Bức-Tường', titleChuNom: '幅墙' },
            { title: 'Cô Gái M57', titleChuNom: '姑𡛔𠼽𠄼𦉱' },
            { title: 'Cô Gái M57 (phần 2)', titleChuNom: '姑𡛔𠼽𠄼𦉱（份𠄩）' },
            { title: 'Cô Gái M57 (phần 3)', titleChuNom: '姑𡛔𠼽𠄼𦉱（份𠀧）' },
            { title: 'Chuyện Lớp Mình (tạm đặt)', titleChuNom: '𡀯情阿𠬠' },
            { title: 'Văn Nịnh Ngâm Khúc', titleChuNom: '文佞吟曲' },
            { title: 'Nấm', titleChuNom: '蕈' },
            { title: 'Ngày mai em đi (2019)', titleChuNom: '𣈗𣈕㛪迻 𠄩空辻𢒂' },
            { title: 'Cuối Thập Niên', titleChuNom: '季十年' }
        ],
        link: '/tho/second-phase',
    }
];

const paragraphEng =
	"The Second Phase marks my transition from being a secondary school student to a high school student, with the exploration of new hobbies, especially in music. This phase's content predominantly revolves around love stories inspired by music, films, and various other narrative sources";
const paragraphNom =
	"階段創作次𠄩𪜀时点轉𢷮自叝𠄩𨖲叝柏𧶮命，𠇍堯憷惕某如音樂。內容主道𧶮仍排詩𥪞階段呢𪜀句𡀯情𢞅，自仍源感興如音樂，柉，吧堯內容恪";
const commentEng =
	"In terms of art, most of the poems in this phase adopt the structure of Thất ngôn (Seven Words each line), while some are in Song thất lục bát (Double seven, six-eight). Fueled by inspiration drawn from my literature studies at school, I began incorporating Tang poetry rules into some of my poems.";
const commentNom = "𧗱藝術，分𡘯各排詩𥪞階段呢待曰於体詩七言，外𪞷𠬠𢼂恪待曰於体双七六八。影響罷仍排詩待学於階段呢𨑗场，倅扒頭厌佣各原則𧶮詩唐律𠓨仍排詩𧶮命。";
const contactEng = "Second Phase was where I initiated the integration of a blend between traditional and modern poetic styles. This phase marks the incorporation of a more diverse range of words and narrative techniques into my creative expression. ";
const contactNom = "階段創作次𠄩傳感興朱倅𥪞役结合仍湼鼓傳吧現代𥪞風格曰。格用詞語供𧿨𢧚捞淬欣，𠇍堯卞佱藝術㣊詞待使用。";

function SecondPhase() {
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
                            <Typography variant="h5" gutterBottom style={{ margin:"5% 0 2% 0", fontWeight: "bold" }}>
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

export default SecondPhase;