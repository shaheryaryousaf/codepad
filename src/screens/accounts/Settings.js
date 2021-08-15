import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'

// Import Libraries
import { Link } from 'react-router-dom'

// Import Components
import Screen from '../../components/auth/Screen'
import PageTitle from '../../components/auth/PageTitle'

const Settings = () => {
  return (
    <Screen>
      <Row>
        <Col md={12}>
          <PageTitle title='Settings' subTitle='' />
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col md={6}>
          <Form className='dashboard_form'>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Name'
                defaultValue='Demo User'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Label</Form.Label>
              <Form.Control
                type='email'
                placeholder='Email'
                defaultValue='demo@example.com'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Link>Change Password</Link>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox2'>
              <Form.Check
                type='checkbox'
                label='Make my pads private by default.'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                type='checkbox'
                label='Enable code execution on my pads by default.'
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
              <Button variant='secondary'>Save Settings</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Screen>
  )
}

export default Settings
