import React from 'react'
import {NavDropdown, Navbar,Nav} from 'react-bootstrap';

function NavBarComponent() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Banger & Co</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                <i className="fas fa-user-cog"></i>
                <NavDropdown title="Options" id="nav-dropdown" >
                        <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Current Bookings</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Past Bookings</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <br />
        </div>
    )
}

export default NavBarComponent
