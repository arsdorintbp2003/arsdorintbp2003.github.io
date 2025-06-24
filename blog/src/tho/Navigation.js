import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { getNextAndPrevLinks, categories } from './LeftPanel';
import { language } from '../Blog';

const Navigation = ({ poemTitle }) => {
    const currentCategoryIndex = categories.findIndex(
        (categories) => categories.poems.findIndex((poem) => poem.title === poemTitle) !== -1
    );
    const { nextLink, prevLink } = getNextAndPrevLinks(categories, currentCategoryIndex, poemTitle);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5%' }}>
            {prevLink && (
                <Button
                    component={Link}
                    to={prevLink}
                    variant="contained"
                    color="primary"
                    style={{ marginLeft:'10%', backgroundColor: 'rgb(235, 235, 235)', color: 'rgb(20, 20, 20)' }}
                >
                    { language === "English" ? "Previous" : "排畧" }
                </Button>
            )}
            {nextLink && (
                <Button
                    component={Link}
                    to={nextLink}
                    variant="contained"
                    color="primary"
                    style={{ marginRight: '10%', backgroundColor: 'rgb(235, 235, 235)', color: 'rgb(20, 20, 20)' }}
                >
                    { language === "English" ? "Next" : "排接" }
                </Button>
            )}
        </div>
    );
}

export default Navigation;