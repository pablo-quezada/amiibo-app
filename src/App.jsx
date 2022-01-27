import React, { Component } from "react";
import CustomerList from "./CustomerList";
import NavBar from "./NavBar";

export default class App extends
Component
{
    render()
    {
        return (<React.Fragment>
                    <NavBar/>
                    <CustomerList/>
               </React.Fragment>
               );
    }
    
}