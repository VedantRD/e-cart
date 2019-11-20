import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {MyButton} from './Button';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1">
                <div className="container">
                    <div className="text-light navbar-brand mr-4">Ved Shopee</div>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#mynav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <MyButton className="btn btn-light homeButton bg-dark">
                                        <i className="fa fa-home mr-2"></i><span>home</span>
                                    </MyButton>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productList" className="nav-link">
                                    <MyButton className="btn bg-dark btn-light homeButton">
                                        <i className="fa fa-tablet mr-2"></i><span>Product List</span>
                                    </MyButton>
                                </Link>
                            </li>
                        </ul>
                        <form className="form-inline ml-auto mr-3">
                            <div className="input-group">
                                <input className="form-control pl-3 pr-4" placeholder="Search Product Here"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary text-light">Search</button>
                                </div>
                            </div>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">
                                    <MyButton className="btn btn-light bg-dark">
                                        <i className="fa fa-cart-plus mr-2"></i>
                                        cart
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
