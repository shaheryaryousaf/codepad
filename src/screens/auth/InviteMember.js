import React from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'

// Import Images
import logoImg from '../../assets/home/svgexport-1.svg'

const InviteMember = () => {
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
                <b>Invite a team member</b>
              </h5>
              <p>
                Having your colleagues join your team allow sharing pads,
                interview questions, and other resources,
              </p>
            </Col>
          </Row>
          <Row className='mb-5'>
            <Col md={5} className='m-auto'>
              <Form className='auth__form mt-3'>
                <Form.Group className='mb-3' controlId='formPlaintextPassword'>
                  <Form.Label>Put one email address per line</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows='5'
                    placeholder='demo@example.com'
                  />
                </Form.Group>
                <Form.Group className='text-center mt-5'>
                  <Button
                    variant='primary'
                    style={{ textTransform: 'capitalize' }}
                  >
                    Invite
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

export default InviteMember
