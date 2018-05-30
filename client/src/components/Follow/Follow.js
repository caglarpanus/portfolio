import React, {Component} from "react";
import "./Follow.css";

class Follow extends Component {
    render() {
        return(
            <section className="section section-follow black darken-4 white-text center">
				<div className="container">
					<div className="row">
						<div className="col s12">
							<h4>Caglar Panus&apos;s Social Stuff</h4>
							<p>Links to my Github, Facebook, and LinkedIn.</p>
							<a href="https://github.com/caglarpanus" className="white-text" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-github fa-4x"></i>
							</a>
							<a href="https://www.facebook.com/caglar.panus" className="white-text" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-facebook fa-4x"></i>
							</a>
							<a href="www.linkedin.com/in/caglarpanus" className="white-text" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-linkedin fa-4x"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
        )
    }
}

export default Follow;
