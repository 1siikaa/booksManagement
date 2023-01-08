import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header/Header";
import LogIn from "./components/LogIn/LogIn"
import Body from './components/Body/Body'


import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
<Route path='/login' element={<LogIn/>}></Route>

          
        </Route>
       
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

const body = ReactDOM.createRoot(document.getElementById("body"));
body.render(
  <>
  <Body/>
  </>
);
