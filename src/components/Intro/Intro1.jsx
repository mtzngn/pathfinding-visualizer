import React from 'react';
import styled from 'styled-components';
import drag from "../../assets/drag-starting-point.gif";
import wall from "../../assets/wall.gif";

const StyledIntro1 = styled.div`
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

const Intro1 = () => {
    return (
        <StyledIntro1>

        <div className="container">
            <img className="intro-gif" alt="how to drag and drop nodes" src={drag}></img>
            <h5>Drag and Drop to change the position</h5>
        </div>
        <div className="container">
            <img className="intro-gif" alt="how to create wall node" src={wall}></img>
            <h5>Click or click and hold to create walls</h5>
        </div>

        </StyledIntro1>
    )
}

export default Intro1