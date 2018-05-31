import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {

	render(){
		return (
		<div>
			<div className="navbar-fixed">
				<nav className="black darken-4">
					<div className="container">
						<div className="nav-wrapper">
							<a href="#home" className="brand-logo"><strong>Caglar Panus</strong></a>
							<a href="#" data-target="mobile-nav" className="sidenav-trigger">
								<i className="material-icons">menu</i>
							</a>
							<ul className="right hide-on-med-and-down"> 
								<li>
									<a href="#home"><strong>Home</strong></a>
								</li>
								<li>
									<a href="#technologies"><strong>Technologies</strong></a>
								</li>
								<li>
									<a href="#portfolio"><strong>Portfolio</strong></a>
								</li>
								<li>
									<a href="#contact"><strong>Contact</strong></a>
								</li>
								<li>
									<a href="https://drive.google.com/file/d/1Z4Ha8FmOhi0860RIv37tQ4E6stzqsmTf/view?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>Resume</strong></a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<ul className="sidenav" id="mobile-nav">
				<li>
					<a href="#home"><strong>Home</strong></a>
				</li>
				<li>
					<a href="#technologies"><strong>Technologies</strong></a>
				</li>
				<li>
					<a href="#portfolio"><strong>Portfolio</strong></a>
				</li>
				<li>
					<a href="#contact"><strong>Contact</strong></a>
				</li>
				<li>
					<a href="https://drive.google.com/file/d/1Z4Ha8FmOhi0860RIv37tQ4E6stzqsmTf/view?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>Resume</strong></a>
				</li>
			</ul>
		</div>
		)
	}
}

export default Navbar;