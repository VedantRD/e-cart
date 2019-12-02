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

    // componentDidMount() {
    //     $('.has-clear input[type="text"]').on('input propertychange', function () {
    //         var $this = $(this);
    //         var visible = Boolean($this.val());
    //         $this.siblings('.form-control-clear').toggleClass('hidden', !visible);
    //     }).trigger('propertychange');

    //     $('.form-control-clear').click(function () {
    //         $(this).siblings('input[type="text"]').val('')
    //             .trigger('propertychange').focus();
    //     });
    // }


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
        let value = document.getElementById("mySearch").value.toLowerCase()
        var products = productData.filter((item) => {
            return (item.name.toLowerCase().includes(value))
        })
        this.setState({ products })
    }


    // ========================================== Render =========================================== //

    render() {
        return (
            <div className="container mt-4">
                <div className="row no-gutters  my-3 justify-content-center input-group">
                    {/* <div className="w-100">
                        <div className="input-group w-100"> */}
                    <div className="col-md-1"></div>
                    <div className="form-group has-search col-md-8 col-sm-7">
                        <span className="fa fa-search form-control-feedback pl-3"></span>
                        <input className="field form-control pl-5 py-3 mySearch bg-light" id="mySearch" placeholder="Search Your Favourite Product Here" type="search">
                        </input>
                    </div>
                    <div className="form-group input-group-append col-md-2">
                        <button className="btn text-dark bg-light w-100 px-4 mySearchButton btn-outline-dark" onClick={this.searchByName}>Search</button>
                    </div>
                    <div className="col-md-1"></div>
                    {/* </div>
                    </div> */}
                </div>
                <div className="row">
                    <div className="dropdown ml-auto mb-3 mr-2">
                        <button className="btn-danger btn text-light mr-2 removeBtn" onClick={this.removeFilter}>Remove filters</button>
                        <button className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                            <span className="mr-2">Filters</span>
                        </button>
                        <div className="dropdown-menu bg-light">
                            <button className="bg-light dropdown-item text-dark" onClick={this.filterByPrice1}>less than 30,000</button>
                            <button className="bg-light dropdown-item text-dark" onClick={this.filterByPrice2}>greater than 30,000</button>
                            <button className="bg-light dropdown-item text-dark" onClick={this.filterByPrice3}>20,000 - 40,000</button>
                        </div>
                    </div>
                    <div className="dropdown mr-3">
                        <button className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                            <span className="mr-2">Sort By</span>
                        </button>
                        <div className="dropdown-menu bg-light">
                            <button className="bg-light dropdown-item text-dark" onClick={this.sortDefault}>Default</button>
                            <button className="bg-light dropdown-item text-dark" onClick={this.sortLowToHigh}>Price low to high</button>
                            <button className="bg-light dropdown-item text-dark" onClick={this.sortHighToLow}>price high to low</button>
                        </div>
                    </div>
                </div>
                <RenderProduct prods={this.state.products} handleDetail={this.props.handleDetail}></RenderProduct>
            </div>
        );
    }
}
export default ProductList;