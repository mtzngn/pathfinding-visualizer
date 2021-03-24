import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nodes from "../utils";
import useWindowDimensions from "../utils/useWindowDimensions"



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
        border: 1px solid #aaaaaa;
        transition: all 0s ease 0s;
        }
    .node:hover{

    }
    .clicked{
        background-color: #03506f;
        animation-name: example;
        animation-duration: 0.15s;
        border: 1px solid #03506f;

    }
    @keyframes example {
        from {transform: scale(0.1)}
        to {transform: scale(1.3)}
    }

    }

`

const Visualizer = () => {
    const { height, width } = useWindowDimensions();
    const [clicked, setClicked] = useState(false);
    let nodeArr = []
    for(let i = 0; i < 31 ; i++){
        for(let j = 0; j < 48; j++){
            nodeArr.push(new Nodes(i,j));
        }
    }
    const handleMouseDown = (e) => {
        setClicked(true);
    }
    const handleMouseUp = (e) => {
        setClicked(false);

    }
    const handleMouseOver = (e) => {
        if(clicked) {e.target.attributes[0].value = "node clicked"};
    }
    const handleClick = (e) => {
        e.target.attributes[0].value = "node clicked"
    }
    return(
        <StyledContainer clicked={clicked}>
            <div className="node-wrap">
        {nodeArr.map((node, i)=>{
            return(
            <div key={i} className="node" id={i} 
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