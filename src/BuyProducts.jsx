//import React, {Component} from "react";

//export default class BuyProducts
//extends Component {
  //  state = {pageTitle: "BuyProducts", BuyProductsCount: 3,
   // customers:[
     //   {
       //     id: 1, 
       //     Product_name: "Mario", 
       //     Price: "10.50", 
       //     Quantity: "1",
       //     Net_price: "$10.00",
       //     photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"
       // },
      //  {
       //     id: 2, 
       //     Product_name: "Zelda", 
       //     Price: "20.00", 
       //     Quantity: "2",
       //     Net_price: "$40.00",
       //     photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01010000-03520902.png"
      //  },
      //  {
      //      id: 3, 
       //     Product_name: "Yoshi", 
       //     Price: "30.00", 
       //     Net_price: "$90.00",
       //     photo: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030102-00410302.png"
      //  },
    
   // ],
 // };


 // render() {
  //  return ( <div>
    //            <h4 className="m-2 p-2">
      //              {this.state.pageTitle}
                    
        //            <span className="badge bg-warning m-2">
        //                {this.state.BuyProductsCount}
        //            </span>

          //          <button className="btn btn-info" onClick={this.onRefreshClick}>
          //              Refresh
          //          </button>
           //     </h4>

             //   <table className="table">
               //     <thead>
               //         <tr>
               //         <th>#</th>
               //         <th>Photo</th>
               //         <th>Product Name</th>
               //         <th>Price</th>
               //         <td>Quantity</td>
               //         <td>Net Price</td>
               //         </tr>
               //     </thead>
               //     <tbody>
               //          {this.getBuyProductsRow()}          
              //      </tbody>
            //    </table>
         //   </div>
        //   );
//}



//getPriceToRender = (Price) => {   
  //  if(Price)return Price;
    //else{
     //   return <div className="bg-warning p-2 text-center">Price</div>;
    // }
 // }


//getBuyProductsRow = () => {
  //  return this.state.customers.map((cust, index)=> {
    //  return(
      //    <tr key={cust.id}>
        //      <td>{cust.id}</td>
          //    <td>
            //      <img src={cust.photo} alt="BuyProducts"/>
              //    <div>
                //      <button className="btn btn-sm btn-secondary" onClick={() => 
                  //    {this.onChangePictureClick(cust, index);}}
                    //  >Change Picture</button>
               //   </div>
             // </td>
             // <td>{cust.Product_name}</td>
             // <td>{this.getPriceToRender(cust.Price)}</td>
             // <td>{cust.Quantity.city}</td>
         // </tr>
     //);
  //});    
//};



//};



import React, { Component } from "react";

export default class GridCalculations extends Component {
  state = {
    pageTitle: "Buy Products",
    product: [
      { id: 1, name: "abc", price: "10.00", quantity: "1", netprice: "10.00" },
      { id: 2, name: "def", price: "20.00", quantity: "2", netprice: "40.00" },
      { id: 3, name: "ghi", price: "30.00", quantity: "3", netprice: "90.00" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h4 className="border-bottom, m-1,p-1">{this.state.pageTitle}</h4>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Net Price</th>
              </tr>
            </thead>
            <thead>
              {this.state.product.map((prod) => {
                return (
                  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>{prod.quantity}</td>
                    <td>{prod.netprice}</td>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </React.Fragment>
    );
  }
}