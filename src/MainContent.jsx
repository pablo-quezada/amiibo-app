import React, {Component} from "react";

export default class MainContent
extends Component {
    state = {pageTitle: "Customers", customersCount: 5,
    customers:[
        {id: 1, name: "Mario", phone: "1234-56"},
        {id: 2, name: "Zelda", phone: "99813-23"},
        {id: 3, name: "Yoshi", phone: "718384"},
        {id: 4, name: "Luigi", phone: "566200"},
        {id: 5, name: "Donkey-kong", phone: "8918374"},
    ],

};

    render() {
        return ( <div>
                    <h4 className="border-bottom m-2 p-2">
                        {this.state.pageTitle}
                        <span className="badge bg-warning m-2">
                            {this.state.customersCount}
                        </span>

                        <button className="btn btn-info" onClick={this.onRefreshClick}>
                            Refresh
                        </button>
                    </h4>

                    <table className="table">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.customers.map((cust)=> {
                                return(
                                    <tr>
                                        <td>{cust.id}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                );
                            })}                      
                        </tbody>
                    </table>
                </div>
               );
    }



    onRefreshClick = () => {
        this.setState({
            customersCount: 7,
        });
        
    };
}


