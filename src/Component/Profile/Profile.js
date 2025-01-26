import React from 'react'
import img from '../../assets/images/profile.png'
import styles from '../../Styles/profile.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import user from '../../assets/images/profileImagePlaceholder.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const Profile = () => {
  return (
    <>
      <section>
        <Container className={`${styles.Container}`}>
          <div className={`${styles.profile__background}`}>
            <img alt='' src={img} className={`${styles.img__background}`} />
            <div className={`${styles.profile__body}`}>
              <div className={`${styles.user__body}`}>
                <img alt='' src={user} className={`${styles.userimg}`} />
                <div>
                  <h3>Hello , saber</h3>
                  <p>@saberson1</p>
                </div>
              </div>
            </div>
          </div>
          <Row className={`${styles.row__body}`}>
            <Col className={`${styles.col__body}`}>
            <div>
              <h3>Settings</h3>
              <div className={`${styles.setting__body}`}>
                <div>
                  <p><AccountBoxIcon/> Account</p>
                    <ChevronRightIcon/>
                </div>
                <hr/>
                  <div>
                    <p><NotificationsIcon /> Notification</p>
                    <ChevronRightIcon />
                  </div>
                  <hr/>
                  <div>
                    <p><SettingsIcon /> App Setting</p>
                    <ChevronRightIcon />
                  </div>
              </div>
             
            </div>
            </Col>
            <Col className={`${styles.col__body}`}>
            <div>
              <h3>Help Center</h3>
                <div className={`${styles.setting__body}`}>
                  <div>
                    <p><HelpOutlineIcon /> FAQs</p>
                    <ChevronRightIcon />
                  </div>
                  <hr />
                  <div>
                    <p><AttachFileIcon /> Terms & Conditions</p>
                    <ChevronRightIcon />
                  </div>
                 
                 
                </div>

            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Profile
