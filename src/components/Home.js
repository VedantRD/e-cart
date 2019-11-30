import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';
//import Navbar from './Navbar';

export default class Home extends Component {

    render() {
        return (     /* ==== Main Return ==== */
            <div className="myHome">
                <div className="pb-5 homePageCard">

                    {/* <div className="row no-gutters justify-content-center text-center pt-2">
                        <div className="col-md-2 text-dark">Limited Time Offer</div>
                        <div className="col-md-1 text-dark">|</div>
                        <div className="col-md-2 text-dark">Discount you've never seen before</div>
                        <div className="col-md-1 text-dark">|</div>
                        <div className="col-md-2 text-dark">Smartphones Upto 40% off</div>
                        <div className="col-md-1 text-dark">|</div>
                        <div className="col-md-2 text-dark">Hurry Up ! and grab the deal</div>
                    </div> */}
                    {/* <div className="clearfix">
                        <div className="bg-secondary">
                            <h2 className="col-md-12 b">Hello</h2>
                        </div>
                    </div> */}

                    {/* <h2 className="text-center mt-5 pt-3">Hello {this.props.user_name}</h2> */}

                    {/* ======== start of carousel ========*/}
                    <div className="py-3"></div>

                    <div className="bg-dark mx-5 carouselBox">
                        <div className="row no-gutters">
                            <div className="col-md-2"></div>
                            <div className="col-md-5 pl-5 pt-1 mt-5 text-light">
                                <h3>It's Time To Ditch Your Old Phone</h3>
                                <h4 className="text-success py-1">Get Upto 40% off</h4>
                                <p>Move On With help of our Exclusive Discount</p>
                                <p>Why are you waiting for ? Hurry Up and grab the <span className="text-warning">Limited Period Offer</span></p>
                            </div>

                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <HomeCarousel></HomeCarousel>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>

                    {/* ======== End of Carousel ========= */}

                    {/* <div className="py-2">
                        <h2 className="text-center my-5">Our Specialities</h2>
                    </div> */}

                    <div className="container mt-4">
                        <div className="row card-columns mt-2">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="./4.jpg" className="card-img-top" alt="af"></img>
                                    <div className="card-body">
                                        <h2 className="card-title">Pixel Phones</h2>
                                        <p className="card-text text-success">Upto 20% off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="./1.jpg" className="card-img-top" alt="af"></img>
                                    <div className="card-body">
                                        <h2 className="card-title">iPhones</h2>
                                        <p className="card-text text-success">Upto 30% off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="./2.jpg" className="card-img-top" alt="af"></img>
                                    <div className="card-body">
                                        <h2 className="card-title">Galaxy tabs</h2>
                                        <p className="card-text text-success">upto 33% off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="./5.jpg" className="card-img-top" alt="af"></img>
                                    <div className="card-body">
                                        <h2 className="card-title">HTC notes</h2>
                                        <p className="card-text text-success">upto 40% off</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
