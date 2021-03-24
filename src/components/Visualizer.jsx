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
    width: 90%;
    height: 80%;
    width: fit-content;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .node{
        width: 25px;
        height: 25px;
        border: 1px solid black
        }
    }

`

const Visualizer = () => {
    const { height, width } = useWindowDimensions();
    console.log(height)
    console.log(width)
    let nodeArr = []
    for(let i = 0; i < 50 ; i++){
        for(let j = 0; j < 46 ; j++){
            nodeArr.push(new Nodes(i,j))
        }
    }
    return(
        <StyledContainer>
            <div className="node-wrap">
        {nodeArr.map((node, i)=>{
            return(
            <div key={i} className="node" id={i}></div>         
            )
        })}
        </div>
        </StyledContainer>
    )
}

export default Visualizer;