import React, { Component } from 'react';
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
                </div>
            </div>
        )
    }
}
