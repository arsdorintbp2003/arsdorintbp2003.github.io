// Breadcrumb.js
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { categories, slugify } from './LeftPanel';

const generateBreadcrumbMap = (categories, language) => {
    const breadcrumbMap = {};
    categories.forEach((category) => {
        breadcrumbMap[category.link] = language === 'English' ? category.title : category.titleChuNom;
        category.poems.forEach((poem) => {
            const poemKey = `${category.link}/${slugify(poem.title)}`;
            breadcrumbMap[poemKey] = language === 'English' ? poem.title : poem.titleChuNom;
        });
    });
    return breadcrumbMap;
};

const Breadcrumb = ({ language }) => {
    const breadcrumbMap = generateBreadcrumbMap(categories, language);
	const thoLabel = language === 'English' ? 'Vietnamese Poem' : '詩';
	const firstLabel = language === 'English' ? 'First Phase' : '階段創作次一';
	const secondLabel = language === 'English' ? 'Second Phase' : '階段創作次𠄩';
	const thirdLabel = language === 'English' ? 'Third Phase' : '階段創作次𠀧';
	const currentPath = window.location.hash;
    const pathParts = currentPath.replace('#', '').split('/').filter((part) => part !== '');

    const breadcrumbs = pathParts.map((part, index, array) => {
        const isLastPart = index === array.length - 1;
        const path = `/${array.slice(0, index + 1).join('/')}`;
        const key = `breadcrumb-${index}-${path}`;
        const label = part === 'tho' ? thoLabel : part === 'first-phase' ? firstLabel : part === 'second-phase'
                            ? secondLabel : part ==='third-phase' ? thirdLabel
                            : part.includes('co-gai-m57') && language === 'Vietnamese' ? '姑𡛔𠼽𠄼𦉱'
                            : isLastPart ? breadcrumbMap[path.toLowerCase()] : null;
        return (
            <Link
                key={key}
                href={isLastPart ? undefined : '/blog/#' + path}
                color={isLastPart ? 'textPrimary' : 'inherit'}
				style={{
                    cursor: isLastPart ? 'default' : 'pointer',
                    textDecoration: isLastPart ? 'none' : 'underline',
                    padding: '5px',
                    borderRadius: '5px',
                }}
                hover={{
                    backgroundColor: 'red',
                }}
            >
                {label}
            </Link>
        );
    });

    return (
        <div style={{ textAlign: 'center', fontSize: '1px', marginBottom: '1vh' }}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/blog/">
                    <HomeIcon />
                </Link>
                {breadcrumbs}
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;
