import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <h3>Sign In</h3>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <br></br>
                            <p className="forgot-password text-center">
                                Forgot <Link>password?</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;