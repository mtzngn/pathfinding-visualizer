import React, { useState } from "react";
import {  Button } from "react-bootstrap";

import styled from "styled-components";
import drag from "../assets/drag-starting-point.gif"
import wall from "../assets/wall.gif"

const StyledIntro = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    height: 50vh;
    width: 50vw;
    background-color: #fff;
    border: 3px solid #000;
    display: ${({close}) => close ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top{
        height: 80%;
        width: 100%;
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
    }
    .bottom{
        height: 20%;
        width: 100%;
    }



`

const Intro = () =>{
    const [close, setClose] = useState(false)

    return(
        <StyledIntro close={close}>
            <div className="top">
                <div className="container">
                    <img className="intro-gif" src={drag}></img>
                    <h5>Drag and Drop to change the position</h5>
                </div>
                <div className="container">
                    <img className="intro-gif" src={wall}></img>
                    <h5>Click or click and hold to create walls</h5>
                </div>
            </div>
            <div className="bottom">
                <Button variant="success" onClick={() => setClose(true)}>Start!</Button>
            </div>

        </StyledIntro>
    )
}

export default Intro;