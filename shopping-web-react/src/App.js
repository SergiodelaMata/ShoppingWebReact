import React, { Component } from 'react';
import './App.css';
import JsonFile from './files/test.json';

import bootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJS from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import Title from './components/Title'
import HomeBody from './components/HomeBody';
import Form from './components/Form'

export class App extends Component {
  state = {
    userEmail: "",
    userRole: "",
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

  removeUser=()=>{
    this.setState({
      userEmail: "",
      userRole: ""
    })
  }

  setUser=(userEmail, userRole)=>{
    this.setState({
      userEmail: userEmail,
      userRole: userRole
    })
  }

  contentShow = () => {
    if(this.state.page === "Home")
    {
      return(
        <React.Fragment>
          <HomeBody></HomeBody>
        </React.Fragment>
      )
    }
    else
    {
      return(
        <React.Fragment>
          <Form></Form>
        </React.Fragment>
      )
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar setPage={this.setPage} userEmail={this.state.userEmail} userRole={this.state.userRole} setUser={this.setUser} removeUser={this.removeUser}></Navbar>
        <Title title={this.state.title}></Title>
        <React.Fragment>
            {this.contentShow()}
        </React.Fragment>
      </div>
    );
  }
}

export default App;
