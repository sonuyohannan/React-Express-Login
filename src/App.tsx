// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from "react";
import './App.css'
import LoginPage from "./LoginPage";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Home";
import React from "react";



// eslint-disable-next-line react-refresh/only-export-components, @typescript-eslint/no-unused-vars
function  App(){
 // declare new state of variable 
 return (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage username={"sonu"} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
</React.StrictMode>



 
 );
}

export default App;