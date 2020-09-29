import React, { Component } from 'react';
import './cssDesign/Login.css';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: 'shanto@gmail.com',
            password: '123',
            allusers: [],
            message: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/register')
            .then(res => {
                this.setState({ allusers: res.data })
            })
            .catch(err => console.log(err));

    }

    usernameChangeHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitHandlers = (e) => {
        e.preventDefault();
        const login = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(this.state.allusers);
        var result, y =0;
         for ( result of this.state.allusers) {

            if (result.email === login.username && result.password === login.password) {
                // console.log(result.password);
                // window.location = '/userlogin'
                y = 1;
                break;
            } 
        }

        if(y === 1) window.location = '/userlogin';
        else alert('Invalid username or password');

        // window.location = '/userlogin'
    }

    render() {
        return (
            <div className="loginDesign  pt-5">
                This is Login page.
                <div className="formDesigns">

                    <form className=" m-2" onSubmit={this.submitHandlers}>
                        <div className="form-group">
                            <label className="text-light">User Name</label>
                            <input type="email" className="form-control"
                                value={this.state.username}
                                onChange={this.usernameChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input type="password" className="form-control"
                                value={this.state.password}
                                onChange={this.passwordChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>

                </div>
            </div>


        );
    }
}

export default Login;