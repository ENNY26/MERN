import React from "react";
import Nav from "./Components/Nav";
import CreatePage from "./Pages/CreatePage";
import { Route, Routes, Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
   
      <Routes>
        <Route path="/create-page" element={ <CreatePage/> }/>
        <Route path="/" element={ <HomePage/> }/>
      </Routes>
    </div>
  );
}

export default App;
