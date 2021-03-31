import React from "react";
import styled from "styled-components";
import arrow from "../assets/arrow-50.png"
import end from "../assets/target-50.png"

const StyledDiv = styled.div`
height: 7vh;
width: 100%;
display: flex;
h3{
  font-size: 1.5rem;
  margin: 0;
  text-align: left;
  vertical-align: middle;
}
box-shadow: 4px 8px 8px rgba(0,0,0,0.5);
.left{
width: 35%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;}
.box{
  width: 40%;
  height: 40%;
  margin-right: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .visual{
    height: 25px;
    width: 25px;
    margin: 0 5px 0 5px;

  }
  .exp{
      height: 25px;
      width: 80%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
  }
  .start, .end{
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;
  }
  .start{
    background-image: url(${arrow});
  }
  .end{
    background-image: url(${end});
  }
  .unvisited{
    border: 1px solid rgba(160,160,255,0.3);
  }
  .visited{
    border: 1px solid rgba(255, 255, 255,0.4);
    background-color: #0eb5ed;
  }
  .shortest{
    background-color: rgb(247, 234, 0);
  }
  .wall{
    border: 1px solid rgba(160,160,255,0.3);

    background-color: #03506f;
  }
}

.right{
width: 65%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
}
`

const StyledInfo = () =>{
    return(
        <StyledDiv>
        <div className="left">
        <div className="box">
          <div className="visual start"></div>
          <div className="exp">
            <h3>Starting Node</h3>
          </div>
        </div>
        <div className="box">
          <div className="visual end"></div>
          <div className="exp">
          <h3>Target Node</h3>
          </div>
        </div>
    </div>

    <div className="right">
    <div className="box">
          <div className="visual unvisited"></div>
          <div className="exp">
          <h3>Unvisited Node</h3>
          </div>
        </div>
        <div className="box">
          <div className="visual visited"></div>
          <div className="exp">
          <h3>Visted Node</h3>

          </div>
        </div>
        <div className="box">
          <div className="visual shortest"></div>
          <div className="exp">
          <h3>Shortes Path</h3>

          </div>
        </div>
        <div className="box">
          <div className="visual wall"></div>
          <div className="exp">
          <h3>Wall Node</h3>

          </div>
        </div>
    </div> 
    </StyledDiv>
    )
}

export default StyledInfo;