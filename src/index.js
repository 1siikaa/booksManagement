import React from "react";
import ReactDOM from "react-dom/client";

import Main from "./components/Main/Main";
import LogIn from "./components/LogIn/LogIn"
import Authors from './components/Authors/Author'
import Books from './components/Books/Book'


import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main/>}></Route>
<Route path='login' element={<LogIn/>}></Route>
<Route  path='/authors' element={<Authors/>}></Route>
<Route path='books' element={<Books/>}></Route>

          
        
       
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


