import React, { Component } from 'react';
import './App.css';
import JsonFile from './files/test.json';

import bootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJS from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import $ from "jquery"
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
    this.getData = this.getData.bind(this, true);
  }

  componentDidMount() {
    window.addEventListener('load', this.getData, true);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.getData, true);
  }

  getData=()=>{
    var userEmail = sessionStorage.getItem('email');
    var userRole = sessionStorage.getItem('role');

    if(userEmail === null || userEmail === undefined || userRole === null || userRole === undefined)
    {
      userEmail = "";
      userRole = "";
    }

    if( localStorage.categories !== "" && localStorage.categories !== null && localStorage.categories !== undefined
    && localStorage.products !== "" && localStorage.products !== null && localStorage.products !== undefined
    && localStorage.users !== "" && localStorage.users !== null && localStorage.users !== undefined)
    {
      var categories = JSON.parse(localStorage.categories);
      var products = JSON.parse(localStorage.products);
      var users = JSON.parse(localStorage.users);

      if(localStorage.productsInBag === null || localStorage.productsInBag === undefined)
      {
          localStorage.setItem("productsInBag", JSON.stringify([]));
      }

      this.setState({
        userEmail: userEmail,
        userRole: userRole,
        categories: categories,
        products: products,
        users: users
      })
    }
    else
    {
      const json = JSON.parse(JSON.stringify({JsonFile})).JsonFile;
      var categories = json.categories;
      var products = json.products;
      var users = json.users;

      localStorage.setItem('categories', JSON.stringify(categories));
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.setItem('users', JSON.stringify(users));

      localStorage.setItem('productsInBag', JSON.stringify([]));

      this.setState({
        userEmail: userEmail,
        userRole: userRole,
        categories: categories,
        products: products,
        users: users
      })
    }
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
    sessionStorage.setItem("email", "");
    sessionStorage.setItem("role", "");
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

  setCategories=(categories)=>{
    this.setState({
      categories: categories
    })
  }

  setProducts=(products)=>{
    this.setState({
      products: products
    })
  }

  contentShow = () => {
    if(this.state.page === "Home")
    {
      return(
        <React.Fragment>
          <HomeBody categories={this.state.categories} setCategories={this.setCategories} products={this.state.products} setProducts={this.setProducts}></HomeBody>
        </React.Fragment>
      )
    }
    else
    {
      return(
        <React.Fragment>
          <Form page={this.state.page} setPage={this.setPage} categories={this.state.categories} setCategories={this.setCategories} products={this.state.products} setProducts={this.setProducts}></Form>
        </React.Fragment>
      )
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar page={this.state.page} setPage={this.setPage} userEmail={this.state.userEmail} userRole={this.state.userRole} users={this.state.users} setUser={this.setUser} removeUser={this.removeUser}></Navbar>
        <Title title={this.state.title}></Title>
        <React.Fragment>
            {this.contentShow()}
        </React.Fragment>
      </div>
    );
  }
}

export default App;
