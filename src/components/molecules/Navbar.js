import React from 'react'
import { Navbar,  Nav, Container } from 'react-bootstrap'
import AllButton from '../atoms/AllButton'

const Navba = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src="https://open.cruip.com/static/media/logo.2810a88b.svg" alt="img"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link className='text-light'>Documentation</Nav.Link>
                        <Nav.Link href="#link">
                           <AllButton variant="primary">
                               <h4>Sign up</h4>
                           </AllButton>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navba