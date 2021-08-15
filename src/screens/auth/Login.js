import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Images
import logoImg from '../../assets/auth/loginLogo.png'

const Login = () => {
  return (
    <section className='auth_page'>
      <div className='top'>
        <Container>
          <Row>
            <Col md={6} className='m-auto'>
              <Image src={logoImg} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='main_section'>
        <Container>
          <Row className='mb-5'>
            <Col md={6} className='m-auto'>
              <Form className='auth__form mt-5'>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextPassword'
                >
                  <Form.Label column sm='2'>
                    Email
                  </Form.Label>
                  <Col sm='9'>
                    <Form.Control type='email' placeholder='Email' />
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className='mb-3'
                  controlId='formPlaintextPassword'
                >
                  <Form.Label column sm='2'>
                    Password
                  </Form.Label>
                  <Col sm='9'>
                    <Form.Control type='password' placeholder='Password' />
                  </Col>
                </Form.Group>
                <Form.Group className='text-center mt-5'>
                  <Button variant='primary'>LOGIN</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className='text-center auth_links'>
            <Col md={12}>
              <p className='mb-0'>
                <Link to='/register'>
                  Not a member yet? Register for a free trial.
                </Link>
              </p>
              <p className='mb-0'>
                <Link to='/'>Forgot your password?</Link>
              </p>
              <p className='mb-0'>
                <Link to='/'>Didn't receive confirmation instructions?</Link>
              </p>
              <p className='mb-0'>
                <Link to='/'>Didn't receive unlock instructions?</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Login
