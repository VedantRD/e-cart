import React, { Component } from 'react';
import productData from '../mydata.json';
import RenderProduct from './RenderProduct.js';
//import Product from './Product';
//import Details from './Details';

class ProductList extends Component {

    state = {
        products: productData
    }

    filterByPrice1 = () => {
        var products = productData.filter((item) => {
            return item.price < 30000
        })
        this.setState({ products })
    }

    filterByPrice2 = () => {
        var products = productData.filter((item) => {
            return item.price > 30000
        })
        this.setState({ products })
    }

    filterByPrice3 = () => {
        var products = productData.filter((item) => {
            return (item.price > 20000 && item.price < 40000)
        })
        this.setState({ products })
    }

    removeFilter = () => {
        let products = productData.map((item) => {
            return item
        })
        this.setState({ products })
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="dropdown ml-auto mb-3 mr-3">
                        <button className="btn btn-dark dropdown-toggle mr-2" data-toggle="dropdown">
                            <span className="mr-2">Filters</span>
                        </button>
                        <button className="bg-dark btn text-light" onClick={this.removeFilter}>Remove filters</button>
                        <div className="dropdown-menu bg-dark">
                            <button className="bg-dark dropdown-item text-light" onClick={this.filterByPrice1}>less than 30,000</button>
                            <button className="bg-dark dropdown-item text-light" onClick={this.filterByPrice2}>greater than 30,000</button>
                            <button className="bg-dark dropdown-item text-light" onClick={this.filterByPrice3}>20,000 - 40,000</button>
                        </div>
                    </div>
                </div>
                <RenderProduct prods={this.state.products}></RenderProduct>
            </div>
        );
    }
}
export default ProductList;