import React, { useState, useEffect } from "react";
import {  Button } from "react-bootstrap";
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import styled from "styled-components";

const StyledIntro = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    height: 50vh;
    width: 50vw;
    display: ${({close}) => close ? 'none' : 'flex'};
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 3px solid #000;
    background-color: #fff;

    .btn-next {
        z-index: 11;
    }

`

const Intro = () =>{
    const [close, setClose] = useState(false);
    const [count, setCount] = useState(0);
    const introComponents = [
        <Intro1 close={close} />,
        <Intro2/>,
    ]
    useEffect(()=>{
        if (count === 2) {
            setClose(true)
        }
    }, [count]);

    return(
        <StyledIntro close={close}>
        {
            introComponents[count]
        }
        <Button className="btn-next" variant="success" onClick={() => setCount(count => count + 1)}>{count === 1 ? "Start" : "Next"}</Button>
        </StyledIntro>
    )
}

export default Intro;