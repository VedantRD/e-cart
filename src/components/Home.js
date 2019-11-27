import React, { Component } from 'react';
//import productData from '../mydata.json';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import HomeCarousel from './HomeCarousel';

export default class Home extends Component {

    render() {
        return (     /* ==== Main Return ==== */
            <div className="card mt-4 p-5 homePageCard">
                <h2 className="h2 text-center">Welcome to Ved Shopee</h2>

                {/* ======== start of carousel ========*/}

                <div className="container mt-4">
                    <HomeCarousel></HomeCarousel>
                </div>

                {/* ======== End of Carousel ========= */}

                <div className="mt-2">
                    <h1 className="text-center mb-5">Hello</h1>
                    <div className="container mb-4">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-2">
                                <Link to="#"><button className="btn btn-dark w-100 m-1" data-toggle="modal" data-target="#registerModal">Register</button></Link>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-dark w-100 m-1" data-toggle="modal" data-target="#loginModal">Login</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>

                    {/* ================== Code for Modal ===================== */}

                    <div className="modal ml-2" id="registerModal">
                        <RegisterModal></RegisterModal>
                    </div>
                    <div className="modal mt-5 ml-2" id="loginModal">
                        <LoginModal></LoginModal>
                    </div>

                    {/* ================== End of modal code ================== */}

                </div>
            </div>
        )
    }
}
