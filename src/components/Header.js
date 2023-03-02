function Header() {
	return (
		<>
			<div className="header" style={{ backgroundImage: `url(./Hero-Image.jpg)` }}>
				<nav>
					<ul>
						<li className="logo">Kenny Fiesta</li>
						<li><img src="./icons8-menu-24.png" alt="Other options" width={30} /></li>
						{/* <li>HOME</li>
						<li>ABOUT</li>
						<li>PRICE LIST</li>
						<li>FAQS</li>
						<li>CONTACT</li> */}
					</ul>
				</nav>
				<h1>Contact</h1>
			</div>
		</>
	);
}

export default Header;