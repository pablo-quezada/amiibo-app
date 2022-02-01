import React, {Component} from "react";
import history from "./history";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", message: "" };
    }

    render () {
        return (
    <div className="row">
        <div className="col-lg-6 mx-auto">
            <h4 className="my-1 py-2 border-bottom">Login</h4>

            <div className="form-group form-row">
                <label className="col-lg-4">Email:</label>
                <input type="text" className="form-control" value={this.state.email}
                onChange={(event) => {
                    this.setState( {email: event.target.value});
                }}/>
            </div>

            <div className="form-group form-row">
                <label className="col-lg-4">Password:</label>
                <input type="password" className="form-control" value={this.state.password}
                onChange={(event) => {
                    this.setState( {password: event.target.value});
                }} />
            </div>

            <div className="text-right">
                {this.state.message}
                
                <button className="btn btn-primary" onClick={this.onLoginClick}>
                    Login
                </button>
            </div>
        </div>
    </div>
        );
    }

    componentDidmount() {
        document.title = "Login - AmiiboShop";
    }

    onLoginClick = () => {
        console.log(this.state);
        if (
            this.state.email === "admin@test.com" && 
            this.state.password === "admin123"
        ){
            this.setState({
            message: <span className="text-success">"Successfully Logged-in"</span>
        });

        this.props.updateIsLoggedInStatus(true);

        history.replace("/dashboard");
        }else{
            this.setState({
            message: <span className="text-danger">"Invalid login, please try again"</span>
        });

        }
    };
}