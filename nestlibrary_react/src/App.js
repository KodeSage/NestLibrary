import React, { useEffect, useState }  from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Upload } from './pages';


// Don't Touch the App.js file, KofMan

// Work with the Home.js file in the pages folder

//  I have set up the routing config in the App.js file


function App ()
{
  

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/upload" element={ <Upload /> } />
    </Routes>
  );
}

export default App;
