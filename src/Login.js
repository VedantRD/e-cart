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
            <div className="container loginContainer">
                <div className="row justify-content-around align-items-lg-center" style={{ height: '90vh' }}>
                    <div className="col-md-4 loginBox pb-4 pt-5 card">
                        <h2 align="center" className="mb-5">Login</h2>
                        <div className="form-group mx-3">
                            <label className="control-label" htmlFor="email">Email:</label>
                            <input value={this.state.email} onChange={this.updateState} type="email" className="form-control" placeholder="Enter email" id="eml" name="email"/>
                        </div>
                        <div className="form-group mx-3">
                            <label className="control-label" htmlFor="pwd">Password:</label>
                            <input value={this.state.password} onChange={this.updateState} type="password" className="form-control" placeholder="Enter password" id="pwd" name="password" />
                        </div>
                        <div className="form-group">
                            <div className="row justify-content-around">
                                <button type="submit" className="btn btn-dark mt-4 mb-2 w-50" onClick={this.login}>
                                    <i class="fa fa-sign-in mr-2" aria-hidden="true"></i><span>Login</span>
                                </button>
                            </div>
                        </div>
                        <div className="form-group">
                            <h5 align="center" className="mt-5">New User ? Click Here</h5>
                            <div className="row justify-content-around">
                                <button type="submit" className="btn btn-dark w-50" onClick={this.register}><i class="fa fa-user-plus mr-2" aria-hidden="true"></i><span>Register</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
