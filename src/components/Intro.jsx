import React, { useState } from "react";
import styled from "styled-components";

const StyledIntro = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    height: 50vh;
    width: 50vw;
    background-color: blue;
    border: 1px solid black;
    display: ${({close}) => close ? 'none' : ''};


`

const Intro = () =>{
    const [close, setClose] = useState(false)

    return(
        <StyledIntro close={close}>
            <button onClick={() => setClose(true)}>CLOSE INTRO</button>
        </StyledIntro>
    )
}

export default Intro;