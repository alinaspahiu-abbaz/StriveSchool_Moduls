import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import LoginComponent from "../src/components/LoginComponent";
import Profile from "../src/components/Profile";
import RegisterComponents from "../src/components/RegisterComponent";
//import Books from "../src/components/AdminBooks";

class MainComponent extends React.Component {
    render(){
        return(
            <Router>
            <h1> Welcome to our app! REady to log in or Register!</h1>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
               <Link to="/register">Register</Link>    
               <Link to="/login">Login</Link>   
               <Link to="/profile">Profile</Link>  
               {/* <Link to="/books">Books</Link>    */}
             </div>
             <Switch>
                 <Route path="/register"> <RegisterComponents /> </Route>
                 <Route path="/login"> <LoginComponent /> </Route>
                 <Route path="/profile"> <Profile/> </Route>
                 {/* <Route path="/books"> <Books /> </Route> */}
             </Switch>
            </Router>
        )
    }
}

export default MainComponent