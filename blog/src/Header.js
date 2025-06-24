import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LanguageIcon from '@mui/icons-material/Language';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { language } from './Blog';
import Logo from './assets/images/ARSDORINT.png';

function Header(props) {
    const { sections, title, onLanguageChange } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLanguageClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageSelect = (language) => {
        onLanguageChange(language);
        handleLanguageClose();
    };

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small" style={{ display: "none" }}>Subscribe</Button>
                <div>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ width: '100%', maxWidth: '27px', height: 'auto' }}
                    />
                </div>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    sx={{ flex: 1 }}
                    style={language === "Vietnamese" ? { fontSize: "200%", fontWeight: "bold" }  : {}}
                >
                    {title}
                </Typography>
                <IconButton onClick={handleLanguageClick}>
                    <LanguageIcon />
                </IconButton>
                <IconButton>
                    <SearchIcon style={{ display: "none"}} />
                </IconButton>
                <Button variant="outlined" size="small" style={{ display: "none"}} >
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
                        href={section.url}
                        sx={{ p: 1, flexShrink: 0 }}
                        style={language === "Vietnamese" ? { fontSize: "140%" } : {}}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLanguageClose}
            >
                <MenuItem onClick={() => handleLanguageSelect('English')}>
                    { language === 'English' ? 'English' : '㗂英' }
                </MenuItem>
                <MenuItem onClick={() => handleLanguageSelect('Vietnamese')}>
                    { language === 'English' ? 'Vietnamese' : '㗂越' }
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
};

export default Header;