import React, { useState, useEffect} from "react";
import './App.css';
import NavbarComponenet from "./components/Navbar"
import Visualizer from "./components/Visualizer"
import Nodes from "./components/Nodes";
import styled from "styled-components"
import arrow from "./assets/arrow-50.png"
import end from "./assets/target-50.png"

const StyledInfo = styled.div`
height: 10vh;
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
    background-color: rgba(17, 105, 142,0.4);
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

function App() {

  const [nodes, setNodes] = useState([]);
  let nodeArr = []

  
  useEffect(()=>{
      for(let i = 0; i < 31 ; i++){
          for(let j = 0; j < 48; j++){
              nodeArr.push(new Nodes(j,i, false, false, Infinity, Infinity, Infinity, null, false, false, false));
          }
      }
      nodeArr.forEach((node,i)=>{
          if(node.x === 15 && node.y === 15){
              node.start = true
          }
          if(node.x === 35 && node.y === 30){
              node.end = true;
          }
      })
      setNodes([...nodeArr])
  }, [])



  return (
    <div className="App">
      <NavbarComponenet nodes={nodes} setNodes={setNodes}/>
      <StyledInfo>
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
      </StyledInfo>
      <Visualizer nodes={nodes} setNodes={setNodes}/>
    </div>
  );
}

export default App;
