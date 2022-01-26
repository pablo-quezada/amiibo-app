import React, {Component} from "react";

export default class MainContent
extends Component {
    state = {pageTitle: "Customers", customersCount: 6};

    render() {
        return ( <div>
                    <h4 className="border-bottom m-2 p-2">
                        {this.state.pageTitle}
                        <span className="badge bg-warning m-2">
                            {this.state.customersCount}
                        </span>

                        <button className="btn btn-info">Refresh</button>
                    </h4>
                </div>
               );
    }
}
