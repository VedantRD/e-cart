import React, { Component } from 'react'
import fire from './config/Fire';

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

    register = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            // Handle Errors here.
            //var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ...
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
            <div className="container w-25 loginBox pt-5 pb-3">
                <h2 align="center" className="mb-3">Login</h2>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                    <input value={this.state.email} onChange={this.updateState} type="email" className="form-control" placeholder="Enter email" id="eml" name="email" />
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <input value={this.state.password} onChange={this.updateState} type="password" className="form-control" placeholder="Enter password" id="pwd" name="password" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark w-50 loginBtn mt-3 mb-2" onClick={this.login}>Login</button>
                </div>
                <div className="form-group">
                    <h5 align="center" className="mt-5">New User ? Click Here</h5>
                    <button type="submit" className="btn btn-dark w-50 loginBtn" onClick={this.register}>Register</button>
                </div>
            </div>
        )
    }
}
