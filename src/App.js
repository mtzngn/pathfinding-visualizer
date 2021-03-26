import React, { useState, useEffect} from "react";
import './App.css';
import NavbarComponenet from "./components/Navbar"
import Visualizer from "./components/Visualizer"
import Nodes from "./components/Nodes";


function App() {

  const [nodes, setNodes] = useState([]);
  let nodeArr = []

  
  useEffect(()=>{
      for(let i = 0; i < 31 ; i++){
          for(let j = 0; j < 48; j++){
              nodeArr.push(new Nodes(j,i, false));
          }
      }
      nodeArr.forEach((node,i)=>{
          if(node.x === 15 && node.y === 15){
              node.start = true
          }
          if(node.x === 45 && node.y === 30){
              node.end = true;
              node.targetD = 0;
          }
          if(node.end === false){
            node.targetD =Math.sqrt(Math.pow((node.x - 15), 2) + Math.pow((node.y - 30),2)); 
    
        }
      })


      setNodes([...nodeArr])
  }, [])



  return (
    <div className="App">
      <NavbarComponenet nodes={nodes} setNodes={setNodes}/>
      <div className="info"><h1>info</h1></div>
      <Visualizer nodes={nodes} setNodes={setNodes}/>
    </div>
  );
}

export default App;
