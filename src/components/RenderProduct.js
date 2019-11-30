import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RenderProduct extends Component {
    render() {
        return (
            <div className="row mt-2">
                {this.props.prods.map((data, index) => {
                    return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-3" key={data.id}>
                        <Link onClick={() => this.props.handleDetail(data)} to={'/details/' + index} style={{ textDecoration: 'none' }} className="hoverProduct">
                            <div className="card listCard">
                                <span className="discountTag bg-success text-white">{data.discount} off</span>
                                <img className="card-img-top mt-2" src={data.img} alt="Img not found" />
                                <div className="card-body text-dark p-4">
                                    <center><h4 className="card-title">
                                        <span className="">{data.name}</span>
                                    </h4></center>
                                    <div className="row align-items-center mt-3 mb-2 justify-content-center">
                                        <div className="col-6 pr-2 pl-3">
                                            <h5 className="card-text text-success">
                                                <span className="">Rs. {data.price}</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="row align-items-center mt-3 mb-2 justify-content-center">
                                        <div className="col-md-5 col-sm-5">
                                            <div className="card-text pl-2 border rounded bg-primary text-light">
                                                <span className="mr-2">{data.rating}</span><i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-7 pl-3 col-sm-7 ">
                                            <div className="card-text text-muted">
                                                <span className="">{data.ram} + {data.rom}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                })}
            </div>
        )
    }
}
