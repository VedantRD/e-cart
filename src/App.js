import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Home from './components/Home';

class App extends Component {
  
  state = { 
    index : 2,
    cartItems : []
  }

  handleAddCart = (ind) => {
    const cartItems = [...this.state.cartItems,ind]
    this.setState({
      cartItems
    })
  }

  handleRemoveFromCart = (ind) => {
    const cartItems = this.state.cartItems
    var indexOfItemToRemove = cartItems.indexOf(ind)
    cartItems.splice(indexOfItemToRemove,1) 
    this.setState({
      cartItems
    })
  }

  render() { 
    return ( 
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/productlist" component={ProductList}></Route>
        <Route path={"/details/:myindex"} 
          component={(props) => 
            <Details 
              handleAddCart = {this.handleAddCart}
              ind = {props.match.params.myindex}> 
            </Details>
          }>
        </Route>
        <Route path="/cart" 
          component={() =>
            <Cart cartItems = {this.state.cartItems} removeFromCart = {this.handleRemoveFromCart}></Cart>}>
        </Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment> 
    );
  }
}
 
export default App;
