import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Upload from './components/Upload';
import Home from './components/Home';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='container'>
        <switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/upload' component={Upload}/>
        </switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
