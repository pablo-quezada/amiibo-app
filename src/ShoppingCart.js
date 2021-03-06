import React, {Component} from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {

    constructor(props) {
        console.log("constructor - ShoppingCart");
        super(props);
        this.state = {
            products: [
                {id:1, productName: "Mario", price: 8900, quantity: 0},
                {id:2, productName: "Zelda", price: 7300, quantity: 0},
                {id:3, productName: "Chibi", price: 3000, quantity: 0},
                {id:4, productName: "Robo", price: 5500, quantity: 0},
                {id:5, productName: "Mewtoo", price: 9900, quantity: 0},
                {id:6, productName: "Yoshi", price: 8600, quantity: 0},
            ],
        };
    }


  

    render () {
        console.log("render - ShoppingCart");

        return (
            <div>
            <h4>Shopping Cart</h4>

            <div className="row">
                {this.state.products.map((prod) => {
                    return ( <Product key={prod.id} product={prod} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}>

                    <button className="btn btn-primary">Buy Now</button>
                    </Product>
                );
                })}
            </div>
        </div>
        );       
    }


    componentDidMount() {
        document.title = "Cart - AmiiboShop"
        console.log("componentDidMount - ShoppingCart");

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate - ShoppingCart", prevProps, prevState, this.props, this.state);
        //if (prevProps.x != this.props.x) {
       // }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount - ShoppingCart");

    }

    componentDidCatch(error, info) {
        console.log("componentWillUnmount - ShoppingCart");
        console.log(error, info);
    }

    handleIncrement = (product, maxValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (allProducts[index].quantity < maxValue){
            allProducts[index].quantity ++;

            this.setState({ products: allProducts });
        }        
    };

    handleDecrement = (product, minValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (allProducts[index].quantity > minValue){
            allProducts[index].quantity --;

        
           this.setState({ products: allProducts });
        }
    };

    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (window.confirm("Are you sure to delete?")) {
            allProducts.splice(index, 1);

            this.setState({ products: allProducts });

        }

     
    };
}