import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nodes from "./Nodes";
import arrowImg from "../assets/arrow-50.png"
import targetImg from "../assets/target-50.png"

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
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .node{
        width: 25px;
        height: 25px;
        border: 1px solid rgba(160,160,255,0.3);
        transition: all 0s ease-in 0s;
        }

    .clicked{
        background-color: #03506f;
        animation-name: example;
        animation-duration: 0.15s;
        border: 1px solid #03506f;

    }
    .start{
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
        background-image: url(${arrowImg}) ;

    }
    .end{
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
        background-image: url(${targetImg}) ;
    }
    @keyframes example {
        from {transform: scale(0.4)}
        to {transform: scale(1.3)}
    }
    }
`

const Visualizer = () => {
    const [clicked, setClicked] = useState(false);
    let nodeArr = []
    for(let i = 0; i < 31 ; i++){
        for(let j = 0; j < 48; j++){
            nodeArr.push(new Nodes(i,j));
        }
    }

    nodeArr.forEach((node,i)=>{
        if(node.x === 15 && node.y === 15){
            node.start = true
        }
        if(node.x === 15 && node.y === 30){
            node.end = true

        }
    })

    const handleMouseDown = (e) => {
        setClicked(true);
    }
    const handleMouseUp = (e) => {
        setClicked(false);
    }
    const handleMouseOver = (e) => {
        if(clicked) {
            if(!(e.target.attributes[0].value === "node start" || e.target.attributes[0].value === "node end")){
                e.target.attributes[0].value = "node clicked";
                if(node.y === parseInt(e.target.attributes.id.value.split("-")[0]) && node.x === parseInt(e.target.attributes.id.value.split("-")[1])){
                    node.wall = true;
                }  
            }
        }
    }
    const handleClick = (e) => {
        if(!(e.target.attributes[0].value === "node start" || e.target.attributes[0].value === "node end")){
            if(e.target.attributes[0].value === "node clicked"){
                e.target.attributes[0].value = "node"
                nodeArr.forEach((node,i)=>{
                    if(node.y === parseInt(e.target.attributes.id.value.split("-")[0]) && node.x === parseInt(e.target.attributes.id.value.split("-")[1])){
                        node.wall = false;
                    }
                })
            } else {
                e.target.attributes[0].value = "node clicked";
                nodeArr.forEach((node,i)=>{
                    if(node.y === parseInt(e.target.attributes.id.value.split("-")[0]) && node.x === parseInt(e.target.attributes.id.value.split("-")[1])){
                        node.wall = true;
                    }
                })
            }
        } 
    }
    return(
        <StyledContainer clicked={clicked}>
            <div className="node-wrap">
        {nodeArr.map((node, i)=>{
            let cN;
            if (node.start === true){
                cN = "node start"
            } else if (node.end === true){
                cN = "node end"
            } else {cN = "node"}

            return(
            <div key={i} className={cN} 
            id={node.x + "-" + node.y} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp} 
            onMouseOver={handleMouseOver} 
            clicked={clicked}
            onClick={handleClick}></div>         
            )
        })}
        </div>
        </StyledContainer>
    )
}

export default Visualizer;