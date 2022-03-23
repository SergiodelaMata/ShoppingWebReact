import React, { Component } from 'react';
import './App.css';
import JsonFile from './files/test.json';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Title from './components/Title'

export class App extends Component {
  state = {
    user: "",
    page: "Home",
    title: "Encuentre aquí los productos que busca",
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
    this.setState({
      categories: json.categories,
      products: json.products,
      users: json.users
    })
  }

  setPage=(page)=>{
    var title = "";
    if(page === "Home")
    {
      title = "Encuentre aquí los productos que busca";
    }
    else if(page === "newCategory")
    {
      title = "Introduzca una nueva categoría";
    }
    else if(page === "newProduct")
    {
      title = "Introduzca un nuevo producto";
    }
    this.setState({
      page: page,
      title: title
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar setPage={this.setPage}></Navbar>
        <Title title={this.state.title}></Title>
      </div>
    );
  }
}

export default App;
