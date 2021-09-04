import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/signup.css';
import axios from 'axios';

export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            mobileNO:'',
            fileName:'',
            country:'',
            password:''
        };
    }


    onHandleChange = (event) =>{
        let value = event.target.value;
        let field = event.target.name;
        console.log("on handle change",field,value)
        this.setState({
            [field] : value
        })
    }
    submitHandler = async (event) =>{
        event.preventDefault();
        if(this.state.name){
        let payLoadObject = {
            "name" : this.state.name,
            "email" : this.state.email,
            "mobileno" : this.state.mobileNO,
            "country" : this.state.country,
            "password" : this.state.password
        }
        console.log("submitting", this.state,payLoadObject)

        await axios.post(`https://localhost:3001/signup`,payLoadObject)
        .then(resp =>{
            console.log(resp)
        })
        .catch(err=> {
            console.log(err)
        })
    }else{
        alert("Please Enter Name")
    }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 offset-1 text-center registerText">
                            <h3>Register Here</h3>
                            <br></br>
                            <p>Already have an account? <Link to="/login" className="link">Log In</Link></p>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-10 offset-1 text-center">
                            <form onSubmit={this.submitHandler}>
                                <div className="col-8 offset-2">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        onChange={this.onHandleChange}
                                        value={this.state.name}
                                        name="name"
                                        placeholder="Enter your name..."
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-8 offset-2">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        onChange={this.onHandleChange}
                                        value={this.state.email}
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter your email..."
                                    />
                                </div>

                                <div className="col-8 offset-2">
                                    <label htmlFor="mobileNumber">Mobile Number:</label>
                                    <input
                                        type="number"
                                        onChange={this.onHandleChange}
                                        value={this.state.mobileNO}
                                        name="mobileNO"
                                        className="form-control"
                                        placeholder="Enter a mobile number..."
                                    />
                                </div >
                                <br></br>
                                <div className="col-10 offset-2">
                                    <label htmlFor="profile">Choose a profile picture:</label>
                                    <input type="file"
                                        name="profile"
                                        accept="image/png, image/jpeg"
                                        className="profile" />
                                </div>
                                <br></br>
                                <div className="col-8 offset-2">
                                    <label htmlFor="contry">Country:</label>
                                    <input
                                        type="text"
                                        onChange={this.onHandleChange}
                                        value={this.state.country}
                                        id="contry"
                                        name="country"
                                        className="form-control"
                                        placeholder="Enter your Country..."
                                    />
                                </div>

                                <div className="col-8 offset-2">
                                    <label htmlFor="contry">Password:</label>
                                    <input
                                        type="password"
                                        onChange={this.onHandleChange}
                                        value={this.state.password}
                                        id="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter your password..."
                                    />
                                </div>

                                <br></br>

                                {/* Submit button */}
                                <div className="col-8 offset-2">
                                    <button className="btn btn-success btn-lg" type="submit">
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SignUp
