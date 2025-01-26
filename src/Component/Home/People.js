import React from 'react'
import { Container } from 'react-bootstrap'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from '../../Styles/Home.module.css'
import img1 from '../../assets/images/home-adventures-01.jpg'
import img2 from '../../assets/images/error_image.png'

const People = () => {
    return (
        <>
            <section>
                <Container>
                    <div className={`${styles.for__body} ${styles.poe__body}`}>
                        <h3>People with similar interests</h3>
                        <p>See more <ChevronRightIcon /></p>
                    </div>
                    <div className={`${styles.cards}`}>

                    
                    <div className={`${styles.poeple__card}`}>
                        <img alt='' src={img1} className={`${styles.People__img}`} />
                        <p>John Doe</p>
                        <button className={`${styles.button}`}>

                            <span className={`${styles.button__text}`}>Contact</span>
                        </button>

                    </div>
                    <div className={`${styles.poeple__card}`}>
                        <img alt='' src={img2} className={`${styles.People__img}`} />
                        <p>John Doe</p>
                        <button className={`${styles.button}`}>

                            <span className={`${styles.button__text}`}>Contact</span>
                        </button>

                    </div>
                    <div className={`${styles.poeple__card}`}>
                        <img alt='' src={img1} className={`${styles.People__img}`} />
                        <p>John Doe</p>
                        <button className={`${styles.button}`}>

                            <span className={`${styles.button__text}`}>Contact</span>
                        </button>

                    </div>
                    <div className={`${styles.poeple__card}`}>
                        <img alt='' src={img2} className={`${styles.People__img}`} />
                        <p>John Doe</p>
                        <button className={`${styles.button}`}>

                            <span className={`${styles.button__text}`}>Contact</span>
                        </button>

                    </div>
                        <div className={`${styles.poeple__card}`}>
                            <img alt='' src={img1} className={`${styles.People__img}`} />
                            <p>John Doe</p>
                            <button className={`${styles.button}`}>

                                <span className={`${styles.button__text}`}>Contact</span>
                            </button>

                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default People
