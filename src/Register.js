import React, { Component } from 'react';
import fire from './config/Fire';

export default class RegisterModal extends Component {
    render() {
        return (
            <div className="container">
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
