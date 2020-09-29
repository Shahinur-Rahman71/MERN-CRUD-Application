import React from 'react';
import { Link } from 'react-router-dom';
import './cssDesign/Home.css'

const HomePage = () => {
    return (
        <div className="App">

            <h1 className="">Developed by SR Shanto</h1>
            <Link to="/login">
                <button type="button" className="btn btn-success btnDesign mr-3">Login</button>
            </Link>
            <Link to="/register">
                <button type="button" className="btn btn-info btnDesign">Registration</button>
            </Link>

        </div>
    );
};

export default HomePage;