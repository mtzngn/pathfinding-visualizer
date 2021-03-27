import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nodes from "./Nodes";
import arrowImg from "../assets/arrow-50.png";
import targetImg from "../assets/target-50.png";
import aStart from "../algorithms/aStar"

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
    .visited{
        background-color:red;

        animation-name: visitedPath;
        animation-duration: 2s;
    }
    .closest{
        background-color:yellow;
        animation-name: shortPath;
        animation-duration: 1s;

    }
    @keyframes example {
        from {transform: scale(0.4)}
        to {transform: scale(1.3)}
    }
    @keyframes visitedPath {
        from {
            transform: scale(0.3);
            border-radius: 50%;
            background-color: green;
            }
        to {
            transform: scale(1);
            border-radius: 0%;
            background-color:red;

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


    const handleMouseOver = (e) => {
        let nodeId = e.target.attributes.id.value.split("-");
        let nodeClass = e.target.attributes[0].value;

        if(clicked) {
            
            if(!(nodeClass === "node start" || nodeClass === "node end")){
                e.target.attributes[0].value = "node clicked";
                nodes.forEach((node,i)=>{
                    if(node.x === parseInt(nodeId[0]) && node.y === parseInt(nodeId[1])){
                        node.wall = true;
                    }
                })
            } 
        }
    }
    const handleClick = (e) => {
        let nodeId = e.target.attributes.id.value.split("-");
        let nodeClass = e.target.attributes[0].value;

        if(!(nodeClass === "node start" || nodeClass === "node end")){
            if(nodeClass === "node clicked"){
                e.target.attributes[0].value = "node"
                nodes.forEach((node,i)=>{
                    if(node.x === parseInt(nodeId[0]) && node.y === parseInt(nodeId[1])){
                        node.wall = false;
                    }
                })

            } else {

                e.target.attributes[0].value = "node clicked";
                nodes.forEach((node,i)=>{
                    if(node.x === parseInt(nodeId[0]) && node.y === parseInt(nodeId[1])){
                        node.wall = true;
                    }
                })
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
                        cN = "node"
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
                    onMouseDown={()=> setClicked(true)} 
                    onMouseUp={()=>  setClicked(false)} 
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