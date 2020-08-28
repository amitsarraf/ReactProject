import React, { Component } from 'react';
import NavbarMenu from './NavbarMenu'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: ""
        }
    }
    login() {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((response) => {
                console.warn(response)
                localStorage.setItem('login', JSON.stringify(response))
                if (response.length > 0) {
                    console.warn(this.props.history.push("list"))
                } else {
                    alert("Please Check Username and Password")
                }

            })
        })
    }
    render() {
        return (
            <div>
                <NavbarMenu />
                <input type="text" placeholder="enter name"
                    name="user" onChange={(event) => this.setState({ name: event.target.value })} />
                <br /><br />
                <input type="password" placeholder="enter password"
                    name="passwod" onChange={(event) => this.setState({ password: event.target.value })} />
                <br /><br />
                <button onClick={() => { this.login() }}>Login</button>
            </div>
        );
    }
}

export default Login;