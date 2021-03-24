import './App.css';
import NavbarComponenet from "./components/Navbar"
import Visualizer from "./components/Visualizer"

function App() {
  return (
    <div className="App">
      <NavbarComponenet/>
      <div className="info"><h1>info</h1></div>
      <Visualizer/>
    </div>
  );
}

export default App;
