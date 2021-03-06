import React, { Component } from 'react';
import './App.css';
import "./css/popup.css"
import JsonFile from './files/test.json';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import Title from './components/Title'
import HomeBody from './components/HomeBody';
import Form from './components/Form'
import Popup from './components/Popup';

export class App extends Component {
  state = {
    userEmail: "",
    userRole: "",
    page: "Home",
    title: "Encuentre aquí los productos que busca",
    categories: [],
    products: [],
    users: [],
    productsInBag: [],
    overlay: false,
    totalPrice: 0
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

    var categories = [];
    var products = [];
    var users = [];

    var totalPrice = localStorage.totalPrice;
    if(totalPrice === null || totalPrice === undefined)
    {
      this.setTotalPrice(0);
    }
    else
    {
      this.setTotalPrice(totalPrice);
    }

    if(userEmail === null || userEmail === undefined || userRole === null || userRole === undefined)
    {
      userEmail = "";
      userRole = "";
    }

    if( localStorage.categories !== "" && localStorage.categories !== null && localStorage.categories !== undefined
    && localStorage.products !== "" && localStorage.products !== null && localStorage.products !== undefined
    && localStorage.users !== "" && localStorage.users !== null && localStorage.users !== undefined)
    {
      categories = JSON.parse(localStorage.categories);
      products = JSON.parse(localStorage.products);
      users = JSON.parse(localStorage.users);

      var productsInBag = JSON.parse(localStorage.productsInBag);

      if(localStorage.productsInBag === null || localStorage.productsInBag === undefined)
      {
          localStorage.setItem("productsInBag", JSON.stringify([]));
      }

      this.setState({
        userEmail: userEmail,
        userRole: userRole,
        categories: categories,
        products: products,
        users: users,
        productsInBag: productsInBag
      })
    }
    else
    {
      const json = JSON.parse(JSON.stringify({JsonFile})).JsonFile;
      categories = json.categories;
      products = json.products;
      users = json.users;

      localStorage.setItem('categories', JSON.stringify(categories));
      localStorage.setItem('products', JSON.stringify(products));
      localStorage.setItem('users', JSON.stringify(users));

      localStorage.setItem('productsInBag', JSON.stringify([]));

      this.setState({
        userEmail: userEmail,
        userRole: userRole,
        categories: categories,
        products: products,
        users: users,
        productsInBag: []
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

  setProductsInBag=(productsInBag)=>{
    this.setState({
      productsInBag: productsInBag
    })
  }

  setOverlay=(overlay)=>{
    this.setState({
      overlay: overlay
    })
  }

  setTotalPrice=(totalPrice)=>{
    this.setState({
      totalPrice:totalPrice
    })
  }

  showPopUp = () => {
    var totalPrice = this.state.totalPrice;
    var overlay = this.state.overlay;
    var cleanUp = this.state.cleanUp;

    if(overlay === true)
    {
      return(
        <React.Fragment>
          <div className="overlay" id="overlay" style={{display:'flex'}}>
            <Popup productsInBag={this.state.productsInBag} setProductsInBag={this.setProductsInBag} totalPrice={totalPrice} setOverlay={this.setOverlay}></Popup>
          </div>
        </React.Fragment>
      )
    }
    else
    {
      return(
        <React.Fragment>
          <div className="overlay" id="overlay" style={{display:'none'}}>
            <Popup productsInBag={this.state.productsInBag} setProductsInBag={this.setProductsInBag} totalPrice={totalPrice} setOverlay={this.setOverlay}></Popup>
          </div>
        </React.Fragment>
      )
    }
  }

  contentShow = () => {
    if(this.state.page === "Home")
    {
      return(
        <React.Fragment>
          <React.Fragment>
            {this.showPopUp()}
          </React.Fragment>
          <HomeBody categories={this.state.categories} setCategories={this.setCategories} products={this.state.products} setProducts={this.setProducts} productsInBag={this.state.productsInBag} setProductsInBag={this.setProductsInBag} setTotalPrice={this.setTotalPrice} setOverlay={this.setOverlay}></HomeBody>
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
