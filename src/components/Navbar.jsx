import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import aStar from "../algorithms/aStar"

const StyledNavbar = styled.div`
width: 100%;
height: fit-content;

`

const NavbarComponenet = ({ nodes, setNodes }) => {
    const [aStarSearch, setAStarSearch] = useState("aStarSearch");
    const [dijkstra, setDijkstra] =useState("dijkstras")
    const [currentSelection, setCurrentSelection] = useState("");
    const [choosed, setChoosed] = useState("")

    const handleAStarSearch = (e) => {
        setCurrentSelection(e.target.attributes[0].value)
        setChoosed(" A*")
    }
    const handleDijkstra = (e) => {
        setCurrentSelection(e.target.attributes[0].value)
        setChoosed(" Dijkstra's")
    }

    const handleVisualize= () =>{
        !currentSelection && alert("Please Pick an Algorithm")
        if(currentSelection == "aStarSearch"){
            aStar(nodes, setNodes)
        } else if(currentSelection == "dijkstras"){
            console.log("call dijkstra's func here")
        }
    }
    const handleClearWalls = () => {
        let tempArr = [...nodes]
        tempArr.forEach((item)=>{
            if(item.wall === true){
                item.wall = false;
            }
        });
        setNodes([...tempArr])

    }
    const handleClearPath = () => {
        let tempArr = [...nodes]
        tempArr.forEach((item)=>{
            if(item.visited === true || item.closestNode === true){
                item.visited = false;
                item.closestNode = false;
                item.parentNode = null;
                item.localD = Infinity;
                item.globalD = Infinity;
                item.heuristic = Infinity;
            }
        });
        setNodes([...tempArr])
    }
    const handleClearBoard = () => {
        let tempArr = [...nodes]
        tempArr.forEach((item)=>{
            item.visited = false;
            item.wall = false;
            item.start = false;
            item.end = false;
            item.closestNode = false;
            item.parentNode = null;
            item.localD = Infinity;
            item.globalD = Infinity;
            item.heuristic = Infinity;

        });
        tempArr.forEach((node,i)=>{
            if(node.x === 15 && node.y === 15){
                node.start = true
            }
            if(node.x === 35 && node.y === 30){
                node.end = true;
            }
        })
        setNodes([...tempArr])
    }
    return(
    <StyledNavbar >
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
            <Navbar.Brand href="#home">Pathfindir Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />             
            <Navbar.Collapse id="responsive-navbar-nav">            
                <Nav className="justify-content-between" style={{ flex: 1}}>
                    <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={handleAStarSearch} value={aStarSearch} href="#action/3.1">A<sup>*</sup> Search</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleDijkstra} value={dijkstra}href="#action/3.2">Dijkstra's ALgorithm</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Mazes & Patterns" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="success" id="btn" onClick={handleVisualize}>Visualize{choosed}</Button>
                    <Nav.Link  onClick={handleClearWalls}href="#deets" >Clear Walls</Nav.Link>
                    <Nav.Link onClick={handleClearPath} href="#deets2">Clear Path</Nav.Link>
                    <Nav.Link onClick={handleClearBoard} eventKey={2} href="#memes">Clear Board</Nav.Link>
                </Nav>

                </Navbar.Collapse>
        </Navbar>
    </StyledNavbar>
        )
}

export default NavbarComponenet;