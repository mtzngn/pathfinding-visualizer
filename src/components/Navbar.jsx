import React, { useState } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import aStar from "../algorithms/aStar"
import dijkstra from "../algorithms/dijkstra"
import binaryTree from "../algorithms/binaryTree"
import randomMaze2 from "../algorithms/randomMaze2"

const StyledNavbar = styled.div`
width: 100%;
height: fit-content;

`

const NavbarComponenet = ({ nodes, setNodes, isRunning, setIsRunning }) => {
    const [currentSelection, setCurrentSelection] = useState("");
    const [choosed, setChoosed] = useState("");
    const [needForClear, setNeedForClear] = useState(false)

    const handleAStarSearch = (e) => {
        setCurrentSelection(e.target.attributes[0].value)
        setChoosed(" A*")
    }
    const handleDijkstra = (e) => {
        setCurrentSelection(e.target.attributes[0].value)
        setChoosed(" Dijkstra's")
    }

    const handleVisualize= async() =>{
        if(!currentSelection){
            alert("Please Pick an Algorithm");
            return;
        }
        await handleClearPath();
        setIsRunning(true);

        if(currentSelection === "aStarSearch"){
            let aStarResult = await aStar(nodes, setIsRunning);
            animate(aStarResult);
        } else if(currentSelection === "dijkstras"){
            let dijkstraResult = await dijkstra(nodes, setIsRunning);
            animate(dijkstraResult);
        }
        setNeedForClear(true)
    }
    const animate = (resultArr) => {
        for(let i = 0; i < resultArr[0].length; i++) {
            
            if(i === resultArr[0].length - 1) {
                setTimeout(()=> {
                    animateShortestPath(resultArr[1])
                }, i * 10)
            }
            setTimeout(()=>{
                const node = resultArr[0][i];
                document.getElementById(node.id).className = "node visited"
            }, i * 10)
        }
    }
    const animateShortestPath = (shortestPath) => {

        for(let i = 0; i < shortestPath.length - 1; i++) {
            setTimeout(()=>{
                document.getElementById(shortestPath[i]).className= "node closest"
            }, i * 50)
        }
    }

    const handleBinaryMaze = async() => {
        handleClearWalls();
        let mazeArr = await binaryTree([...nodes]);
        for (let i = 0; i < mazeArr.length; i++) {
            if(mazeArr[i].wall) {
                document.getElementById(mazeArr[i].id).className= "node wall"
            }
        }
    }
    const handleRandomMaze2 = async() => {
        let mazeArr = await randomMaze2([...nodes]);
        for (let i = 0; i < mazeArr.length; i++) {
            document.getElementById(mazeArr[i].id).className= "node wall"
        }
    }
    const handleClearWalls = () => {
        let newNodes = [...nodes]
        newNodes.forEach((item)=>{
            if(item.wall === true) item.wall = false;
        });
        setNodes([...newNodes])

    }
    const handleClearPath = async() => {
        if(needForClear) {
            let newNodes = [...nodes]
            newNodes.forEach((item)=>{
                item.visited = false;
                item.closestNode = false;
                item.parentNode = null;
                item.localD = Infinity;
                item.globalD = Infinity;
                item.heuristicD = Infinity;
                if(!(item.start || item.end) && !item.wall) document.getElementById(item.id).className = "node"
            });
            await setNodes([...newNodes]);
        }
    }
    const handleClearBoard = () => {
        handleClearPath();
        let newNodes = [...nodes]
        newNodes.forEach((node)=>{
            node.wall = false;
            node.start = false;
            node.end = false;
            if(node.x === 15 && node.y === 15){
                node.start = true
            }
            if(node.x === 35 && node.y === 30){
                node.end = true;
            }
        });
        setNodes([...newNodes])
    }

    return(
    <StyledNavbar >
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Pathfinder Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />             
            <Navbar.Collapse id="responsive-navbar-nav">            
                <Nav className="justify-content-between" style={{ flex: 1}}>
                    <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={handleAStarSearch} value="aStarSearch" href="#action/3.1">A<sup>*</sup> Search</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleDijkstra} value="dijkstras" href="#action/3.2">Dijkstra's ALgorithm</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Mazes & Patterns" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={handleBinaryMaze} href="#action/3.1">Binary Tree Algorithm</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleRandomMaze2} href="#action/3.2">Random Maze2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Coming Soon</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="success" id="btn" onClick={handleVisualize} disabled={isRunning}>Visualize{choosed}</Button>
                    <Nav.Link  onClick={handleClearWalls} href="#deets" disabled={isRunning}>Clear Walls</Nav.Link>
                    <Nav.Link onClick={handleClearPath} href="#deets2" disabled={isRunning}>Clear Path</Nav.Link>
                    <Nav.Link onClick={handleClearBoard} eventKey={2} href="#memes" disabled={isRunning}>Clear Board</Nav.Link>
                </Nav>

                </Navbar.Collapse>
        </Navbar>
    </StyledNavbar>
        )
}

export default NavbarComponenet;