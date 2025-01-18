import React from "react";
import Nav from "./Components/Nav";
import CreatePage from "./Pages/CreatePage";
import { Route, Routes, Router } from "react-router-dom";
function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <Nav/>
      <Routes>
        <Route path="/create-page" element={ <CreatePage/> }/>
      </Routes>
    </div>
  );
}

export default App;
