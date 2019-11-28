import React, { Component } from 'react';
//import productData from '../mydata.json'
import { MyButton } from './Button.js';

export default class Details extends Component {

    state = {
        msg: ""
    }

    addToCartClickHandler = () => {
        this.setState({
            msg: "item added successfully"
        })
    }

    render() {
        //const id = this.props.id;
        //const data = productData[id];
        const data = this.props.myProduct;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="card details-card mt-5 col-md-10">
                        <div className="row mt-4 align-items-center">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <div className="row">
                                    <img className="align-self-center px-4 mb-2 mt-5" src={"../" + data.img} alt="not found"></img>
                                </div>
                                <div className="row align-items-center mt-5">
                                    <div className="col-md-6">
                                        <MyButton className="btn text-white bg-primary addtocart mb-1">Buy Now</MyButton>
                                    </div>
                                    <div className="col-md-6">
                                        <MyButton className="btn text-white bg-primary addtocart"
                                            onClick={() => this.props.handleAddCart(data)}>Add to cart
                                        </MyButton>
                                    </div>
                                    <div className="col-md-12 pl-5 pt-2 text-success">
                                        {this.msg}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-0"></div>
                            <div className="col-md-6 pl-5">
                                <p className="p-1 pl-5 text-dark h2 mt-5">{data.name}</p>
                                <p className="pb-1 pl-5 text-success h4 mt-2">Price : {data.price}</p>
                                <ul className="text-muted mt-3 pl-5">
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Company : {data.company}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Ram : {data.ram}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Storage : {data.rom}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Rear Camera : {data.rearCam}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Front Camera : {data.frontCam}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Battery Capacity : {data.battery}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Screen Size : {data.screenSize}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Display Type : {data.display}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Processor : {data.processor}
                                    </li>
                                    <li className="p-1">
                                        <i className="fa fa-tag mr-3"></i>Operating Frequency : {data.frequency}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 my-5">
                                <div className="row">
                                    <p className="h6 text-muted col-md-3">Description : </p>
                                    <p className="text-muted h6 col-md-9">
                                        {data.desc1} <br /><br /> {data.desc2}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}
