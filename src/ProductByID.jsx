import React, {Component} from "react";
//import {Link} from "react-router-dom";

export default class ProductByID extends Component {
    constructor(props) {
        super(props);

       // console.log("Constructor - Product");

        this.state = {
            product: this.props.product,
        };
    }
  


    


    componentDidMount = async () => {
        var id = this.props.match.params.id;
        console.log(id)

        var response = await fetch(`https://www.amiiboapi.com/api/amiibo/`,
        {method: "GET"});

        var body = await response.json();
        console.log(body.amiibo);
        this.setState({product: body.amiibo});
        
    }
    componentDidUpdate() {
        console.log("componentDidUpdate - Product", this.state.product);
    }


    render (){
         
            
        if (this.state.product) {
            return (
                <div>
                    <h1>{this.state.product.name}</h1>,
                    <h1>{this.state.product.image}</h1>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png"/>
                    </li>

                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png"/>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000003-039bff02.png"/>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00030102-00410302.png"/>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00040000-02620102.png"/>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00050000-00140002.png"/>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_0005ff00-023a0702.png"/>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00800102-035d0302.png"/>
                    </li>
                    <li>
                        <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-03990902.png"/>
                    </li>
                </div>
                
            )

        }
        return (<h1>cargando</h1>)
    

   
    
  



}

}
