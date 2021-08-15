import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

// Import Styles
import styles from './styles/Notification.module.css'

const Notification = () => {
  return (
    <section className={styles.notification}>
      <Container>
        <Row className='text-center'>
          <Col md={6} className='m-auto'>
            <span>
              You have 3 days left on your trial.{'  '}
              <Button variant='primary'>Upgrade Now</Button>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Notification
