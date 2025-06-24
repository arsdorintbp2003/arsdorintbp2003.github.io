import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { language } from './Blog';

function Main(props) {
    const { title } = props;
    const paraEng =
        "The blog's name is inspired by the name of one of the first website I visit on the Internet - Wikipedia.";
    const paraEng2 =
        "It contains most of the products I have done in my life in different fields, such as tools, art, data analysis, ... and some personal interest (paper football, music).";
    const paraNom = "𠸜奘𦁸𧶮倅待礼感興俆𠸜𧶮𠬠𥪝仍奘𦁸头先倅蹺唯 - 威箕椑迻阿。";
    const paraNom2 = "奴諸𬪐侯喝各產品倅吔𫜵𥪝代𥪝堯岭域恪膮，如功坥，捤，分析与嘹，。。。，吧𠬠数憷俶个人（䏾跢紙，音樂）。";
    const para = language === 'English' ? paraEng : paraNom;
    const para2 = language === 'English' ? paraEng2 : paraNom2;

    // Page Update Information
    const pageUpdateTitle = language === 'English' ? 'Recent Changes' : '頁面更新';

    // List of Updates
    const updates = [
        {
            date: 'July 30th, 2024',
            dateNom: '30𣎃7𢆥2024',
            name: 'Paper Football Page is initialized, with differences articles about my journey with Paper football.',
            nameNom: '正式𫥨眜張𩃳跢紙，買數两多恙各排曰𧗱行程𧶮倅買部扪𩃳跢紙。',
            content:
                `Creating a Wiki-like page with numerous articles about Paper Football, the federation, the league systems,
                the players, etc.`,
            contentNom:
                `皁𢧚𠬠張通信買風格浆自威其椑𠫾阿，買仍排曰聯關𨀏歷史𧶮䏾跢紙，各組織联团，系統觧斗，各球取，云云。`
        },
        {
            date: 'May 31st, 2024',
            dateNom: '31𣎃5𢆥2024',
            name: 'Nom Text Optimization for Phase 1 Poem (Part 1)',
            nameNom: '最優化𡨸喃朱階段創作次一（份𠬠）',
            content:
                `Modification of Nom text in Phase 1 Poems, with the reference from "List of Commonly Used Standard
                Chu Han Nom" by Han-Nom Revival Committee of Vietnam`,
            contentNom:
                `版及日𡨸喃出現𥪝階段創作次一、澦蹺“榜 𡨸 漢 喃 準 常 用” 𧵑委班復生漢喃越南。`
        },
        {
            date: 'February 27, 2024',
            dateNom: '27𣎃2𢆥2024',
            name: 'Breadcrumb for all pages, Styling optimization',
            nameNom: '添塘听朱悉哿各張，侗一曠設計張排詩',
            content:
                `Breadcrumb has been added to all poems and Vietnamese Poem's pages. The styling of each paragraph and
                images of the poem have been optimized, for better visualization.`,
            contentNom:
                `塘听待添𠓨𥪞悉奇各張𧶮各排詩吧張詩正。設計𧶮層段詩，形暻𥪞各張詩待侗一丸朱𣥱駖𠊛拥待冣憂欣。`
        },
        {
            date: 'February 25, 2024',
            dateNom: '25𣎃2𢆥2024',
            name: 'New poem - Move (Chuyển nhà), Introduction pages for Phases',
            nameNom: '排詩某 - 轉茹，張介紹朱各階段創作',
            content:
                `A new poem from the third phase - Move - has been published, with breadcrumbs for easier user
                experience. Also, the page for First Phase, Second Phase, and Third Phase has been added to clarify the
                content, art, and poem lists of each phase.`,
            contentNom:
                `𠬠排詩某𧶮階段創作次𠀧 - 轉茹 - 吔待正式𪞷眜，𠇍役使用塘听互助𣥱駖𠊛拥。仝时，張介紹朱層階段創作吔待𪞷眜，𥄮介紹𧗱
                內容，藝術，吧名冊各排詩𧶮層階段。`
        },
        {
            date: 'November 17, 2023',
            dateNom: '17𣎃11𢆥2023',
            name: 'Chữ Nôm Language across the page, New Blog name',
            nameNom: '添𡦂喃朱全張，𠸛某朱張主',
            content:
                `This update adds a new language (Vietnamese Chữ Nôm) for the page, and changes the blog name to
                 "Namkeypedia". With the addition of Chữ Nôm, a new font is being added (Nôm Na Tống) to fit the Nôm
                 script. The left panel inside Vietnamese Poem page has been restructured to open and close
                 dynamically.`,
            contentNom:
                `吝芨囩呢添𡦂喃朱全部各張，吧𠊝𢫊𠸛張主成 “南箕椑𠫾阿”。外𪞷，風𡦂某待添𠓨（喃那宋）呧凫合𠇍𡦂喃。声通信边債𧶮張詩待
                僌冓竹呧𢲫㨂弟扛欣。`
        },
        {
            date: 'October 19, 2023',
            dateNom: '19𣎃10𢆥2023',
            name: 'Change Routing for stable performance',
            nameNom: '使结冓塘听呧張活動稳定欣',
            content:
                `Use Hash Router instead of Browser Router inside the Home Page.`,
            contentNom:
                `拥 Hash Router 𠊝朱 Browser Router 𥪞張主。`
        },
        {
            date: 'October 11, 2023',
            dateNom: '11𣎃10𢆥2023',
            name: 'Initialize the Sections for Blog, Publish all Contents for Vietnamese Poem',
            nameNom: '噠𠸛朱各份梗於張主，𪞷眜悉哿各排詩',
            content:
                `The blog will have 10 Sections (Home Page, Vietnamese Poem, Paper Football, Youtube Data, Tool,
                 Drawings, Favourite Music, Github, Email, and Instagram). Create Vietnamese Poem page with a left panel
                 of poem lists and all 3 phases of poems' pages into the blog.`,
            contentNom:
                `張主𫪣固辻成分（張主，詩，𩃳跢紙，與料調𦭧，工具，𦘧，樂㤇惕，𪡴匣，書電子，吧印史些𫏄）。 皁𪞷張詩𠇍声通信边債𧶮
                名冊詩吧𠀧張階段創作𠓨張主。`
        },
        {
            date: 'September 11, 2023',
            dateNom: '11𣎃9𢆥2023',
            name: 'Initialize the Project',
            nameNom: '扒頭預案',
            content:
                `Initialize the blog with the use of create-react-app.`,
            contentNom:
                `扒頭預案使用 create-react-app。`
        }
    ];


    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
            }}
        >
            <Typography variant="h6" gutterBottom fontWeight={language === 'Vietnamese' ? 'bold' : 'light'}>
                {title}
            </Typography>
            <Divider />
            <p style={{ maxWidth: '95%', textAlign: 'justify' }}>{para}</p>
            <p style={{ maxWidth: '95%', textAlign: 'justify', marginBottom: "7vh" }}>{para2}</p>

            <Typography variant="h6" gutterBottom fontWeight={language === 'Vietnamese' ? 'bold' : 'light'}>
                {pageUpdateTitle}
            </Typography>
            <Divider />
            <ul style={{ maxWidth: '95%', textAlign: 'justify' }}>
                {updates.map((update, index) => (
                    <li key={index} style={{ marginBottom: '2vh' }}>
                        <Typography variant="body2" style={{ fontSize: "100%" }}>
                            {language === 'English' ? update.date : update.dateNom}:
                            <strong>{language === 'English' ? " " + update.name : " " + update.nameNom}</strong>
                        </Typography>
                        <Typography variant="body2" style={{ fontSize: "100%" }}>
                            {language === 'English' ? update.content : update.contentNom}
                        </Typography>
                    </li>
                ))}
            </ul>
        </Grid>
    );
}

export default Main;
