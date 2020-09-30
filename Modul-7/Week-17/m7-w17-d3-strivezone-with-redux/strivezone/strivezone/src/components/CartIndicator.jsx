import React from "react";
import {Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

import {BrowserRouter as Router, withRouter} from "react-router-dom"
import {connect} from "react-redux";

const mapStateToProps = (state) =>state;


class CartIndicator extends React.Component {

    render(){
        return(
           <div className="cart  mt-2">
               <Router>
               <Button variant="info" onClick={()=>this.props.history.push("/cart")}> 

               <FontAwesomeIcon icon={faShoppingCart} id="cartIcon" />

        <span className="ml-2"> {this.props.cart.products.length} </span>
               </Button>
               </Router>
           </div>
        )
    }

}

export default withRouter(connect(mapStateToProps)(CartIndicator))