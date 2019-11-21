import React, { Component } from 'react'

export default class RegisterModal extends Component {
    render() {
        return (
            <div>
                <div className="modal-dialog">
                    <div className="row modal-content">
                        <div className="modal-header py-3 px-4 text-white bg-dark">
                            <h3 className="modal-title pl-3">Register</h3>
                            <button className="close py-4 text-light" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body p-4 px-5">
                            <form className="">
                                <div className="form-group">
                                    <label htmlFor="username">First Name</label>
                                    <input className="form-control" type="text" placeholder="Enter Username"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Last Name</label>
                                    <input className="form-control" type="text" placeholder="Enter Lastname"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Gender</label>
                                    <div className="ml-5 pl-5">
                                        <input className="mr-2" type="radio" name="gender"/>
                                        <span className="mr-5">Male</span>
                                        <input className="mr-2" type="radio" name="gender"/>
                                        <span>Female</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Address</label>
                                    <textarea className="form-control" placeholder="Enter Address"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="mb-2">Set Password</label>
                                    <input className="form-control mb-2" type="password" placeholder="Enter Password"></input>
                                    <input className="form-control" type="password" placeholder="Confirm Password"></input>
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
