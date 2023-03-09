function Header() {
	return (
		<>
			<div className="header" style={{ backgroundImage: `url(./Hero-Image.jpg)` }}>
				<nav>
					<a href="index.html" className="logo">Kenny Fiesta</a>

					<div>
						<ul className="navbar">
							{/* <li><img src="./icons8-menu-24.png" alt="Other options" width={30} /></li> */}
							<li><a href="index.html">HOME</a></li>
							<li><a href="index.html">ABOUT</a></li>
							<li><a href="index.html">PRICE LIST</a></li>
							<li><a href="index.html">FAQS</a></li>
							<li><a href="index.html">CONTACT</a></li>
						</ul>
					</div>
				</nav>
				<h1>Contact</h1>
			</div>
		</>
	);
}

export default Header;