import React, {Component} from "react";

export default class ShoppingCart extends Component {
    state = {
        products: [
            {id:1, productName: "Mario", price: 8900, quantity: 0},
            {id:2, productName: "Zelda", price: 7300, quantity: 0},
            {id:3, productName: "Chibi", price: 3000, quantity: 0},
            {id:4, productName: "Robo", price: 5500, quantity: 0},
            {id:5, productName: "Mewtoo", price: 9900, quantity: 0},
            {id:6, productName: "Yoshi", price: 8600, quantity: 0},
        ],
    };


    render () {
        return (
            <div>
            <h4>Shopping Cart</h4>

            <div></div>
        </div>
        );
        
    }
}