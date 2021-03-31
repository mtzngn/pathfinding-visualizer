import React, { useState, useEffect} from "react";
import './App.css';
import NavbarComponenet from "./components/Navbar"
import Visualizer from "./components/Visualizer"
import Nodes from "./components/Nodes";
import StyledInfo from "./components/StyledInfo"



function App() {

  const [nodes, setNodes] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

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
      <NavbarComponenet nodes={nodes} setNodes={setNodes} isRunning={isRunning} setIsRunning={setIsRunning}/>
      <StyledInfo/>
      <Visualizer nodes={nodes} setNodes={setNodes} isRunning={isRunning} setIsRunning={setIsRunning}/>
    </div>
  );
}

export default App;
