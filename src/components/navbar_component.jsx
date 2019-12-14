import React from 'react'
import {Button, Form, Navbar,Nav,FormControl} from 'react-bootstrap';

function NavBarComponent() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Banger & Co</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Bookings</Nav.Link>
                    <Nav.Link href="#pricing">Options</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
            <br />
        </div>
    )
}

export default NavBarComponent
