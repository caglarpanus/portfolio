import React, {Component} from "react";


class Slider extends Component {


	render(){
		return(
			<section id="home" className="slider fullscreen scrollspy"> 
				<ul className="slides">
					<li>
						<img src="/assets/img/background.jpg" alt="Caglar" />
						<div className="caption center-align">
							<h3 className="grey-text text-lighten-2"><strong>Welcome to My Portfolio</strong>!</h3>
							<h5 className="light grey-text text-lighten-5 hide-on-small-only"><strong>Full Stack Web Developer</strong></h5>
						</div>
					</li>
				</ul>
			</section>
		)
	}
}

export default Slider;