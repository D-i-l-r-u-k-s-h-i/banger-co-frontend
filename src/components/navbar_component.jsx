import React from 'react'
import {NavDropdown, Navbar,Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBarComponent() {
    function content(){
        return(
            <Nav className="ml-auto">
                <Nav.Item className="p-2 mb-1 text-white">{localStorage.getItem("user")}</Nav.Item>
                <NavDropdown title="&#9881; Options" id="nav-dropdown" >
                    <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
                    {localStorage.getItem("roleId") != 1?<div><LinkContainer to={{
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
                    </LinkContainer></div>:null}
                    <NavDropdown.Divider />
                    <LinkContainer onClick={() => {

                        localStorage.removeItem("@token")
                        localStorage.clear()

                    }} to={{
                        pathname: '/',
                    }}>
                        <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                {localStorage.getItem("roleId") == 1 ? <Nav.Link href='/admin' >Dashboard</Nav.Link>: "``````````````"}
            </Nav>
        )
    }

    function loginBtn(){
        return(
            <Nav className="ml-auto">
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        )
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed='top'>
                <Navbar.Brand href="/">&#127345;anger &#8523; &#8450;o</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
               {localStorage.getItem("jwt")?content():loginBtn()}
            </Navbar>
            <br /><br /><br />
        </div>
    )
}

export default NavBarComponent