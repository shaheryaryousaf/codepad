import React from 'react'
import { Row, Col, Button, Table, Pagination, Form } from 'react-bootstrap'

// Import Components
import Screen from '../../components/auth/Screen'
import PageTitle from '../../components/auth/PageTitle'

let active = 2
let items = []
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  )
}

const Dashboard = () => {
  return (
    <Screen>
      <Row>
        <Col md={10}>
          <PageTitle
            title='Demo Company Pads'
            subTitle="Your organization's pads appear below. You can search by pad creator or title, and filter by pad format, status or when a pad was created."
          />
        </Col>
        <Col md={2} style={{ textAlign: 'end' }}>
          <Button variant='secondary'>Create Pad</Button>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col md={12}>
          <Form className='search_form'>
            <Row className='align-items-center'>
              <Col md='5'>
                <Form.Control
                  className='mb-2'
                  id='inlineFormInput'
                  placeholder='Search Pad title or Creator'
                />
              </Col>
              <Col xs='2'>
                <Form.Check
                  type='checkbox'
                  id='autoSizingCheck'
                  className='mb-2'
                  label='Only search my pads'
                />
              </Col>

              <Col xs='2'>
                <select className='form-control'>
                  <option>Any Format</option>
                  <option>Take Home</option>
                  <option>Live</option>
                </select>
              </Col>
              <Col xs='1'>
                <select className='form-control'>
                  <option>Any Status</option>
                  <option>Started</option>
                  <option>Opened</option>
                </select>
              </Col>
              <Col xs='2'>
                <select className='form-control'>
                  <option>Created Time</option>
                  <option>Started</option>
                  <option>Opened</option>
                </select>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Table className='dashboard_table'>
            <thead>
              <tr>
                <th>Title</th>
                <th></th>
                <th>Status</th>
                <th>Creator</th>
                <th>Created</th>
                <th>Language</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Untitled Pad - XNNCJN2R</td>
                <td>Live</td>
                <td> Not Started</td>
                <td> Shaheryar Yousaf</td>
                <td> 2 days ago</td>
                <td>Java</td>
                <td>
                  <Button variant='outline-secondary' size='sm' block>
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <Pagination style={{ justifyContent: 'flex-end' }}>
            {items}
          </Pagination>
        </Col>
      </Row>
    </Screen>
  )
}

export default Dashboard
