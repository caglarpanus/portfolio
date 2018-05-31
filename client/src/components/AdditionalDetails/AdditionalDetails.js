import React, {Component} from "react";
import "./AdditionalDetails.css";

class AdditionalDetails extends Component {
	render(){
		return(
			<section className="section indigo lighten-5 center">
			<h4>Additional <strong className="indigo-text darken-4">Technologies</strong></h4>
			<div className="container">
				<div className="row">
					<div className="col s12 m8 offset-m2">
						<ul className="collapsible">
							<li>
								<div className="collapsible-header"><i className="material-icons">computer</i>Front-End Technologies</div>
								<div className="collapsible-body white left-align">
									<table className="striped">
										<tbody>
											<tr><td>Javascript ES5/ES6</td></tr>
											<tr><td>JQuery</td></tr>
											<tr><td>HTML5</td></tr>
											<tr><td>CSS3</td></tr>
											<tr><td>CSS Animation/Keyframes</td></tr>
											<tr><td>Bootstrap</td></tr>
											<tr><td>Materialize</td></tr>
											<tr><td>Handlebars</td></tr>
										</tbody>
									</table>
								</div>
							</li>
							<li>
								<div className="collapsible-header"><i className="material-icons">build</i>Back-End Technologies</div>
								<div className="collapsible-body white left-align">
									<table className="striped">
										<tbody>
                                            <tr><td>User Authentication</td></tr>
											<tr><td>Stripe Payment</td></tr>
											<tr><td>Mocha/Chai for Testing</td></tr>
											<tr><td>Nightmare for Testing</td></tr>
											<tr><td>Bcrypt</td></tr>
											<tr><td>Firebase</td></tr>
											<tr><td>MVC Structure</td></tr>
										</tbody>
									</table>
								</div>
							</li>
							<li>
								<div className="collapsible-header"><i className="material-icons">devices_other</i>Other Technologies</div>
								<div className="collapsible-body white left-align">
									<table className="striped">
										<tbody>
											<tr><td>Github</td></tr>
											<tr><td>Heroku</td></tr>
											<tr><td>Trello</td></tr>
											<tr><td>Agile Development</td></tr>
										</tbody>
									</table>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			</section>
		)
	}
}

export default AdditionalDetails;