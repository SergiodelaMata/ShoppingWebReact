import React, { Component } from 'react';
import './App.css';
import JsonFile from './files/test.json';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

export class App extends Component {
  state = {
    user: "",
    page: "",
    categories: [],
    products: [],
    users: []
  }

  constructor(props)
  {
    super(props);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.getData);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.getData);
  }

  getData=()=>{
    const json = JSON.parse(JSON.stringify({JsonFile})).JsonFile;
    console.log(json.categories);
    this.setState({
      categories: json.categories,
      products: json.products,
      users: json.users
    })
  }

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
