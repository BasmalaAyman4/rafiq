import React, { useState, useEffect } from 'react'
import styles from '../Styles/Nav.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import logo from '../assets/images/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
const Header = (props) => {
    const { t, i18n } = useTranslation();

    // Extract base language (e.g., 'en' from 'en-EG')
    const baseLanguage = i18n.language.split('-')[0];

    // Ensure the correct direction is set on initial load
    useEffect(() => {
        document.documentElement.dir = baseLanguage === 'ar' ? 'rtl' : 'ltr';
    }, [baseLanguage]);

    // Function to toggle the language
    const switchLanguage = () => {
        const newLang = baseLanguage === 'en' ? 'ar' : 'en'; // Toggle language
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'; // Update direction
    };
    return (
        <>
            <div className={`${styles.navbar} `} >
                <Container>
                    <div className={`${styles.nav__body}`}>


                        <div>
                            <img alt='logo' src={logo} className={`${styles.logo}`} />

                        </div>
                        <div>
                            <ul className={`${styles.nav__list}`}>
                                <li className={`${styles.nav__item}`}><NavLink to='/' className={`${styles.nav__link}`}>{t("Home")}</NavLink></li>
                                <li className={`${styles.nav__item}`}><NavLink to='/trips' className={`${styles.nav__link}`}>{t("Trips")}</NavLink></li>
                                <li className={`${styles.nav__item}`}><NavLink to='/signup' className={`${styles.nav__link}`}>{t("Signup")}</NavLink></li>

                            </ul>
                        </div>
                        <div>
                            <button onClick={switchLanguage} className={`${styles.lang__btn}`}>
                                {baseLanguage === 'en' ? 'AR' : 'EN'}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

<footer>
                <NavLink to='/'><HomeIcon/></NavLink>
                <NavLink to='/trips'><MapIcon /></NavLink>
                <NavLink to='/profile'><PersonIcon /></NavLink>


</footer>

        </>
    )
}

export default Header
