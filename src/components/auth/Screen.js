import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Import Components
import Header from './Header'
import Notification from './Notification'
import Sidebar from './Sidebar'

// Import Styles
import styles from './styles/Screen.module.css'

const Screen = ({ children }) => {
  return (
    <div className='dashboard-page'>
      <Header />
      <Notification />
      <Container className={styles.accounts__container} fluid>
        <Row>
          <Col md={12} className={styles.main}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Screen
