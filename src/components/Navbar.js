import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyButton } from './Button';
import fire from '../config/Fire';


class Navbar extends Component {
    state = {}

    logout = () => {
        fire.auth().signOut()
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-1">
                <div className="container">
                    <div className="text-light mr-4 navbar-brand">
                        <img src="Kasper.ico" alt="img not found" className="myLogo mr-1"></img>
                        <span>Ved Shopee</span>
                    </div>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mynav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <MyButton className="btn btn-primary homeButton">
                                        <i className="fa fa-home mr-2"></i><span>home</span>
                                    </MyButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productList" className="nav-link">
                                    <MyButton className="btn btn-primary homeButton">
                                        <i className="fa fa-tablet mr-2"></i><span>Product List</span>
                                    </MyButton>
                                </Link>
                            </li>
                        </ul>
                        {/* <form className="form-inline ml-auto mr-3">
                            <div className="input-group">
                                <input className="form-control pl-3 pr-4" placeholder="Search Product Here"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary text-light">Search</button>
                                </div>
                            </div>
                        </form> */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mr-5">
                                <Link to="/cart" className="nav-link">
                                    <MyButton className="btn btn-primary">
                                        <i className="fa fa-cart-plus mr-2"></i>
                                        your cart
                                    </MyButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <MyButton className="btn btn-primary myLogOut" onClick={this.logout}>
                                        {this.props.name}<i className="fa fa-sign-out ml-2"></i>
                                    </MyButton>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
