import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/esm/DropdownButton';
import "../css/dropdown.css"
import $ from "jquery"

export default class FormLogin extends Component {
    refEmail = React.createRef();
    refPassword = React.createRef();
    constructor(props)
    {
      super(props);
      this.submitData = this.submitData.bind(this);
    }

    state = {
        formFlag: false
    }

    loginSubmit = (e) => {
        e.preventDefault();

        var inputEmail = this.refEmail.current.value;
        var inputPassword = this.refPassword.current.value;
        var users = this.props.users;
        
        const user = users.filter(users => users.email === inputEmail);
        console.log(user);

        //Comprueba si se ha introducido un usuario existente en el listado de usuarios y si no es así, avisa al usuario
        if(user.length === 0)
        {
            alert("El usuario no existe. Por favor, introduzca sus datos de usuario de inicio de sesión correctamente.");
        }
        else
        {
            //Comprueba si la contraseña es correcta para el usuario introducido y si es así, inicia sesión
            if(user[0].password === inputPassword)
            {
                sessionStorage.setItem('email', inputEmail);
                sessionStorage.setItem('role', user[0].role);
                this.submitData();
            }
            //Comprueba si la contraseña es correcta para el usuario introducido y si no es así, avisa al usuario
            else
            {
                alert("Su contraseña es incorrecta. Por favor, introduzca correctamente su contraseña.");
            }
        }
    }

    submitData = () => {
        var userEmail = sessionStorage.email;
        var userRole = sessionStorage.role;
        this.props.setUser(userEmail, userRole);
    }

    render() {
        return (
            <DropdownButton  align={"start"} id="login" variant='secondary' menuVariant='dark' title='Login'>
                <form id='dropdown-menu' className='form' onSubmit={this.loginSubmit}>
                    <div className='form-group container'>
                        <input ref={this.refEmail} id='emailInput' className='form-control form-control-sm' placeholder='Email' type={"text"} required></input>
                    </div>
                    <div className='form-group container'>
                        <input ref={this.refPassword} id='passwordInput' className='form-control form-control-sm' placeholder='Contraseña' type={"password"} required></input>
                    </div>
                    <div className='form-group container'>
                        <button className='btn btn-primary btn-block' type='submit' style={{marginTop:'1em', width: '100%'}}>Login</button>
                    </div>
                </form>
            </DropdownButton>
        )
    }
}
