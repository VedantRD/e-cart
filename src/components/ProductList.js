import React, { Component } from 'react';
import productData from '../mydata.json';
import RenderProduct from './RenderProduct.js';
//import $ from 'jquery'
//import Product from './Product';
//import Details from './Details';

class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            products: productData,
            defaultList: productData
        }
    }


    // -------------------------- FIlters ------------------------------ //

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
        this.setState({ products: this.state.defaultList })
    }


    // ---------------------- End of Filters ------------------------- //


    // -------------------- Sorting Product List --------------------- //

    sortLowToHigh = () => {
        let productSort = this.state.products
        productSort.sort((a, b) => a.price - b.price)
        this.setState({
            products: productSort
        })
    }

    sortHighToLow = () => {
        let productSort = this.state.products
        productSort.sort((a, b) => b.price - a.price)
        this.setState({
            products: productSort
        })
    }

    sortDefault = () => {
        /* let products = productData.map((item) => {
            return item
        }) */
        this.setState({ products: this.state.defaultList })
    }

    // ---------------------- End of Sorting ------------------------- //


    // -------------------------------- Search bar ------------------------------- //

    searchByName = () => {
        let value = document.getElementById("#mySearch").value.toLowerCase()
        var products = productData.filter((item) => {
            return (item.name.toLowerCase().includes(value))
        })
        this.setState({ products })
    }


    // ========================================== Render =========================================== //

    render() {
        return (
            <div className="container mt-3">
                <div className="row no-gutters my-4 justify-content-center">
                    <div className="w-75 mx-5">
                        <div className="input-group">
                            <input className="form-control pl-5 mr-2 rounded-pill rounded-right py-3" id="#mySearch" placeholder="Search Product Here"></input>
                            <div className="input-group-append">
                                <button className="btn btn-dark text-light rounded-pill w-100 px-4" onClick={this.searchByName}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="dropdown ml-auto mb-3 mr-2">
                        <button className="bg-dark btn text-light mr-2" onClick={this.removeFilter}>Remove filters</button>
                        <button className="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                            <span className="mr-2">Filters</span>
                        </button>
                        <div className="dropdown-menu bg-dark">
                            <button className="bg-dark dropdown-item text-light" onClick={this.filterByPrice1}>less than 30,000</button>
                            <button className="bg-dark dropdown-item text-light" onClick={this.filterByPrice2}>greater than 30,000</button>
                            <button className="bg-dark dropdown-item text-light" onClick={this.filterByPrice3}>20,000 - 40,000</button>
                        </div>
                    </div>
                    <div className="dropdown mr-3">
                        <button className="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                            <span className="mr-2">Sort By</span>
                        </button>
                        <div className="dropdown-menu bg-dark">
                            <button className="bg-dark dropdown-item text-light" onClick={this.sortDefault}>Default</button>
                            <button className="bg-dark dropdown-item text-light" onClick={this.sortLowToHigh}>Price low to high</button>
                            <button className="bg-dark dropdown-item text-light" onClick={this.sortHighToLow}>price high to low</button>
                        </div>
                    </div>
                </div>
                <RenderProduct prods={this.state.products} handleDetail={this.props.handleDetail}></RenderProduct>
            </div>
        );
    }
}
export default ProductList;