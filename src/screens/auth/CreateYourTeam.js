import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'

// Import Images
import logoImg from '../../assets/home/svgexport-1.svg'

const CreateYourTeam = () => {
  return (
    <section className='auth_page'>
      <div className='top'>
        <Container>
          <Row>
            <Col md={6} className='m-auto'>
              <Image src={logoImg} style={{ width: '250px' }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='main_section'>
        <Container>
          <Row className='top-text mt-5'>
            <Col md={5} className='m-auto'>
              <h5 className='text-center mb-4'>
                <b>Create your team and get started</b>
              </h5>
              <p>
                Creating a team trial allows you to unlock <b>all</b> features
                for <b>free</b> for next 7 days.
              </p>
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col md={5} className='m-auto'>
              <Form className='auth__form mt-3'>
                <Form.Group className='mb-3' controlId='formPlaintextPassword'>
                  <Form.Label>Team name</Form.Label>
                  <Form.Control
                    type='text'
                    rows='5'
                    placeholder='demo@example.com'
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formPlaintextPassword'>
                  <Form.Label>Default programming language to use</Form.Label>
                  <select
                    className='form-control'
                    aria-label='Default select example'
                  >
                    <option>Open this select menu</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                  </select>
                </Form.Group>
                <Form.Group className='text-center mt-5'>
                  <Button
                    variant='primary'
                    style={{ textTransform: 'capitalize' }}
                  >
                    Get Started
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default CreateYourTeam
