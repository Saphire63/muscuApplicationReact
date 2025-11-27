import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/global.css"
import "./css/app.css";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import AddMachine from "./pages/AddMachine";
import MachineInfos from "./pages/MachineInfos";
import AskingAdd from "./pages/AskingAdd";
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/favorites" element ={<Favorites/>}/>
          <Route path ="/add" element ={<AddMachine/>}/>
          <Route path ="/machine/:id" element ={<MachineInfos/>}/>
          <Route path ="/askingAdd" element = {<AskingAdd/>}/>
        </Routes>
      </main>
    </div>
  );
}




export default App;
