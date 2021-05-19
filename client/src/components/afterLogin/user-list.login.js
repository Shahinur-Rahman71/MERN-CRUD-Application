import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Showinformation = (props) => (

    <tr>
        <td>{props.allinfo.id}</td>
        <td>{props.allinfo.name}</td>
        <td>{props.allinfo.email}</td>
        <td>
            <Link to={"/edituser/"+props.allinfo._id}>Update</Link> | <a href="#" onClick={()=> props.deleteHander(props.allinfo._id)}>Delete</a>
        </td>
    </tr>
)

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            alldata: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/login/user')
            .then(res => {
                this.setState({ alldata: res.data })
            })
            .catch(err => console.log(err))
    }

    deleteHander = (id) => {
 
        axios.delete('http://localhost:5000/login/user/'+id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            alldata: this.state.alldata.filter(element => element._id !== id)
        });
        console.log(this.state.alldata)
 
    }

    userList= () =>{
        return this.state.alldata.map(res => (
            <Showinformation key={res._id} allinfo={res} deleteHander={this.deleteHander}/>
        ))
    }

    render() {
        return (
            <div className="userDesign">
                <table className="table table-striped table-dark">

                    <thead className="thead-light">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                            <th>
                                <Link to="/userlogin">
                                    <button className="btn btn-dark">create info</button>
                                </Link>
                            </th>
                            
                        </tr>
                    </thead>
                        
                    <tbody >
                        {this.userList()}
                    </tbody>

                </table>
                
            </div>
        );
    }
}

export default UserList;