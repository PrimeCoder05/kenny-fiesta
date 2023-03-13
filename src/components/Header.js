import { Component } from "react";

class Header extends Component {
	state = { clicked: false };
	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	}
	render() {
		return (
			<>
				<div className="header" style={{ backgroundImage: `url(./Hero-Image.jpg)` }}>
					<nav>
						<a href="index.html" className="logo">Kenny Fiesta</a>

						<div>
							<ul id="navbar" className={this.state.clicked ? "#navbar clicked" : "#navbar"}>
								<li><a href="index.html">HOME</a></li>
								<li><a href="index.html">ABOUT</a></li>
								<li><a href="index.html">PRICE LIST</a></li>
								<li><a href="index.html">FAQS</a></li>
								<li><a href="index.html" className="active">CONTACT</a></li>
							</ul>
						</div>

						<div className="mobile" onClick={this.handleClick}>
							<img src="./icons8-menu-24.png" alt="Other Options" width={25} />
						</div>
					</nav>
					<h1>Contact</h1>
				</div>
			</>
		);
	}
}

export default Header;