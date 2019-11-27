import React, { Component } from 'react'
import fire from './config/Fire';
import {Link} from 'react-router-dom';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    updateState = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            [evt.target.name]: evt.target.value
        });
    }

    login = (e) => {

        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    render() {
        return (
            <div className="container w-25 loginBox py-5">
                
                <span align="center" className="h4 mx-5">New User ?</span>
                <Link to="/cart">
                    <button className="btn btn-dark">Register Here</button>
                </Link>
                
                <h2 align="center" className="mb-5">Login</h2>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <input value={this.state.email} onChange={this.updateState} type="email" className="form-control" placeholder="Enter email" id="eml" name="email" />
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <input value={this.state.password} onChange={this.updateState} type="password" className="form-control" placeholder="Enter password" id="pwd" name="password" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark w-50 loginBtn mt-4" onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}
