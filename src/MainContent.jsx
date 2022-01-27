import React, {Component} from "react";

export default class MainContent
extends Component {
    state = {pageTitle: "Customers", customersCount: 5,
    customers:[
        {
            id: 1, 
            name: "Mario", 
            phone: "1234-56", 
            address: {city: "Santiago"},
            photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
        },
        {
            id: 2, 
            name: "Zelda", 
            phone: "99813-23", 
            address: {city: "Viña"},
            photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
        },
        {
            id: 3, 
            name: "Yoshi", 
            phone: "718384", 
            address: {city: "Conce"},
            photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030102-00410302.png"
        },
        {
            id: 4, 
            name: "Luigi", 
            phone: "566200", 
            address: {city: "Valdivia"},
            photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_22c00000-003a0202.png"
        },
        {
            id: 5, 
            name: "Donkey-kong", 
            phone: "8918374", 
            address: {city: "La Serena"},
            photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_1f400000-035e1002.png"
        },
    ],

};

customerNameStyle = (custName) => {
    if(custName.startsWith("M")) return "green-hightlight border-left";
    else if(custName.startsWith("Z")) return "red-hightlight border-right";
    else return "";
};

    render() {
        return ( <div>
                    <h4 className="m-2 p-2">
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
                            <th>Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <td>City</td>
                            </tr>
                        </thead>
                        <tbody>
                             {this.getCustomerRow()}          
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

    getPhoneToRender = (phone) => {   
        if(phone)return phone;
        else{
            return <div className="bg-warning p-2 text-center">No Phone</div>;
         }
      }

      getCustomerRow = () => {
          return this.state.customers.map((cust)=> {
            return(
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} alt="Customer"/>
                    </td>
                    <td style={this.customerNameStyle(cust.name)}>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            );
        });    
    }
}
    



