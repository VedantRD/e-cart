import React, { Component } from 'react';
import productData from '../mydata.json';


export default class HomeCarousel extends Component {
    render() {
        return (
            <div className="pl-3 py-2">
                {/* <div className="row justify-content-center mb-3"> */}
                {/* <div className=""> */}
                <div className="carousel slide" data-ride="carousel" id="mycarousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" style={{ height: '15rem', width: "15rem" }} src={productData[0].img} alt="img not found"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" style={{ height: '15rem', width: "15rem" }} src={productData[3].img} alt="img not found"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" style={{ height: '15rem', width: "15rem" }} src={productData[2].img} alt="img not found"></img>
                        </div>
                        {/* {productData.map(data => {
                                    return (
                                        <div className="carousel-item" key={data.id}>
                                            <img className="d-block img-fluid" src={data.img} alt="img not found"></img>
                                        </div>
                                    )
                                })} */}
                    </div>

                    {/* ===========  control buttons for carousel =============*/}

                    <a href="#mycarousel" className="carousel-control-prev" data-slide="prev">
                        <i className="fa fa-angle-left fa-2x text-dark" aria-hidden="true"></i>
                    </a>
                    <a href="#mycarousel" className="carousel-control-next" data-slide="next">
                        <i className="fa fa-angle-right fa-2x text-dark" aria-hidden="true"></i>
                    </a>
                </div>
                {/* </div> */}
                {/* </div> */}
            </div>
        )
    }
}
