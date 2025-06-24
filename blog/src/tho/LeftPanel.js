import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import getSlug from 'speakingurl';
import { language } from '../Blog';

export const categories = [
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
    },
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
    },
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
    },
];

const nunitoStyle = {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 700,
};

const nomStyle = {
	fontFamily: 'Nom Na Tong, sans-serif',
	fontWeight: 'bold',
}

function getNextAndPrevLinks(categories, currentCategoryIndex, title) {
    const currentCategory = categories[currentCategoryIndex];

    if (!currentCategory || !currentCategory.poems) {
        return { nextLink: '', prevLink: '' };
    }
    const currentPoemIndex = currentCategory.poems.findIndex((poem) => poem.title === title);

    const nextPoemIndex = (title === "Cô Gái M57" && language === "Vietnamese")
        ? (currentPoemIndex + 1) % currentCategory.poems.length + 2
        : (currentPoemIndex + 1) % currentCategory.poems.length;
    const prevPoemIndex = (title === "Chuyện Lớp Mình (tạm đặt)" && language === "Vietnamese")
        ? (currentPoemIndex - 1 + currentCategory.poems.length) % currentCategory.poems.length - 2
        : (currentPoemIndex - 1 + currentCategory.poems.length) % currentCategory.poems.length;

    const nextLink = `${currentCategory.link}/${slugify(
        currentCategory.poems[nextPoemIndex].title
    )}`;
    const prevLink = `${currentCategory.link}/${slugify(
        currentCategory.poems[prevPoemIndex].title
    )}`;

    return { nextLink, prevLink };
}

export function slugify(text) {
	const regex = /\(tạm đặt\)/gi;
    const slug = getSlug(text.replace(regex, ''));
    return slug;
}


function LeftPanel({ categories, open }) {
    const [expandedCategories, setExpandedCategories] = useState([]);
    const [selectedPoemIndex, setSelectedPoemIndex] = useState(-1);

    const handleCategoryClick = (index) => {
        if (expandedCategories.includes(index)) {
            setExpandedCategories(expandedCategories.filter((item) => item !== index));
        } else {
            setExpandedCategories([...expandedCategories, index]);
        }
    };
    const wordStyle = language === "English" ? nunitoStyle : nomStyle;

    useEffect(() => {
        if (selectedPoemIndex >= 0) {
            const item = document.getElementById(`poem-${selectedPoemIndex}`);
            if (item) {
                item.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [selectedPoemIndex]);



    return (
        <div className="drawer-content" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
            <List component="nav">
                <div className="drawer-content">
                    <List component="nav">
                        {categories.map((category, index) => (
                            <div key={index}>
                                <ListItem button>
                                    <div
                                        className="category-container"
                                        style={ language === 'English'
                                            ? { ...nunitoStyle, paddingLeft: '16px' }
                                            : { ...nomStyle }
                                        }
                                    >
                                        <Link
                                            to={category.link}
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            {language === 'Vietnamese'
                                                ? category.titleChuNom || category.title
                                                : category.title}
                                        </Link>
                                    </div>
                                    <div
                                        className="icon-container"
                                        onClick={() => handleCategoryClick(index)}
                                        style={{ ...nunitoStyle, paddingLeft: '24px' }}
                                    >
                                        {expandedCategories.includes(index) ? (
                                            <ExpandLessIcon />
                                        ) : (
                                            <ExpandMoreIcon />
                                        )}
                                    </div>
                                </ListItem>
                                {expandedCategories.includes(index) && (
                                    <List>
                                        {category.poems.map((poem, poemIndex) => (
                                            <ListItem
                                                key={poemIndex}
                                                className="poem-item"
                                                style={{
                                                    ...wordStyle,
                                                    paddingLeft: '64px',
                                                    backgroundColor:
                                                        poemIndex === selectedPoemIndex ? '#f0f0f0' : 'inherit',
                                                }}
                                            >
                                                <Link
                                                    to={`${category.link}/${slugify(poem.title)}`}
                                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                                    onClick={() => setSelectedPoemIndex(poemIndex)}
                                                >
                                                    {language === 'Vietnamese'
                                                        ? poem.titleChuNom || poem.title
                                                        : poem.title}
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                )}
                            </div>
                        ))}
                    </List>
                </div>
            </List>
        </div>
    );
}

export default LeftPanel;
export { getNextAndPrevLinks }