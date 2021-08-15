import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'

// Import Links
import { Link } from 'react-router-dom'

// Import Images
import logoImg from '../../assets/home/svgexport-1.svg'
import netflix from '../../assets/home/svgexport-5.svg'
import shopify from '../../assets/home/svgexport-6.svg'
import snowflake from '../../assets/home/svgexport-7.svg'
import databricks from '../../assets/home/svgexport-8.svg'
import slack from '../../assets/home/svgexport-9.svg'
import oneMedical from '../../assets/home/svgexport-10.svg'
import stitchFix from '../../assets/home/svgexport-11.svg'
import citadel from '../../assets/home/svgexport-12.svg'

const Register = () => {
  return (
    <section className='auth_page'>
      <section
        className='text-center p-2'
        style={{ backgroundColor: '#f2f5f7' }}
      >
        <Image
          src='https://s.w.org/images/core/emoji/13.1.0/svg/1f4e3.svg'
          style={{
            width: '15px',
          }}
        />{' '}
        Want to work with us? We’re hiring!
      </section>
      <div className='top' style={{ height: '70px' }}>
        <Container>
          <Row>
            <Col md={6} className='m-auto'>
              <Image src={logoImg} style={{ width: '150px', marginTop: 25 }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='main_section'>
        <Container>
          <Row className='top-text mt-5'>
            <Col md={5} className='m-auto register__form p-5'>
              <h4 className='mb-4'>Start your 7-day Free Trial today!</h4>
              <Form className='auth__form mt-5'>
                <Form.Group className='mb-3' controlId='formPlaintextPassword'>
                  <Form.Label>Work Email</Form.Label>
                  <Form.Control type='email' placeholder='demo@example.com' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPlaintextPassword'>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type='email' placeholder='First Name' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPlaintextPassword'>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type='email' placeholder='Last Name' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPlaintextPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='email' placeholder='Password' />
                </Form.Group>
                <Form.Group
                  className='text-center'
                  controlId='formBasicCheckbox'
                >
                  <Form.Check
                    type='checkbox'
                    label=' Send me important emails about CoderPad'
                  />
                </Form.Group>
                <Form.Group className='text-center mb-0'>
                  <Button
                    variant='primary'
                    style={{ textTransform: 'capitalize' }}
                  >
                    Start Free Trial
                  </Button>
                </Form.Group>
              </Form>
            </Col>
            <Col md={12} className='mt-5'>
              <h5
                className='text-center'
                style={{
                  fontSize: '18px',
                  fontFamily: 'Open Sans',
                  fontWeight: '500',
                  color: 'black',
                }}
              >
                Join 2,000+ happy companies
              </h5>
              <ul className='register_customers mt-2'>
                <li>
                  <Image src={netflix} />
                </li>
                <li>
                  <Image src={shopify} />
                </li>
                <li>
                  <Image src={snowflake} />
                </li>
                <li>
                  <Image src={databricks} />
                </li>
                <li>
                  <Image src={slack} />
                </li>
                <li>
                  <Image src={oneMedical} />
                </li>
                <li>
                  <Image src={stitchFix} />
                </li>
                <li>
                  <Image src={citadel} />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className='mt-5 bottom_links'>
            <Col md={11} className='m-auto'>
              <Row>
                <Col md={4}>
                  <Link to='/login'>Have an account? Log in</Link>
                </Col>
                <Col md={4}>
                  <Link to='/'>Didn't receive confirmation instructions?</Link>
                </Col>
                <Col md={4}>
                  <Link to='/'>Didn't receive unlock instructions?</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Register
