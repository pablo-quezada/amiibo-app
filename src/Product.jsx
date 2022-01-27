import React, {Component} from "react";

export default class Product extends Component {   
    state = {
        product: this.props.product
    };





    render (){
        console.log(this.props);

        return (
            <div className="col-lg-6">
                  <div className="card m-2">

                <div className="card-body">
                        <div className="text-muted"> # {this.props.product.id}</div>

                            <h5 className="p-2 border-top">
                                {this.props.product.productName}
                            </h5>

                        <div>${this.state.product.price}</div>
                        </div>
                    {/*card body ends here */}

                    <div className="card-footer">

                        <div className="float-left">
                            <span className="badge">{this.props.product.quantity}</span>
                            
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => {this.props.onIncrement(this.state.product, 100000);}}>+</button>
                                <button className="btn btn-outline-success" onClick={() => {this.props.onDecrement(this.state.product, 0);}}>-</button>
                            </div>
                        </div>


                        <div className="float-right">{this.props.children}</div>
                        </div>
                    </div>
            </div>
          

        );
        
    }
}