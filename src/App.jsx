import React, { Component } from "react";
import CustomerList from "./CustomerList";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

export default class App extends
Component
{
    render()
    {
        return (<React.Fragment>
                    <NavBar/>
                    <ShoppingCart/>
               </React.Fragment>
               );
    }
    
}