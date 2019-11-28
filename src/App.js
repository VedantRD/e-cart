import React, { Component } from 'react';
import fire from './config/Fire';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Home from './components/Home';
import Login from './Login';

class App extends Component {

  constructor() {
    super()
    this.state = {
      id: 2,
      cartItems: [],
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({ user })
      } else {
        // No user is signed in.
        this.setState({ user: null })
      }
    });
  }

  handleAddCart = (id) => {
    const cartItems = [...this.state.cartItems, id]
    this.setState({
      cartItems
    })
  }

  handleRemoveFromCart = (id) => {
    const cartItems = this.state.cartItems
    var indexOfItemToRemove = cartItems.indexOf(id)
    cartItems.splice(indexOfItemToRemove, 1)
    this.setState({
      cartItems
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          {this.state.user == null ? (<Route exact path="/" component={Login}></Route>) : (<Route exact path="/" component={Home}></Route>)}
          < Route path="/productlist" component={ProductList}></Route>
          <Route path={"/details/:myid"}
            component={(props) =>
              <Details
                handleAddCart={this.handleAddCart}
                id={props.match.params.myid}>
              </Details>
            }>
          </Route>
          <Route path="/cart"
            component={() =>
              <Cart cartItems={this.state.cartItems} removeFromCart={this.handleRemoveFromCart}></Cart>}>
          </Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment >
    );
  }
}

export default App;
