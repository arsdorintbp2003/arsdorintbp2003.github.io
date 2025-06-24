import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { language } from '../../Blog';
import LeftPanel from '../LeftPanel';
import Breadcrumb from '../Breadcrumbs';

const categories = [
    { name: 'Lunar New Year (Tết)', nameNom: '緤', link: '/blog/#/tho/third-phase/Tet' },
    { name: `Men's Spirit (Chí làm trai)`, nameNom: '志𪵯𤳆', link: '/blog/#/tho/third-phase/Nam-Nhan-Chi-Chi-lam-trai' },
    { name: '5th Anniversary of writing poetry (Kỷ niệm 5 năm làm thơ)', nameNom: '纪唸𠄼𢆥𪵯詩', link: '/blog/#/tho/third-phase/Ky-niem-5-nam-Lam-tho' },
    { name: 'Autumn (Thu)', nameNom: '秋', link: '/blog/#/tho/third-phase/Thu' },
    { name: 'Fungi 2 (Nấm 2 - Nấm độc)', nameNom: '蕈𠄩（蕈毒）', link: '/blog/#/tho/third-phase/Nam-2-Nam-doc' },
    { name: 'Old Town Road ... (Con Đường Xưa ...)', nameNom: '𡥵塘初。。。', link: '/blog/#/tho/third-phase/Con-duong-xua' },
    { name: 'Good bye, Hanoi (Ngày Từ-biệt)', nameNom: '𣈗辞别', link: '/blog/#/tho/third-phase/Ngay-tu-biet' },
    { name: 'Mid-Autumn Fes (Trung Thu)', nameNom: '中秋', link: '/blog/#/tho/third-phase/Trung-thu' },
    { name: 'On Rainy Days (Mưa)', nameNom: '𩄎', link: '/blog/#/tho/third-phase/Mua' },
    { name: 'Meeting (Món Nợ)', nameNom: '們嫧（暫讀）', link: '/blog/#/tho/third-phase/Mon-no' },
    { name: 'Sunny (Nắng)', nameNom: '𪱆', link: '/blog/#/tho/third-phase/Nang' },
    { name: 'Concert of Life (Ước Mơ - phàn 1)', nameNom: '约𢠩（份𠬠）', link: '/blog/#/tho/third-phase/Concert-of-Life' },
    { name: 'Concert de la Vie (Ước Mơ - phần 2)', nameNom: '约𢠩（份𠄩）', link: '/blog/#/tho/third-phase/Concert-de-la-Vie' },
    { name: 'Move (Chuyển Nhà)', nameNom: '轉茹', link: '/blog/#/tho/third-phase/Chuyen-nha' }
];

const poemList = [
    {
        title: 'Giai Đoạn Sáng Tác Thứ Ba (2020 - 2023)',
        titleChuNom: '階段創作次𠀧（2020 - 2023）',
        poems: [
            { title: 'Tết', titleChuNom: '緤' },
            { title: 'Nam Nhân Chí (Chí làm trai)', titleChuNom: '男人志（志𪵯𤳆）' },
            { title: 'Kỷ niệm 5 năm làm thơ', titleChuNom: '纪唸𠄼𢆥𪵯詩' },
            { title: 'Thu (tạm đặt)', titleChuNom: '秋' },
            { title: 'Nấm 2 (Nấm độc)', titleChuNom: '蕈𠄩（蕈毒）' },
            { title: 'Con Đường Xưa ...', titleChuNom: '𡥵塘初。。。' },
            { title: 'Ngày Từ-biệt', titleChuNom: '𣈗辞别' },
            { title: 'Trung Thu', titleChuNom: '中秋' },
            { title: 'Mưa', titleChuNom: '𩄎' },
            { title: 'Món Nợ (tạm đặt)', titleChuNom: '們嫧（暫讀）' },
            { title: 'Nắng', titleChuNom: '𪱆' },
            { title: 'Nguyên-sơ', titleChuNom: '原初' },
            { title: 'Concert of Life (tạm đặt)', titleChuNom: '约𢠩（份𠬠）' },
            { title: 'Concert de la Vie (tạm đặt)', titleChuNom: '约𢠩（份𠄩）' },
            { title: 'Chuyển Nhà', titleChuNom: '轉茹' },
        ],
        link: '/tho/third-phase',
    }
];

const paragraphEng =
	"The Third Phase coincided with a unique circumstance, the Covid-19 pandemic. The prolonged period of staying at home made every moment of going out to meet friends, families, or just to drive alone much more worthwhile. ";
const paragraphEng2 =
	"This phase also witnessed a special turn in my life - going to study abroad in Singapore in August 2021. Leaving the families, friends, and all the familiar sceneries in such an unstable condition evoked a profound sense of nostalgia, becoming a primary wellspring of inspiration for me.";
const sentenceEng1 =
	"Nature emerged as a prominent theme in the latter part of this phase as I acquainted myself with the Singaporean landscape, characterized by abundant green spaces and unpredictable weather. ";
const sentenceEng2 =
	"And finally, cannot overlook my idol - BLACKPINK - the Korean girl group I have followed since their debut. They have long served as the muse and inspiration behind many of my poems in the Second Phase. Attending their concerts in 2023 was not only an unforgettable memory for me but also a joyous conclusion to this phase.";
const paragraphNom =
	"階段創作次𠀧扒頭𠓨𠬠时点无穷特別 - 大射姑曰辻𢒂。曠時間𨱽於茹格离縴朱毎庼刻待𪞷外𠫾𨔈𠇍伴佊，家庭，咍只單簡𪜀𨀐𨆷𠬠命𨑗仍𡥵塘强𧿨𢧚意義欣。";
const paragraphNom2 =
	"階段呢仝时證見𠬠𨀈𣌴𡘯𥪞局𠁀倅 - 𠫾遊学於新加坡自𣎃𠔭𢆥𠄩空𠄩𠬠。拜暫柁家庭，伴佊，吧椌景親悁𥪞𠬠曠時間极期𧁷𦤱𠻵又朱倅堯感触，仝时𪜀念感興𡘯𥪞階段呢。";
const sentenceNom1 =
	"仍形暻天然寅呂成悥想主道於𡛤婁𧶮階段𠀧欺倅𧿨𢧚寅悁属𠇍空間吧景物於新加坡，𠇍堯空間青吧時節㫻𠊝𢷮空凝。"
const sentenceNom2 =
	"吧空体补戈神潒𧶮倅 - BLACKPINK - 呫樂韓國麻倅吔㫻噷募技自欺𪞷眜。户吔㫻𪜀形潒惵，㨳感興朱堯人物𥪞詩𧶮倅於階段𠄩。參與仍𣇜和樂𧶮 BLACKPINK 𥪞𢆥𠄩空𠄩𠀧空只𪜀𠬠纪唸当𢖵𠇍个人倅，麻哙𪜀𠬠𫡔结惵朱階段創作呢。"

const commentEng =
	"In terms of art, two common forms used in this phase are Ngũ Ngôn (Five Words each line) and Free Verse. This mirrors a higher proportion of poems in this phase originating from real stories, where emotions could potentially influence both rhythm and content. ";
const commentEng2 =
	"In the phase of my maturation and increased life experience, the utilization of techniques and language became more intricate. Metaphors, wordplay, and comparisons were among the most prevalent techniques employed. "
const commentEng3 =
	"Especially drawing inspiration from the Kieu Story, I extensively employed the Tả Cảnh Ngụ Tình technique (utilizing scenic descriptions to convey emotions) in poems with natural themes, in order to create deeper layers of meanings."
const commentNom = "𧗱藝術，𠄩体詩待使用主要於階段呢𪜀五言吧詩自由。調呢反映趨向創作𧶮階段呢，欺各排詩調𠃝堯𠦯聯𠇍仍句𡀯固实，坭感触固寻影響𡘯細𨆡詩吧內容。";
const commentNom2 = "於𥪞𠬠階段倅吔長成欣，固添待堯𣥱駖𤯨，藝術㣊詞吧言語詩寅呂𫻽完僐忻。檼吁，挃𡦂，吧芻𡖼𪜀仍卞佱藝術浽払待使用𥪞階段呢。";
const commentNom3 = "特別，自源感興𨀏自傳翹，倅吔史佣藝術写景寓情𥪞仍排詩𧗱天然，𥄮唕囉堯層意義朱仍勾詩𥪞排。";

const contactEng = "The Third Phase stands out as the most successful period among my poetic phases. It propelled me to generate new ideas for subsequent phases and motivated me to aspire to become a semi-professional poet in the future.";
const contactNom = "階段創作次𠀧𪜀𪜀階段成功一朱𨀏时点現在。成功呢倏欲倅接俗捞䊚，創造𫻽实堯悥想某朱各階段接蹺，仝时傳感興朱倅𨑗𡥵塘呂成𠬠茹詩扮叀。";

function ThirdPhase() {
    const paragraph = language === "English" ? paragraphEng + paragraphEng2 : paragraphNom + paragraphNom2;
    const sentence = language === "English" ? sentenceEng1 + sentenceEng2 : sentenceNom1 + sentenceNom2;
    const comment = language === "English" ? commentEng + commentEng2 + commentEng3 : commentNom + commentNom2 + commentNom3;
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
							{sentence}
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

export default ThirdPhase;