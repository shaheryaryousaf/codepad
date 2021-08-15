import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'

// Import Libraries
import { LinkContainer } from 'react-router-bootstrap'

// Import Styles
import styles from './styles/Header.module.css'

// Import Images
import logoImg from '../../assets/home/svgexport-1.svg'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <section
          className='text-center p-3'
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
        <section style={{ backgroundColor: 'white' }}>
          <Container fluid>
            <Navbar expand='lg' style={{ padding: '0 0' }}>
              <LinkContainer to='/'>
                <Navbar.Brand href='#home' className={styles.navbar_brand}>
                  <Image src={logoImg} style={{ width: '150px' }} />
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse
                id='basic-navbar-nav'
                className={styles.navLinks}
              >
                <Nav className='ml-auto'>
                  <NavDropdown title='Features' active id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#'>30+ Languages</NavDropdown.Item>
                    <NavDropdown.Item href='#'>
                      Live Interviews
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#'>Take-Homes</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Drawing Mode</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Integrations</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Watch Demo</NavDropdown.Item>
                  </NavDropdown>
                  <LinkContainer to='/'>
                    <Nav.Link>Pricing</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title='Resources' active id='basic-nav-dropdown'>
                    <NavDropdown.Item href='#'>Blog</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Docs</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Customers</NavDropdown.Item>
                    <NavDropdown.Item href='#'>eBooks</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Webinars</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Data Sheets</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title='Pages' active id='basic-nav-dropdown'>
                    <LinkContainer to='/register'>
                      <NavDropdown.Item>Register</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/invite-member'>
                      <NavDropdown.Item>Invite Member</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/create-team'>
                      <NavDropdown.Item>Create Team</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/dashboard'>
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/settings'>
                      <NavDropdown.Item>My Settings</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/team-settings'>
                      <NavDropdown.Item>Team Settings</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/'>
                    <Nav.Link className={styles.candidates}>
                      Candidates
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/'>
                    <Nav.Link className={styles.free_trial}>
                      Free Trial
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </section>
      </header>
    </>
  )
}

export default Header
