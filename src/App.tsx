import React from 'react';
import './App.css';

import Home from './pages/Home';
import Add from './pages/Add'
import UpdateMain from './pages/components/UpdateMain';
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Add' element= {<Add />}></Route>
      <Route path='/Update/:id' element={<UpdateMain />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
