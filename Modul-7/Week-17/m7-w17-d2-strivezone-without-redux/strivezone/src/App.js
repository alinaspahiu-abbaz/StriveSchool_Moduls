import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"

import CartIndicator from "./components/CartIndicator"
import BookStore from "./components/BookStore"
import Cart from "./components/Cart"

class App extends React.Component {
  state={
    cart: { products: [] }
  }

  handleAddToCart = id => {
    this.setState({...this.state,
     cart: {
       ...this.state.cart,
       products : [...this.state.cart.products, id]
     }})
  }

  handleRemoveFromCart = id => {

    const bookToRemove = this.state.cart.products.findIndex(bookId =>bookId === id)

    this.setState({
      ...this.state,
          cart:{...this.state.cart,
          products: [
            ...this.state.cart.products.slice(0, bookToRemove),
            ...this.state.cart.products.slice(bookToRemove + 1),
            ]
        }
          })
}
  render() {
  return (
    <div className="container">
      <div className="row">
        <div className="col sm-12 text-center background-div">
          <Link to="/"><h1> Strivezon Book Store</h1> </Link>
         
        </div>
      
      </div>
      <CartIndicator cartItemsNum={this.state.cart.products.length}/>
      

      <hr />

      <div className="container">
       <Route path="/" exact render={(props) => (<BookStore {...props} addToCart={this.handleAddToCart}/> )} />
       <Route path="/cart" 
            exact render={(props) =>(
               <Cart {...props} 
               cart={this.state.cart.products}
                 removeFromCart={this.handleRemoveFromCart} /> )} />

      </div>

    </div>
  );
}
}

export default App;
