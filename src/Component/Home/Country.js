import React from 'react'
import { Container } from 'react-bootstrap';
import styles from '../../Styles/Home.module.css'
import img1 from '../../assets/images/paris.jpg'
import img2 from '../../assets/images/london.jpg'

import PlaceIcon from '@mui/icons-material/Place';
const Country = () => {
    return (
        <>
            <section>
                <Container>
                    <div className={`${styles.cards}`}>
                        <div >
                            <div className={`${styles.country__body}`}>
                                <img alt='' src={img1} className={`${styles.card__img}`} />
                            </div>
                            <h2 className={`${styles.country__title}`}>Paris</h2>
                            <p className={`${styles.country__para}`}><PlaceIcon /> France</p>
                        </div>
                        <div>
                            <div className={`${styles.country__body}`}>
                                <img alt='' src={img2} className={`${styles.card__img}`} />
                            </div>
                            <h2 className={`${styles.country__title}`}>London</h2>
                            <p className={`${styles.country__para}`}><PlaceIcon /> United Kingdom</p>
                        </div>
                        <div >
                            <div className={`${styles.country__body}`}>
                                <img alt='' src={img1} className={`${styles.card__img}`} />
                            </div>
                            <h2 className={`${styles.country__title}`}>Paris</h2>
                            <p className={`${styles.country__para}`}><PlaceIcon /> France</p>
                        </div>
                        <div>
                            <div className={`${styles.country__body}`}>
                                <img alt='' src={img2} className={`${styles.card__img}`} />
                            </div>
                            <h2 className={`${styles.country__title}`}>London</h2>
                            <p className={`${styles.country__para}`}><PlaceIcon /> United Kingdom</p>
                        </div>
                        <div >
                            <div className={`${styles.country__body}`}>
                                <img alt='' src={img1} className={`${styles.card__img}`} />
                            </div>
                            <h2 className={`${styles.country__title}`}>Paris</h2>
                            <p className={`${styles.country__para}`}><PlaceIcon /> France</p>
                        </div>
                        <div>
                            <div className={`${styles.country__body}`}>
                                <img alt='' src={img2} className={`${styles.card__img}`} />
                            </div>
                            <h2 className={`${styles.country__title}`}>London</h2>
                            <p className={`${styles.country__para}`}><PlaceIcon /> United Kingdom</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Country
