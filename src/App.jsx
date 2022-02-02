import React, { Component } from "react";
import Dashboard from "./Dashboard";
import CustomerList from "./CustomerList";
import Login from "./Login";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
import history from "./history";
import SideBar from "./SideBar";
import ProductByID from "./ProductByID";


export default class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    render()
    {
        return (<HashRouter history={history}>
                    <NavBar isLoggedIn={this.state.isLoggedIn} updateIsLoggedInStatus=
                    {this.updateIsLoggedInStatus}
                    />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                {this.state.isLoggedIn? <SideBar></SideBar> :""}
                                
                            </div>

                            <div className="col-lg-3">
                            <Switch>
                                <Route path="/" exact render={(props) => <Login {...props}
                                updateIsLoggedInStatus={this.updateIsLoggedInStatus}/>} />
                                <Route path="/dashboard" exact component={Dashboard}/>
                                <Route path="/customers" exact component={CustomerList}/>
                                <Route path="/cart" exact component={ShoppingCart}/>
                                <Route path="/product/:id" component={ProductByID}/>
                                <Route path="*" component={NoMatchPage}/>
                            </Switch>
                            </div>
                        </div>
                    </div>
               </HashRouter>
               );
    }
   
    
    updateIsLoggedInStatus = (status) => {
        this.setState({isLoggedIn: status});
    };
}
