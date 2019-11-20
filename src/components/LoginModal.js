import React, { Component } from 'react'

export default class LoginModal extends Component {
    render() {
        return (
            <div>
                <div className="modal-dialog mt-5">
                    <div className="row modal-content mt-5">
                        <div className="modal-header py-3 px-4 text-white bg-dark">
                            <h3 className="modal-title pl-3">Login</h3>
                            <button className="close py-4 text-light" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body p-5">
                            <form className="">
                                <div className="form-group">
                                    <label for="username">Username</label>
                                    <input className="form-control" type="text" placeholder="Enter Username"></input>
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input className="form-control" type="password" placeholder="Enter Password"></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-dark" data-dismiss="modal">Cancel</button>
                            <button className="btn btn-dark ml-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
