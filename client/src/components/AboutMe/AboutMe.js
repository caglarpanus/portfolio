import React, {Component} from "react";
import "./AboutMe.css";

class AboutMe extends Component{

	state={
		caglar:false
	}

	handleClick=(event)=>{
		const {name} = event.target;
		if(this.state[name]){
			this.setState({[name]:false})	
		}
		if(!this.state[name]){
			this.setState({[name]:true})
		}
	}

	render(){
		return(
			<section className="section indigo lighten-5 center">
				<div className="container">
					<div className="card-panel white z-depth-1 about-me-top-margin">
						<div className="row no-margin">
							<div className="col s12 m6 l3">
								<img src="/assets/img/about.jpg" alt="" className={this.state.caglar?"circle responsive-img animated infinite rotate360":"circle responsive-img"} name="caglar" onClick={this.handleClick} />
							</div>
							<div className="col s12 m6 l6 left-align">
								<h4 className="no-margin">About <strong className="indigo-text">Me</strong></h4>
								<p className="">
									Hi! I&apos;m Caglar Panus. Unfortunately, you won't be able to pronounce my name correctly.
								</p>
                                <p>
                                    I am a full stack MERN developer, currently living in Raleigh-Durham Area, NC.
                                </p>
								<p>
									I enjoy coding for both the front end and the back end. In particular, I enjoy the sense of pride and accomplishment when combining everything into a complete project.
								</p>
								<p className="">
									I am excited to finally pursue my passion for web-development, and coding.
								</p>
								<p className="hide-on-med-only hide-on-small-only">
									Outside of coding, I love playing or watching soccer. I also travel a lot, mostly because my and my wife's families live abroad.
								</p>
								<p className="hide-on-med-only hide-on-small-only">
									(Don&apos;t click on my picture!)
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default AboutMe;