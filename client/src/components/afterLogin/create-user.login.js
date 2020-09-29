import React, { Component } from 'react';
import '../cssDesign/userlogin.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

class CreatUser extends Component {

    constructor() {
        super();
        this.state = {
            id: '1',
            name: 'tangl',
            email: '@gmail.com'
        }
    }

    idChangeHandler = (e) => {
        this.setState({
            id: e.target.value
        })
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

    submitHandlers = (e) => {
        e.preventDefault();
        const userInformation = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email
        }

        axios.post('http://localhost:5000/login/user/adduser', userInformation)
            .then( () => alert(userInformation.name+' added'))
            .catch( (err) => alert('Please fillup all the field'))

    }

    render() {
        return (
            <div className="userDesign pt-3">

                <div className="userformDesign">
                    <form className=" m-2" onSubmit={this.submitHandlers}>
                        <div className="form-group">
                            <label className="text-light">User Id :</label>
                            <input type="text" className="form-control"
                                value={this.state.id}
                                onChange={this.idChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">FullName</label>
                            <input type="text" className="form-control"
                                value={this.state.name}
                                onChange={this.nameChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input type="email" className="form-control"
                                value={this.state.email}
                                onChange={this.emailChangeHandler}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="SUBMIT"
                                className="btn btn-info"
                            />
                        </div>
                    </form>
                </div>

                <div className="text-center mt-5">
                    <Link to="/showuser">
                        <button className="btn btn-dark">Show User Information</button>
                    </Link>
                    
                </div>

            </div>
        );
    }
}

export default CreatUser;