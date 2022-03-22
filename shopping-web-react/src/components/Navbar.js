import React from 'react'
import Logo from '../img/logo.jpg'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="home.html">
                <img src={Logo} width="30" height="30" className="d-inline-block align-top rounded-pill" alt="Logo de la página web" title="Logo de la página web de Gaming Shopping"/>
                Gaming Shopping
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse navbar-div" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto">
                <li className="nav-item" style={{textAlign:'center'}} >
                  <a className="nav-link active" href="home.html">Home</a>
                </li>
                <li id="newCategory" className="nav-item" style={{textAlign:'center'}}>
                </li>
                <li id="newProduct" className="nav-item" style={{textAlign:'center'}}>
                </li>
              </ul>
              <ul id="loginlogout" className="nav navbar-nav flex-row justify-content-center ml-auto">
                
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar