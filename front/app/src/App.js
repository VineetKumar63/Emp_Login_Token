import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Registration from "./registration";
import Login from './login';


function App() {
  return(
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App