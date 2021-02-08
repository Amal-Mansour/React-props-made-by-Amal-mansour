import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand href="#home">MY Personel Profile</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default MyNavbar;
