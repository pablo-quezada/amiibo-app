import React, { Component } from "react";
import CustomerList from "./CustomerList";
import Login from "./Login";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default class App extends
Component
{
    render()
    {
        return (<React.Fragment>
                    <NavBar/>
                    <Login></Login>
                    <ShoppingCart x="10"/>
               </React.Fragment>
               );
    }
    
}