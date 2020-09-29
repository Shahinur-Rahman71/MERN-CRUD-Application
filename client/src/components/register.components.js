import React, { Component } from 'react';
import './cssDesign/register.css';
import axios from 'axios'

class Registration extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            presentaddress: '',
            password: ''
        }
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    addressChangeHandler = (e) => {
        this.setState({
            presentaddress: e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    };


    submitHandler =(e) => {
        e.preventDefault();
        const register = {
            name: this.state.name,
            email: this.state.email,
            presentaddress: this.state.presentaddress,
            password: this.state.password
        };

        axios.post('http://localhost:5000/register/addregister', register)
            .then( (res)=> window.location = '/')
            .catch( err => alert("Invalid email or password"))

        
    }

    render() {
        return (
            <div className="regDesign  pt-5">
                This is registration page.
                <div className="formDesign">
                    <form className=" m-2" onSubmit={this.submitHandler}>

                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input type="text" className="form-control"
                                value={this.state.name}
                                onChange={this.nameChangeHandler} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email address</label>
                            <input type="email" className="form-control"
                                value={this.state.email}
                                onChange={this.emailChangeHandler} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Present Address</label>
                            <input type="text" className="form-control"
                                value={this.state.presentaddress}
                                onChange={this.addressChangeHandler}  
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
                                value="Registration"
                                className="btn btn-primary"
                            />
                        </div>

                    </form>
                </div>

            </div>


        );
    }
}

export default Registration;