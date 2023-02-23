function PersonalInfo() {
	return (
		<>
			<label htmlFor="name">NAME</label> <span className="required">*</span><br/>
			<input type="text" name="first-name" id="name" placeholder="First Name" required /> <input type="text" name="last-name" id="name" placeholder="Last Name" required /> <br/><br/>

			<label htmlFor="phone-number">PHONE NUMBER</label> <span className="required">*</span><br/>
			<input type="tel" name="phone-number" id="phone-number" placeholder="(123) 456-7890" required /> <br/><br/>

			<label htmlFor="email">E-MAIL ADDRESS</label> <span className="required">*</span><br/>
			<input type="email" name="email-address" id="email" placeholder="example@example.com" required /> <br/><br/>

			<label htmlFor="social-media">SOCIAL MEDIA USERNAME</label> <span className="required">*</span><br/>
			<input type="text" name="social-media" id="social-media" placeholder="@example on Instagram" required /> <br/><br/>
		</>
	);
}

export default PersonalInfo;