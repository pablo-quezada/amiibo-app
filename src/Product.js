import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Product extends Component {
    
    constructor(props) {
        super(props);

        console.log("Constructor - Product");

        this.state = {
            product: this.props.product
        };
    }
  


    render (){
        //console.log(this.props);
        console.log("render -Product");

        return (
            <div className="col-lg-6">
                  <div className="card m-2">

                <div className="card-body">
                        <div className="text-muted"> 
                        # {this.state.product.id}

                        <span className="pull-right hand-icon" onClick={() => {
                            this.props.onDelete(this.state.product);
                        }}>
                            <i className="fa fa-times"></i>
                        </span>
                        </div>

                            <h5 className="p-2 border-top">
                                {this.state.product.productName}
                            </h5>

                        <div>${this.state.product.price}</div>
                        </div>
                    {/*card body ends here */}

                    <div className="card-footer">
                        <div className="float-left">
                            <span>{this.state.product.quantity}</span>
                            
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => {this.props.onIncrement(this.state.product, 10);}}>+</button>
                                <button className="btn btn-outline-success" onClick={() => {this.props.onDecrement(this.state.product, 0);}}>-</button>
                            </div>
                        </div>


                        <div className="float-right">
                            <Link to={`product/${this.state.product.id}`}
                            className="mr-2">
                                Details
                            </Link>
                            {this.props.children}</div>
                        </div>
                    </div> 
             </div>
            
          

        );
        
    }



    componenDidMount() {
        console.log("componentDidMount - Product");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate - Product");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount - Product");
    }
}