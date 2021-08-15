import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Components
import Screen from '../../components/auth/Screen'
import PageTitle from '../../components/auth/PageTitle'

const TeamSettings = () => {
  return (
    <Screen>
      <Row>
        <Col md={12}>
          <PageTitle
            title='Demo Company Settings'
            subTitle={
              <Link
                to='/'
                style={{ color: '#428bca', fontSize: 14, fontWeight: 500 }}
              >
                Invite, remove, and manage members {' >'}
              </Link>
            }
          />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col md={11}>
          <Form className='dashboard_form'>
            <Form.Group>
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Organization Name'
                defaultValue='Demo Company'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox2'>
              <Form.Check
                type='checkbox'
                label='New users default to having code execution enabled on their pads by default.'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                type='checkbox'
                label='Allow users to access the question library.'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox3'>
              <Form.Check
                type='checkbox'
                label='Allow users to edit each others questions.'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Language</Form.Label>
              <select className='form-control'>
                <option>Java</option>
                <option>Python</option>
                <option>PHP</option>
                <option>JavaScript</option>
              </select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Organization Logo</Form.Label>
              <Form.Control type='file' />
              <Form.Text className='text-muted'>
                Choose a transparent PNG that looks good on a dark background.
                It will appear in your pad sessions.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <h4 className='text-secondary mt-5'>Single Sign-On (SSO)</h4>
              <h4 className='mt-4'>SSO is not configured.</h4>
              <p className='mt-4'>
                CoderPad supports SAML Single Sign-On. To enable it, provide
                your Identity Provider settings, and then customize your
                organization's CoderPad sign in settings. Once enabled, you may
                also require that users sign in via SSO.
              </p>
              <p className='mt-4'>
                <Link to='/'>Click here to configure SSO settings.</Link>
              </p>
            </Form.Group>

            <Form.Group>
              <Button variant='secondary'>Save</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Screen>
  )
}

export default TeamSettings
