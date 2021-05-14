import React, { useState } from "react";
import styled from "styled-components";
import arrowImg from "../assets/arrow-50.png";
import targetImg from "../assets/target-50.png";
import Intro from "./Intro/Intro";

const StyledContainer = styled.div`
width: 100%;
height : 85vh;
position:absolute;
display: flex;
justify-content:center;
align-items: flex-start;

.node-wrap{
    width: 1200px;
    height: 775px;
    @media(min-width: 1024px){
        width: 960px;
        height: 620px;
        transform: scale(0.9);
    }
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .node{
        width: 25px;
        height: 25px;
        @media(min-width: 1024px){
            width: 20px;
            height: 20px;
        }
        border: 1px solid rgba(160,160,255,0.2);
        transition: all 0s ease-in 0s;
        }

    .wall{
        background-color: #03506f;
        animation-name: example;
        animation-duration: 0.2s;
        animation-timing-function: ease-in-out;
        border: none;

    }
    .start, .end{
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
        animation-name: example;
        animation-duration: 0.3s;
    }
    .start{
        background-image: url(${arrowImg});
    }
    .end{
        background-image: url(${targetImg});
    }
    .visited{
        background-color:#0eb5ed;
        animation-name: visitedPath;
        animation-duration: 1.3s;
        border-color: rgba(255, 255, 255,0.4);
        animation-timing-function: ease-in-out;

    }
    .closest{
        background-color:rgb(247, 234, 0);
        animation-name: shortPath;
        animation-duration: 1s;
        border: none;
    }
    @keyframes example {
        from {transform: scale(0.4)}
        to {transform: scale(1.3)}
    }
    @keyframes visitedPath {
        0%{
            transform: scale(0.5);
            border-radius: 50%;
            background-color: #28527a;
            }
        75%{
            transform: scale(1.2);
            border-radius: 25%;
            background-color: #3ce9bd;
        }
        100%{
            transform: scale(1);
            border-radius: 0%;
            background-color: #0eb5ed;
        }


    }
    @keyframes shortPath {
        0%{
            transform: scale(0.5);
            border-radius: 50%;
            }
        75%{
            transform: scale(1.2);
            border-radius: 25%;
        }
        100%{
            transform: scale(1);
            border-radius: 0%;
        }

    }
}
`

const Visualizer = ({ nodes, setNodes, isRunning, setIsRunning}) => {
    const [clicked, setClicked] = useState(false);
    const [moveStart, setMoveStart] = useState(false);
    const [moveEnd, setMoveEnd] = useState(false);

    const handleMouseOver = (e) => {
        let newNode = [...nodes];
        let node =  getCurrentNode(e, [...nodes]);
        if(clicked) {
            if (!node.start || !node.end) {
                node.wall = true;
                e.target.className = "node wall";
                setNodes([...newNode])
            };
        }
    }
    const handleClick = (e) => {
        let newNode = [...nodes]
        let node =  getCurrentNode(e, [...nodes])
        if (!node.start || !node.end) {
            node.wall = !node.wall
            e.target.className = "node wall";
            setNodes([...newNode])
        };
    }

    const handleMouseDown = (e) => {
        if (e.target.className === "node start") {
            setMoveStart(true)
        }else if (e.target.className === "node end") {
            setMoveEnd(true)
        } else {
            setClicked(true)
        }
    }
    const handleMouseUp = (e) => {
        if (e.target.className === "node start") {
            setMoveStart(false)
        }else if (e.target.className === "node end") {
            setMoveEnd(false)
        } else {
            setClicked(false)
        }

    }
    const handleOnMouseEnter = (e) =>{
        let newNodes = [...nodes]
        let node =  getCurrentNode(e, [...nodes])
        if (moveStart) node.start = true;
        if (moveEnd) node.end = true;
        if (moveStart || moveEnd) setNodes([...newNodes])
    }
    const handleOnMouseLeave = (e) => {
        let newNodes = [...nodes]
        let node =  getCurrentNode(e, [...nodes])
        if (moveStart) node.start = false;
        if (moveEnd) node.end = false;
        if (moveStart || moveEnd) setNodes([...newNodes])

    }
    const getCurrentNode = (e, newNodes) => {
        let node = newNodes.find(n => {
            return n.id === e.target.id.toString()
        });
        return node;
    }

    return(
        <StyledContainer clicked={clicked}>
            <Intro/>
            <div className="node-wrap">
                {nodes.map((node, i)=>{
                    let cN;
                    if (node.start === true){
                        cN = "node start"
                    } else if (node.end === true){
                        cN = "node end"
                    } else if (node.wall){
                        cN = "node wall"
                    } else {
                        cN = "node"
                    }
                  
                    return(
                    <div key={i} className={cN} 
                    id={node.x + "-" + node.y} 
                    onMouseDown={handleMouseDown} 
                    onMouseUp={handleMouseUp} 
                    onMouseOver={handleMouseOver} 
                    onMouseEnter={ handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                    clicked={clicked.toString()}
                    onClick={handleClick}></div>         
                    )
                })}
            </div>
        </StyledContainer>
    )

}

export default Visualizer;