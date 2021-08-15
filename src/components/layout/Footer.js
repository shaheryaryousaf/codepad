import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Style
import styles from './styles/Footer.module.css'

// Import Images
import logoImg from '../../assets/home/svgexport-21.svg'
import twitterImg from '../../assets/home/svgexport-22.svg'
import twitchImg from '../../assets/home/svgexport-23.svg'
import youtubeImg from '../../assets/home/svgexport-24.svg'
import slackImg from '../../assets/home/svgexport-25.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div>
              <Image src={logoImg} fluid style={{ width: '150px' }} />
            </div>
            <ul className={styles.socialIcons}>
              <li>
                <Link to='/'>
                  <Image src={twitterImg} fluid style={{ width: '15px' }} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <Image src={twitchImg} fluid style={{ width: '15px' }} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <Image src={youtubeImg} fluid style={{ width: '15px' }} />
                </Link>
              </li>
              <li>
                <Link to='/'>
                  <Image src={slackImg} fluid style={{ width: '15px' }} />
                </Link>
              </li>
            </ul>
            <p className='mb-0'>
              Questions?{' '}
              <Link to='mailto:support@coderpad.io'>
                <b>support@coderpad.io</b>
              </Link>
            </p>
            <p>
              <Link to='/'>
                <b>Status</b>
              </Link>
            </p>
            <p className='mb-0'>©2021 CoderPad, Inc</p>
            <p>CoderPad is a service mark of CoderPad, Inc.</p>
          </Col>

          <Col md={2}>
            <ul style={styles.ul}>
              <li>
                <b>PRODUCT</b>
              </li>
              <li>
                <Link to='/'>Pricing</Link>
              </li>
              <li>
                <Link to='/'>Live Collaborative Coding</Link>
              </li>
              <li>
                <Link to='/'>Take-Home Assessments</Link>
              </li>
              <li>
                <Link to='/'>Drawing Mode</Link>
              </li>
              <li>
                <Link to='/'>Focus Time</Link>
              </li>
              <li>
                <Link to='/'>Integrations</Link>
              </li>
              <li>
                <Link to='/'>Single Sign-On (SSO)</Link>
              </li>
            </ul>
          </Col>

          <Col md={2}>
            <ul style={styles.ul}>
              <li>
                <b>RESOURCES</b>
              </li>
              <li>
                <Link to='/'>FAQs</Link>
              </li>
              <li>
                <Link to='/'>CodePad User Guides</Link>
              </li>
              <li>
                <Link to='/'>Docs</Link>
              </li>
              <li>
                <Link to='/'>Customers</Link>
              </li>
              <li>
                <Link to='/'>Testimonials</Link>
              </li>
              <li>
                <Link to='/'>Learning Center</Link>
              </li>
              <li>
                <Link to='/'>University Recruiting</Link>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <ul style={styles.ul}>
              <li>
                <b>COMPANY</b>
              </li>
              <li>
                <Link to='/'>About Us</Link>
              </li>
              <li>
                <Link to='/'>Careers</Link>
              </li>
              <li>
                <Link to='/'>Blog</Link>
              </li>
              <li>
                <Link to='/'>Contact Us</Link>
              </li>
              <li>
                <Link to='/'>Terms of Service</Link>
              </li>
              <li>
                <Link to='/'>Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
