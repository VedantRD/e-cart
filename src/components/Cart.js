import React, { Component } from 'react';
//import productData from '../mydata.json';

export default class Cart extends Component {
    render() {
        const cartItems = this.props.cartItems
        console.log(cartItems)
        return (
            <div className="container">
                <div className="text-dark text-center h2 pt-5 pb-4 font-weight-bold">
                    Items in the Cart
                </div>
                <div className="row container mt-4">
                    {cartItems.map((item) => {
                        //const data = productData[item]
                        const data = item;
                        return (
                            <div className="col-md-6" key={data.id}>
                                <div className="card mb-4">
                                    <div className="row container">
                                        <img className="col-md-6 col-xs-5 py-2" src={data.img} alt="img not found"></img>
                                        <div className=""></div>
                                        <div className="col-md-6 col-xs-7 pt-4 pl-5">
                                            <p>Name : {data.name}</p>
                                            <p>price : {data.price}</p>
                                            <div className="ml-5">
                                                <button className="btn bg-danger text-light mt-5 p-2"
                                                    onClick={
                                                        () => this.props.removeFromCart(item)
                                                    }>Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
