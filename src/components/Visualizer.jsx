import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arrowImg from "../assets/arrow-50.png";
import targetImg from "../assets/target-50.png";

const StyledContainer = styled.div`
width: 100%;
height : 88vh;
position:absolute;
display: flex;
justify-content:center;
align-items: center;

.node-wrap{
    width: 1200px;
    height: 775px;
    @media(max-width: 1024px){
        width: 960px;
        height: 620px;
    }
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .node{
        width: 25px;
        height: 25px;
        @media(max-width: 1024px){
            width: 20px;
            height: 20px;
        }
        border: 1px solid rgba(160,160,255,0.3);
        transition: all 0s ease-in 0s;
        }

    .wall{
        background-color: #03506f;
        animation-name: example;
        animation-duration: 0.15s;
        border: 1px solid #03506f;

    }
    .start, .end{
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
        animation-name: example;
        animation-duration: 0.5s;
    }
    .start{
        background-image: url(${arrowImg});
    }
    .end{
        background-image: url(${targetImg});
    }
    .visited{
        background-color:rgba(17, 105, 142,0.4);
        animation-name: visitedPath;
        animation-duration: 2s;
        border-color: rgba(255, 255, 255,0.4);
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
        from {
            transform: scale(0.5);
            border-radius: 50%;
            background-color: #16c79a;
        }
        to {
            transform: scale(1);
            border-radius: 0%;
            background-color:rgba(17, 105, 142,0.4);
        }
    }
    @keyframes shortPath {
        from {
            transform: scale(0.3);
            border-radius: 50%
            }
        to {
            transform: scale(1);
            border-radius: 0%
        }
    }
}
`

const Visualizer = ({ nodes, setNodes}) => {
    const [clicked, setClicked] = useState(false);
    const [moveStart, setMoveStart] = useState(false);
    const [moveEnd, setMoveEnd] = useState(false);

    const handleMouseOver = (e) => {
        let nodeId = e.target.attributes.id.value.split("-");
        let nodeClass = e.target.attributes[0].value;
        let tempArr = [...nodes];

        if(clicked) {
            
            if(!(nodeClass === "node start" || nodeClass === "node end")){
                tempArr.forEach((node,i)=>{
                    if(node.x === parseInt(nodeId[0]) && node.y === parseInt(nodeId[1])){
                        node.wall = true;
                    }
                })
                setNodes([...tempArr])
            } 
        } 
    }
    const handleClick = (e) => {
        let nodeId = e.target.attributes.id.value.split("-");
        let nodeClass = e.target.attributes[0].value;
        let tempArr = [...nodes];

        if(!(nodeClass === "node start" || nodeClass === "node end")){
            if(nodeClass === "node wall"){
                tempArr.forEach((node,i)=>{
                    if(node.x === parseInt(nodeId[0]) && node.y === parseInt(nodeId[1])){
                        node.wall = false;
                    }
                })
            } else {
                tempArr.forEach((node,i)=>{
                    if(node.x === parseInt(nodeId[0]) && node.y === parseInt(nodeId[1])){
                        node.wall = true;
                    }
                })
            }
            setNodes([...tempArr])
        } 
    }

    const handleMouseDown = (e) => {
        let tempArr = [...nodes];

        if(e.target.attributes[0].value === "node start"){
            tempArr.forEach((item)=>{
                if(item.start === true){
                    item.start = false
                }
            })
            setMoveStart(true)
        } else if(e.target.attributes[0].value === "node end"){
            tempArr.forEach((item)=>{
                if(item.end === true){
                    item.end = false
                }
            })
            setMoveEnd(true)
        } else {
            setClicked(true)
        }
        setNodes([...tempArr])

    }
    const handleMouseUp = (e) => {
        let tempArr = [...nodes];
        let nodeId = e.target.attributes.id.value.split("-");

        if(moveStart){
            e.target.attributes[0].value = "node start"
            setMoveStart(false)
            tempArr.forEach((item)=>{
                if(item.x === parseInt(nodeId[0]) && item.y === parseInt(nodeId[1])){
                    item.start = true;
                    item.wall = false;
                }
            })
        } else if(moveEnd) {
            e.target.attributes[0].value = "node end"
            setMoveEnd(false)
            tempArr.forEach((item)=>{
                if(item.x === parseInt(nodeId[0]) && item.y === parseInt(nodeId[1])){
                    item.end = true;
                    item.wall = false;

                }
            })
        } else {
            setClicked(false)
        }
        setNodes([...tempArr])
    }
    const handleOnMouseEnter = (e) =>{
        let targetValue = e.target.attributes[0].value

        if(moveStart){
            if(targetValue === "node wall"){
                e.target.attributes[0].value = "node start oldWall"
            } else {
                e.target.attributes[0].value = "node start"
            }
        }
        if(moveEnd){
            if(targetValue === "node wall"){
                e.target.attributes[0].value = "node end oldWall"
            } else {
                e.target.attributes[0].value = "node end"
            }
        }
    }
    const handleOnMouseLeave = (e) => {
        let targetValue = e.target.attributes[0].value
        if(moveStart){
            if(targetValue === "node start"){
                e.target.attributes[0].value = "node"
            } else if(targetValue === "node start oldWall"){
                e.target.attributes[0].value = "node wall"
            }
        }
        if(moveEnd){
            if(targetValue === "node end"){
                e.target.attributes[0].value = "node"
            } else if(targetValue === "node end oldWall"){
                e.target.attributes[0].value = "node wall"
            }
        }
    }

    return(
        <StyledContainer clicked={clicked}>
            <div className="node-wrap">
                {nodes.map((node, i)=>{
                    let cN;
                    if (node.start === true){
                        cN = "node start"
                    } else if (node.end === true){
                        cN = "node end"
                    } else if(node.wall === true) {
                        cN = "node wall"
                    } else if(node.closestNode === true){
                        cN= "node closest"
                    } else if(node.visited === true){
                        cN = "node visited"
                    }  else {
                        cN= "node"
                    }
                  
                    return(
                    <div key={i} className={cN} 
                    id={node.x + "-" + node.y} 
                    onMouseDown={handleMouseDown} 
                    onMouseUp={handleMouseUp} 
                    onMouseOver={handleMouseOver} 
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                    clicked={clicked}
                    onClick={handleClick}></div>         
                    )
                })}
        </div>
        </StyledContainer>
    )
}

export default Visualizer;