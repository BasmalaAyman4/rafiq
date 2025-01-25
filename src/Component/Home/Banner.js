import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide from '../../assets/images/slider-1.jpg'
import slide2 from '../../assets/images/home-adventures-01.jpg'
import styles from '../../Styles/Home.module.css'
const Banner = () => {
  return (
    <>
    <section className='banner__sec'>
          <Carousel>
              <Carousel.Item>
               <img alt='' src={slide} className={`${styles.banner__img}`}/>
                      <Carousel.Caption>
                          <h3>Discover</h3>
                      </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                      <img alt='' src={slide} className={`${styles.banner__img}`} />
                      <Carousel.Caption>
                          <h3>Discover</h3>
                      </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                      <img alt='' src={slide} className={`${styles.banner__img}`} />
                      <Carousel.Caption>
                          <h3>Discover</h3>
                      </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
                  

                  <div className="search-container">
                      <input
                          type="text"
                          placeholder="Search"
                          className="search-input"
                      />
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 30 30"
                          fill="#6B7280"
                      >
                          <path
                              d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                          ></path>
                      </svg>
                  </div>
          </section>
    </>
  )
}

export default Banner
