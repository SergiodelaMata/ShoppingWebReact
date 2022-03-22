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
          
        </div>
    </nav>
  )
}

export default Navbar