import React from 'react';
import styled from 'styled-components';
import algo from "../../assets/algo.gif";
import maze from "../../assets/maze.gif";

const StyledIntro2 = styled.div`
    display: flex;
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
        .intro-gif{
            width: 100%;
        }
    }
`


const Intro2 = () => {
    return (
        <StyledIntro2>

        <div className="container">
            <img className="intro-gif" alt="how to drag and drop nodes" src={algo}></img>
            <h5>Choose and algorithm to visualize</h5>
        </div>
        <div className="container">
            <img className="intro-gif" alt="how to create wall node" src={maze}></img>
            <h5>Create a maze</h5>
        </div>

        </StyledIntro2>
    )
}

export default Intro2