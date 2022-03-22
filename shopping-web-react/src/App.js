import React, { Component } from 'react';
import './App.css';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

export class App extends Component {

  render(){
    return (
      <div className="App">
        <Navbar></Navbar>
        <h1>Buscador de imágenes</h1>
      </div>
    );
  }
}

export default App;
