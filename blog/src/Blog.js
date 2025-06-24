import * as React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import ThoRoutes from './router/ThoRoutes';
import PnfRoutes from './router/PnfRoutes';
import NotFoundPage from './router/NotFoundPage';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const sectionsEng = [
    { title: 'Home Page', url: '/blog' },
    { title: 'Vietnamese Poem', url: '/blog/#/tho' },
    { title: 'Paper Football', url: '/blog/#/pnf' },
    { title: 'Youtube Data', url: '/blog/#/kworb' },
    { title: 'Tool', url: 'https://arsdorint.is-a.dev/tungbay/' },
    { title: 'Drawings', url: '/blog/#/drawings' },
    { title: 'Favorite Music', url: '/blog/#/music' },
    { title: 'Github', url: 'https://github.com/arsdorintbp2003' },
    { title: 'Email', url: 'mailto:bui_phuongnam@u.nus.edu' },
    { title: 'Instagram', url: 'https://www.instagram.com/fuffiems.bp/' },
];

const sectionsNom = [
    { title: '張主', url: '/blog' },
    { title: '詩', url: '/blog/#/tho' },
    { title: '琫跢紙', url: '/blog/#/pnf' },
    { title: '與料調𦭧', url: '/blog/#/kworb' },
    { title: '工具', url: 'https://arsdorint.is-a.dev/tungbay/' },
    { title: '𦘧', url: '/blog/#/drawings' },
    { title: '樂㤇惕', url: '/blog/#/music' },
    { title: '𪡴匣', url: 'https://github.com/arsdorintbp2003' },
    { title: '書電子', url: 'mailto:bui_phuongnam@u.nus.edu' },
    { title: '印史些𫏄', url: 'https://www.instagram.com/fuffiems.bp/' },
];

const mainFeaturedPostEng = {
    title: 'Move (Chuyển Nhà)',
    date: 'December 31, 2023',
    description:
        "The stories of families in a small alley during their last days at the old houses, filled with emotions of nostalgia for the connection with the scenery and space.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const mainFeaturedPostNom = {
    title: '轉茹',
    date: '𣈜31𣎃12𢆥2023',
    description:
        '句𡀯𧗱𠬠家庭於𥪝仍𣈜𣎃𡳳窮於在𡾵茹𫇰、在𠬠𡥵𡉦𡮈𡧲城庯、𨑻𦤾仍感觸𣹓懷念𧗱事𮇜抪貝景物吧空間親屬𠓀𣈜𢺹璃。',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: '讀接。。。',
};

const featuredPostsEng = [
    {
        title: 'Concert de la Vie',
        date: 'July 30, 2023',
        description:
            'A poem of my whole journey of Born Pink 2023 Hanoi Concert Day 2 (In Vietnamese), one of the most unforgettable memories in my life.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        link: '/blog/#/tho/third-phase/Concert-de-la-Vie'
    },
    {
        title: 'Concert of Life',
        date: 'May 13, 2023',
        description:
            'A poem of my experience in Born Pink 2023 Singapore Concert Day 1 (In Vietnamese), one of the most unforgettable memories in my life.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        link: '/blog/#/tho/third-phase/Concert-of-Life'
    },
];

const featuredPostsNom = [
    {
        title: '约𢠩 （份𠄩）',
        date: '𣈜30𣎃7𢆥2023',
        description:
            '排詩詳述吏事件𣇜和樂 "Born Pink" 河內𣈜𠄩，戈角𥆾𥪝吧外局。 低𪜀𠬠𥪝仍記忆惵一𥪝局代𠊛曰',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        link: '/blog/#/tho/third-phase/Concert-de-la-Vie'
    },
    {
        title: '约𢠩 （份𠬠）',
        date: '𣈜13𣎃5𢆥2023',
        description:
            '𣳔感触𧶮作者𥪝𣈜參與𣇜惒樂 "Born Pink" 新加坡 𣈜𠬠，𠬠𥪝仍記亿惵一𥪝局代倅 ',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        link: '/blog/#/tho/third-phase/Concert-of-Life'
    },
];

const sidebarEng = {
    title: 'About',
    description:
        "Hello everyone! This is my blog, my corner on the Internet. It serves as a place where I save my memories, and also a chance for me to practice frontend programming. This page is currently in development.",
    archives: [
        { title: 'Moscow Night (Trăng Trắng)', url: '/blog/#/tho/first-phase/trang-trang' },
        { title: 'Lantern Fes (Rằm Tháng Giêng)', url: '/blog/#/tho/first-phase/ram-thang-gieng' },
        { title: 'My Sunshine (Ánh sáng chân lý)', url: '/blog/#/tho/second-phase/anh-sang-chan-ly' },
        { title: 'M57 Girl (Cô Gái M57)', url: '/blog/#/tho/second-phase/co-gai-m57' },
        { title: 'Fungi (Nấm)', url: '/blog/#/tho/second-phase/nam' },
        { title: 'Fungi 2 (Nấm 2 - Nấm Độc)', url: '/blog/#/tho/third-phase/nam-2-nam-doc' },
        { title: 'Old Town Road (Con Đường Xưa)', url: '/blog/#/tho/third-phase/con-duong-xua' },
        { title: 'Mid-Autumn Fes (Trung Thu)', url: '/blog/#/tho/third-phase/trung-thu' },
        { title: 'On Rainy Days (Mưa)', url: '/blog/#/tho/third-phase/mua' },
        { title: 'Meeting (Món Nợ)', url: '/blog/#/tho/third-phase/mon-no' },
        { title: 'Sunny (Nắng)', url: '/blog/#/tho/third-phase/nang' },
    ],
    social: [
        { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/arsdorintbp2003' },
        { name: 'Email', icon: MailIcon, url: 'mailto:bui_phuongnam@u.nus.edu' },
        { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/fuffiems.bp' },
    ],
};

const sidebarNom = {
    title: '介紹',
    description:
        "吀嘲每𠊛！ 低𪜀奘茄𧶮倅 - 南箕椑迻阿. 低𪜀坭倅固勢掑吏仍庼克，杝唸当汝𥪝局代倅, 供如𪜀坭倅楝习立呈交偭. 奘命呢刎裆𥪝過程實現.",
    archives: [
        { title: '𦝄𤽸', url: '/blog/#/tho/first-phase/trang-trang' },
        { title: '𦝃𣎃𦙫', url: '/blog/#/tho/first-phase/ram-thang-gieng' },
        { title: '暎𠒫真理', url: '/blog/#/tho/second-phase/anh-sang-chan-ly' },
        { title: '姑𡛔𠼽𠄼𦉱', url: '/blog/#/tho/second-phase/co-gai-m57' },
        { title: '蕈', url: '/blog/#/tho/second-phase/nam' },
        { title: '蕈𠄩（蕈毒）', url: '/blog/#/tho/third-phase/nam-2-nam-doc' },
        { title: '𡥵塘初', url: '/blog/#/tho/third-phase/con-duong-xua' },
        { title: '中秋', url: '/blog/#/tho/third-phase/trung-thu' },
        { title: '𩄎', url: '/blog/#/tho/third-phase/mua' },
        { title: '媒嫧', url: '/blog/#/tho/third-phase/mon-no' },
        { title: '𪱆', url: '/blog/#/tho/third-phase/nang' },
    ],
    social: [
        { name: '拮匣', icon: GitHubIcon, url: 'https://github.com/arsdorintbp2003' },
        { name: '䋡電子', icon: MailIcon, url: 'mailto:bui_phuongnam@u.nus.edu' },
        { name: '印史些𫏄', icon: InstagramIcon, url: 'https://www.instagram.com/fuffiems.bp' },
    ],
};

const footerTitleEng = "Hope you enjoy my website!";
const footerDescriptionEng = "Contact me via my social accounts for comments, advice, or just because you want to be my friend!"
const footerTitleNom = "僖妄每𠊛吆俶奘茄𧶮命"
const footerDescriptionNom = "嗹係𠇍倅戈𦁸社會呧㨂合悥見𧶮，偋論撝奘茄𧶮倅，惑只單簡𪜀呧㮮伴"

export let language;

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const nomTheme = createTheme({
	typography: {
		fontFamily: 'Nom Na Tong, sans-serif',
    },
});

export default function Blog() {
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        return localStorage.getItem('language') || 'English';
    });

    useEffect(() => {
        // Save language to local storage whenever it changes
        localStorage.setItem('language', currentLanguage);
        language = currentLanguage;
    }, [currentLanguage]);

    const toggleLanguage = (currentLanguage) => {
        setCurrentLanguage(currentLanguage === 'English' ? 'English' : 'Vietnamese');
    };
    language = currentLanguage;

    const blogTitle = currentLanguage === 'English' ? 'Namkeypedia' : '南箕椑迻阿';
    const sections = currentLanguage === 'English' ? sectionsEng : sectionsNom;
    const featuredPosts = currentLanguage === 'English' ? featuredPostsEng : featuredPostsNom;
    const mainFeaturedPost = currentLanguage === 'English' ? mainFeaturedPostEng : mainFeaturedPostNom;
    const sidebar = currentLanguage === 'English' ? sidebarEng : sidebarNom;
    const mainTitle = currentLanguage === 'English' ? "From the firehose" : "𠊝𢷮近低";
    const footerTitle = currentLanguage === 'English' ? footerTitleEng : footerTitleNom;
    const footerDescription = currentLanguage === 'English' ? footerDescriptionEng : footerDescriptionNom;
    const theme = currentLanguage === 'English' ? defaultTheme : nomTheme;

    return (
        <HelmetProvider>
            <Helmet>
                <title>Namkeypedia - A Corner of Memories and Programming</title>
                <meta name="description" content="Hello everyone! This is my blog, my corner on the Internet. It serves as a place where I save my memories, and also a chance for me to practice frontend programming. This page is currently in development." />
                <meta name="keywords" content="Blog, Namkeypedia, Memories, Frontend Programming, Vietnamese Poem, Paper Football" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Namkeypedia",
                        "description": "Hello everyone! This is my blog, my corner on the Internet. It serves as a place where I save my memories, and also a chance for me to practice frontend programming. This page is currently in development.",
                        "url": "https://yourwebsite.com/blog"
                    }
                    `}
                </script>
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Container maxWidth="lg">
                        <Header title={blogTitle} sections={sections} onLanguageChange={toggleLanguage} />
                        <main>
                            <Routes>
                                <Route path="tho/*" element={<ThoRoutes />} />
                                <Route path="/pnf/*" element={<PnfRoutes />} />
                                <Route
                                    path="/"
                                    element={
                                        <>
                                            <MainFeaturedPost post={mainFeaturedPost} />
                                            <Grid container spacing={4}>
                                                {featuredPosts.map((post) => (
                                                    <FeaturedPost key={post.title} post={post} />
                                                ))}
                                            </Grid>
                                            <Grid container spacing={5} sx={{ mt: 3 }}>
                                                <Main title={mainTitle} />
                                                <Sidebar
                                                    title={sidebar.title}
                                                    description={sidebar.description}
                                                    archives={sidebar.archives}
                                                    social={sidebar.social}
                                                />
                                            </Grid>
                                        </>
                                    }
                                />
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </main>
                    </Container>
                </Router>
                <Footer
                    title={footerTitle}
                    description={footerDescription}
                />
            </ThemeProvider>
        </HelmetProvider>
    );
}
