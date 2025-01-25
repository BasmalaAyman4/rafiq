import React from 'react'
import styles from '../../Styles/Home.module.css'
import { Container } from 'react-bootstrap'
import img1 from '../../assets/images/home-adventures-01.jpg'
import img2 from '../../assets/images/activity-img-1.jpg'

const Stories = () => {
  return (
    <>
      <section>
        <Container>
            <div className={`${styles.stories__body}`}>
                      <img alt='' src={img1} className={`${styles.stories__img}`} />
                      <img alt='' src={img2} className={`${styles.stories__img}`} />
                      <img alt='' src={img1} className={`${styles.stories__img}`} />
                      <img alt='' src={img2} className={`${styles.stories__img}`} />
                      <img alt='' src={img1} className={`${styles.stories__img}`} />
                      <img alt='' src={img2} className={`${styles.stories__img}`} />
                      <img alt='' src={img1} className={`${styles.stories__img}`} />
                      <img alt='' src={img2} className={`${styles.stories__img}`} />
                      <img alt='' src={img1} className={`${styles.stories__img}`} />
                 
           
           
            </div>
        </Container>
      </section>
    </>
  )
}

export default Stories
