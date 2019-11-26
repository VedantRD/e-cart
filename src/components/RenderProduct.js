import React, { Component } from 'react'
import { MyButton } from './Button.js';
import { Link } from 'react-router-dom'

export default class RenderProduct extends Component {
    render() {
        return (
            <div className="row">
                {this.props.prods.map((data, index) => {
                    return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-3" key={data.id}>
                        <div className="card">
                            <span className="discountTag bg-success text-white">{data.discount} off</span>
                            <img className="card-img-top mt-2" src={data.img} alt="Img not found" />
                            <div className="card-body text-dark p-3">
                                <center><h5 className="card-title">
                                    {data.name}
                                </h5></center>
                                <div className="row align-items-center">
                                    <div className="col-6 pl-4">
                                        <h5 className="card-text text-success">
                                            {data.price}
                                        </h5>
                                        <div className="card-text text-muted">
                                            {data.ram} + {data.rom}
                                        </div>
                                    </div>
                                    <div className="col-6 pr-3">
                                        <Link to={'/details/' + index}>
                                            <MyButton className="btn btn-dark showmore py-1 px-2">
                                                Show More
                                                </MyButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}
