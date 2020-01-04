import React from 'react'
import {NavDropdown, Navbar,Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBarComponent() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/custdash">&#127345;anger &#8523; &#8450;o</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/custdash">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                <i className="fas fa-user-cog"></i>
                    <NavDropdown title="Options" id="nav-dropdown" >
                        <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
                        <LinkContainer to={{
                            pathname: '/bookings1',
                            props: {
                                optionSelected: "CURRENT"
                            }
                        }}>
                            <NavDropdown.Item eventKey="4.2">Current Bookings</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={{
                            pathname: '/bookings2',
                            props: {
                                optionSelected: "PAST"
                            }
                        }}>
                            <NavDropdown.Item eventKey="4.3">Past Bookings</NavDropdown.Item>
                        </LinkContainer>
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