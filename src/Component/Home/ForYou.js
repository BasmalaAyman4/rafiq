import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Container } from 'react-bootstrap';
import styles from '../../Styles/Home.module.css'
import img1 from '../../assets/images/paris.jpg'
import img2 from '../../assets/images/london.jpg'

import PlaceIcon from '@mui/icons-material/Place';
const ForYou = () => {
    return (
        <>
            <section>
                <Container>
                    <div className={`${styles.for__body}`}>
                        <h3>For You</h3>
                        <p>See more <ChevronRightIcon /></p>
                    </div>
                    <div className={`${styles.cards}`}>
                    <div className={`${styles.card}`}>
                        <div className={`${styles.card__body}`}>
                            <img alt='' src={img1} className={`${styles.card__img}`} />
                        <div className={`${styles.card__caption}`}>
                            <h2>Paris</h2>
                            <p><PlaceIcon/> France</p>
                        </div>
                        </div>
                        <h3 className={`${styles.card__title}`}><span>5</span> Offers</h3>
                    </div>
                    <div className={`${styles.card}`}>
                        <div className={`${styles.card__body}`}>
                            <img alt='' src={img2} className={`${styles.card__img}`} />
                            <div className={`${styles.card__caption}`}>
                                <h2>London</h2>
                                <p><PlaceIcon /> United Kingdom</p>
                            </div>
                        </div>
                        <h3 className={`${styles.card__title}`}><span>5</span> Offers</h3>
                    </div>
                        <div className={`${styles.card}`}>
                            <div className={`${styles.card__body}`}>
                                <img alt='' src={img1} className={`${styles.card__img}`} />
                                <div className={`${styles.card__caption}`}>
                                    <h2>Paris</h2>
                                    <p><PlaceIcon /> France</p>
                                </div>
                            </div>
                            <h3 className={`${styles.card__title}`}><span>5</span> Offers</h3>
                        </div>
                        <div className={`${styles.card}`}>
                            <div className={`${styles.card__body}`}>
                                <img alt='' src={img2} className={`${styles.card__img}`} />
                                <div className={`${styles.card__caption}`}>
                                    <h2>London</h2>
                                    <p><PlaceIcon /> United Kingdom</p>
                                </div>
                            </div>
                            <h3 className={`${styles.card__title}`}><span>5</span> Offers</h3>
                        </div>
                </div>
                </Container>
            </section>
        </>
    )
}

export default ForYou
