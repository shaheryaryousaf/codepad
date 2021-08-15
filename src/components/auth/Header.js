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
      <header className={styles.header} id='auth-header'>
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
                  <NavDropdown
                    title='Hello, John Doe'
                    active
                    className='dropdown-menu-right'
                    id='basic-nav-dropdown'
                  >
                    <NavDropdown.Item href='#'>Usage</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Integrations</NavDropdown.Item>
                    <NavDropdown.Item href='#'>Billing</NavDropdown.Item>
                    <LinkContainer to='/team-settings'>
                      <NavDropdown.Item>Team Settings</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item href='#' className='upgrade'>
                      Upgrade
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <LinkContainer to='/settings'>
                      <NavDropdown.Item>Settings</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item href='#'>Logout</NavDropdown.Item>
                  </NavDropdown>
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
