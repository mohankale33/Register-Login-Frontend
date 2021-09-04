import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"

class Home extends Component {
	render() {
		return (
			<div className="container-fluid col-12">
				<div className="jumbotron jumbotron-fluid col-10 offset-1 text-center">
					<h2>React application for Rlogical</h2>
				</div>
                <div id="navigateDiv">
                    <h4>Navigate for Sign-Up/Sign-in</h4>
                </div>

				<div className="row">
					<div className="col-sm-10 offset-1 text-center" id="buttons">
						<Link to="/signup" className="btn" id="eachButton">Sign-Up</Link>
						<Link to="/login" className="btn" id="eachButton">Login</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;