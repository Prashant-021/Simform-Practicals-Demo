import React from 'react';
import Navbar from './components/Navbar';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import HtmlCss from './components/HTML and CSS/HtmlCss';
import Javascript from './components/javascript/Javascript';
import Typescript from './components/typescript/Typescript';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/htmlcss' element={<HtmlCss />} />
            <Route path='/javascript' element={<Javascript />} />
            <Route path='/typescript' element={<Typescript />} />
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
