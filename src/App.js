import React, { Component } from 'react';
import fire from './config/Fire';
import { Switch, Route } from 'react-router-dom';
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
      myProduct: {},
      name: "",
      lastName: ""
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
        let email_id = user.email;
        let [name, lastName] = email_id.split(".", 2);
        [lastName] = lastName.split("@", 1);
        //console.log(name);
        //console.log(lastName);
        this.setState({ name, lastName })
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

  handleDetail = (myProduct) => {
    this.setState({ myProduct })
    console.log(myProduct.name)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          {this.state.user == null ?
            <React.Fragment>
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route component={Default}></Route>
              </Switch>
            </React.Fragment> :
            <React.Fragment>
              <Switch>
                <Route exact path="/"
                  component={() =>
                    <Home user_name={this.state.name} user_lastname={this.state.lastName}></Home>
                  }>
                </Route>
                <Route path="/productlist"
                  component={() =>
                    <ProductList
                      handleDetail={this.handleDetail}>
                    </ProductList>
                  }>
                </Route>
                <Route path={"/details/:myid"}
                  component={() =>
                    <Details
                      handleAddCart={this.handleAddCart}
                      /* id={props.match.params.myid} */
                      myProduct={this.state.myProduct}>
                    </Details>
                  }>
                </Route>
                <Route path="/cart"
                  component={() =>
                    <Cart cartItems={this.state.cartItems} removeFromCart={this.handleRemoveFromCart}>
                    </Cart>}>
                </Route>
                {/* <Route component={Default}></Route> */}
              </Switch>
            </React.Fragment>
          }
        </Switch>
      </React.Fragment >
    );
  }
}

export default App;
