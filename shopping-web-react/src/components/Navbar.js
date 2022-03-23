import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import Logo from '../img/logo.jpg'

export default class Navbar extends Component {

    obtainPage = namePage => () => {
        this.props.setPage(namePage);
    }

    adminSections = () => {
        var userEmail = this.props.userEmail;
        var userRole = this.props.userRole;

        //Se comprueba si se ha iniciado sesión y el usuario que ha iniciado tiene rol de administrador para añadir las secciones de adminstrador a la barra de navegación
        if(userEmail !== "" && userEmail !== null && userEmail !== undefined && userRole === "admin")
        {
            return (
                <React.Fragment>
                    <li id="newCategory" className="nav-item" style={{textAlign:'center'}}>
                        <a id="newCategoryA" className="nav-link" onClick={this.obtainPage('newCategory')}>Nueva categoría</a>
                    </li>
                    <li id="newProduct" className="nav-item" style={{textAlign:'center'}}>
                        <a id="newProductA" className="nav-link" onClick={this.obtainPage('newCategory')}>Nuevo producto</a>
                    </li>
                </React.Fragment>
            )
        }
        else
        {
            return null
        }
    }

    statusLogin = () => {
        var userEmail = this.props.userEmail;
        //Si no se ha iniciado sesión, se establece un botón con un menú dropdown para poder iniciar sesión
        if(userEmail === "" || userEmail === null || userEmail === undefined)
        {
            return(
                <React.Fragment>
                    <DropdownButton  align={"start"} id="login" variant='secondary' menuVariant='dark' title='Login'>
                        <form className='form'>
                            <div className='form-group container'>
                                <input id='emailInput' className='form-control form-control-sm' placeholder='Email' type={"text"} required></input>
                            </div>
                            <div className='form-group container'>
                                <input id='passwordInput' className='form-control form-control-sm' placeholder='Contraseña' type={"password"} required></input>
                            </div>
                            <div className='form-group container'>
                                <button className='btn btn-primary btn-block' type='button' style={{marginTop:'1em', width: '100%'}}>Login</button>
                            </div>
                        </form>
                    </DropdownButton>
                    
                </React.Fragment>
            )
        }
        //Si se ha iniciado sesión, se establece un botón para poder cerrar sesión
        else
        {
            return(
                <React.Fragment>
                    <li>
                        <button id="logout" type="button" className='btn btn-outline-secondary' style={{textAlign:'center'}} onClick={this.logout()}>Logout</button>
                    </li>
                </React.Fragment>
            )
        }
    }

    logout = () => {
        this.props.removeUser();
    }

    render() {
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
                        <a className="nav-link" onClick={this.obtainPage('Home')}>Home</a>
                        </li>
                        <React.Fragment>
                            {this.adminSections()}
                        </React.Fragment>
                    </ul>
                    <ul id="loginlogout" className="nav navbar-nav flex-row justify-content-center ml-auto">
                        <React.Fragment>
                            {this.statusLogin()}
                        </React.Fragment>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}
