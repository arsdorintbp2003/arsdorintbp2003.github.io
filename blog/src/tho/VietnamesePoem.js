import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { language } from '../Blog';
import { categories } from './LeftPanel';
import Breadcrumb from './Breadcrumbs';
import LeftPanel from './LeftPanel';


const phaseList = [
    {
        name: 'First Phase (Giai Đoạn Sáng Tác Thứ Nhất) (2015 - 2017)',
        nameNom: '階段創作次一（2015 - 2017）',
        link: '/blog/#/tho/first-phase',
        descriptionEng:
            `The First Phase marks my journey as a secondary school student, characterized by a profound passion for exploring Vietnamese history. Hence, the period's concept centered around my thoughts on the Vietnamese mo...  `,
        descriptionNom: '階段創作次一𪜀时亓倅哙𪜀學生叝𠄩，拱𠇍念㤇惕歷史越南。低正𪜀仍。。。'
    },
    {
        name: 'Second Phase (Giai Đoạn Sáng Tác Thứ Hai) (2018 - 2020)',
        nameNom: '階段創作次𠄩（2018 - 2020）',
        link: '/blog/#/tho/second-phase',
        descriptionEng:
            `The Second Phase marks my transition from being a secondary school student to a high school student, with the exploration of new hobbies, especially in music. This phase's content predominantly revolves around love stor...  `,
        descriptionNom: '階段創作次𠄩𪜀时点轉𢷮自叝𠄩𨖲叝柏𧶮命，𠇍堯憷惕某如音樂。內容。。。'
    },
    {
        name: 'Third Phase (Giai Đoạn Sáng Tác Thứ Ba) (2020 - 2023)',
        nameNom: '階段創作次𠀧（2020 - 2023）',
        link: '/blog/#/tho/third-phase/',
        descriptionEng:
            'The Third Phase coincided with a unique circumstance, the Covid-19 pandemic. The prolonged period of staying at home made every moment of going out to meet friends, families, or just to drive alone much more worth...  ',
        descriptionNom: '階段創作次𠀧扒頭𠓨𠬠时点无穷特別 - 大射姑曰辻𢒂。曠時間𨱽於茹格。。。'
    },
];

const paragraphEng =
	"Hello, welcome to my poem blog - one of my corners. This is a collection of all my poems written in Vietnamese National Script (Chữ Quốc Ngữ) from 2015 until now. I have an ambition to translate them to Vietnamese Old National Script (Chữ Nôm) for a different visualization and bring a traditional and nostalgic vibe to my poems.";
const paragraphNom =
	"吀嘲，朝明𨀏某奘茄詩 - 𠬠𥪝仍產品𧶮倅。低𪜀坭刘伫悉哿各排詩𧶮倅曰弸𡨸國語俆𢆥2015𨀏𫢩。倅固𠬠鮎儋眫某役伇仍排詩𧶮命刅𡨸喃呧芒吏𠬠形暻恪別吧唸欣渚詩𧶮倅。";
const commentEng =
	"If you have any comments on my poems, feel free to do so. It is just a small amount of salt in the big ocean, so I don't mind receiving even bad comments about my poems.";
const commentNom = "裊伴讀固不倨𠬠偋論咍意見芾撝各排詩𧶮倅，仃垠懝麻咳𫜵条帝。某倅，低只𪜀“𠬠𡭧𠼦𡧲大洋撝潙”，年倅空懝认𧗱不倨𠬠唎𠰙咍吱芾俆各伴";
const contactEng = "The website is currently in development. Feel free to give me any feedback at ";
const contactNom = "伣在，奘茄𧶮倅刎裆𥪝过呈𡏦𥩯。㨂合意見𧶮伴过地址";
const thankEng = "Thank you so much for your support!";
const thankNom = "感恩位亊壅冱𧶮悉哿各伴";

export default function VietnamesePoem() {
    const paragraph = language === "English" ? paragraphEng : paragraphNom;
    const comment = language === "English" ? commentEng : commentNom;
    const contact = language === "English" ? contactEng : contactNom;
    const thank = language === "English" ? thankEng : thankNom;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false" style={{ marginTop: "2%" }}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <LeftPanel categories={categories} open={true} />
                    </Grid>
                    <Grid item xs={7}>
                        <Breadcrumb language={language} />
                        <Typography variant="h5" gutterBottom style={{ marginTop: "2%", marginBottom: "2%", fontWeight: "bold" }}>
                            { language === "English" ? "Introduction" : "介紹" }
                        </Typography>
                        <Typography paragraph style={{ textAlign: 'justify' }}>
							{paragraph}
                        </Typography>
                        <Typography paragraph style={{ textAlign: 'justify' }}>
							{comment}
                        </Typography>
                        <Typography paragraph style={{ textAlign: 'justify' }}>
                            {contact} <a href="mailto:bui_phuongnam@u.nus.edu" target="_blank" rel="noopener noreferrer">
                                { language === "English" ? "my email" : "函书電子𧶮倅" }
                            </a>. {thank}
                        </Typography>
                        <div className="poem-list">
                            <Typography variant="h5" gutterBottom style={{ marginTop: "5%", fontWeight: "bold" }}>
                                { language === "English" ? "Phase List" : "名階段創作" }
                            </Typography>
                            <ul>
                                {phaseList.map((category, index) => (
                                    <li key={index} style={{ marginBottom: '5vh' }}>
                                        <strong>{ language === "English" ? category.name : category.nameNom }</strong>
                                        <p style={{ textAlign: 'justify' }}>
                                            { language === "English" ? category.descriptionEng : category.descriptionNom }
                                            <a href={category.link} style={{ textDecoration: 'underline', color: 'blue' }}>
                                                { language === "English" ? "Continue Reading" : "讀接" }
                                            </a>
                                        </p>
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
