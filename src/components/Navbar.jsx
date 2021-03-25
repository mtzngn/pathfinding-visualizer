import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import aStar from "../algorithms/aStar"

const StyledNavbar = styled.div`
width: 100%;
height: fit-content;

`

const NavbarComponenet = ({ nodes }) => {

    const handleVisualize= () =>{
        aStar(nodes)
    }
    return(
    <StyledNavbar>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
            <Navbar.Brand href="#home">Pathfindir Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />             
            <Navbar.Collapse id="responsive-navbar-nav">            
                <Nav className="justify-content-between" style={{ flex: 1}}>
                    <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">A<sup>*</sup> Search</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Mazes & Patterns" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="success" id="btn" onClick={handleVisualize}>Visualize</Button>
                    <Nav.Link href="#deets" >Clear Walls</Nav.Link>
                    <Nav.Link href="#deets2">Clear Path</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">Clear Board</Nav.Link>
                </Nav>

                </Navbar.Collapse>
        </Navbar>
    </StyledNavbar>
        )
}

export default NavbarComponenet;