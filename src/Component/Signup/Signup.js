import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/images/splash_screen.png'
import styles from '../../Styles/signup.module.css'
const Signup = () => {
  return (
    <>
    <Container>
      <section className={`${styles.sign__sec}`}>
              <Row className={`${styles.sign__row}`}>
            <Col xl='6'>
<img alt='' src={logo} className={`${styles.sign__logo}`}/>
            </Col>
            <Col xl='6'>
            <p>jfjbefr</p>
            </Col>
        </Row>
      </section>
          </Container>
    </>
  )
}

export default Signup
