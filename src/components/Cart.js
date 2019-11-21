import React, { Component } from 'react'
import productData from '../mydata.json';

export default class Cart extends Component {
    
    render() {
        const cartItems = this.props.cartItems;
        console.log(this.props)
        return (
            <div className="row container">
                {cartItems.map((id)=>{
                    return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-3" key={productData[id].id}>
                    <div className="card">
                        <span className="discountTag bg-success text-white">{productData[id].discount} off</span>
                        <img className="card-img-top mt-2" src={productData[id].img} alt="Img not found"/>
                        <div className="card-body text-dark p-3">
                            <center><h5 className="card-title">
                                {productData[id].name}
                            </h5></center>
                            <div className="row align-items-center">
                                <div className="col-6 pl-4">
                                    <h5 className="card-text text-success">
                                        {productData[id].price}
                                    </h5>
                                    <div className="card-text text-muted">
                                        {productData[id].ram} + {productData[id].rom}
                                    </div>
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
