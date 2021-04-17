import { React } from "react";
import { Navbar, Nav } from "react-bootstrap"

function Navigation() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Vincent Favorito</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;