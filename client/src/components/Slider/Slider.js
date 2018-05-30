import React, {Component} from "react";

class Slider extends Component {

	render(){
		return(
			<section id="home" className="slider fullscreen scrollspy"> 
                <div className="slides">
					<div>
						<img src="/assets/img/background.jpg" alt="Caglar's Image" />
						<div className="caption center-align">
							<h3 className="grey-text text-lighten-2">Welcome to Caglar Panus&apos;s <strong className="blue-text text-lighten-2">Portfolio</strong>!</h3>
							<h5 className="light grey-text text-lighten-5 hide-on-small-only"><strong>Full Stack Web Developer</strong></h5>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Slider;