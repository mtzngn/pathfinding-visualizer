import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import aStar from "../algorithms/aStar"
import dijkstra from "../algorithms/dijkstra"

const StyledNavbar = styled.div`
width: 100%;
height: fit-content;

`

const NavbarComponenet = ({ nodes, setNodes }) => {
    const [aStarSearch, setAStarSearch] = useState("aStarSearch");
    const [dijkstras, setDijkstras] =useState("dijkstras")
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
        !currentSelection && alert("Please Pick an Algorithm");
        clearPath();
        if(currentSelection === "aStarSearch"){
            aStar(nodes, setNodes)
        } else if(currentSelection === "dijkstras"){
            dijkstra(nodes, setNodes)
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
    const clearPath = () => {
        let tempArr = [...nodes]
        tempArr.forEach((item)=>{
            if(item.visited === true || item.closestNode === true){
                item.visited = false;
                item.closestNode = false;
                item.parentNode = null;
                item.localD = Infinity;
                item.globalD = Infinity;
                item.heuristicD = Infinity;
            }
        });
        setNodes([...tempArr]);
    }
    const clearBoard = () => {
        clearPath();
        let tempArr = [...nodes]
        tempArr.forEach((item)=>{
            item.wall = false;
            item.start = false;
            item.end = false;
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
    const handleClearPath = () => {
        clearPath();
    }
    const handleClearBoard = () => {
        clearBoard();
    }
    return(
    <StyledNavbar >
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
            <Navbar.Brand href="#home">Pathfinder Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />             
            <Navbar.Collapse id="responsive-navbar-nav">            
                <Nav className="justify-content-between" style={{ flex: 1}}>
                    <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={handleAStarSearch} value={aStarSearch} href="#action/3.1">A<sup>*</sup> Search</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleDijkstra} value={dijkstras}href="#action/3.2">Dijkstra's ALgorithm</NavDropdown.Item>
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