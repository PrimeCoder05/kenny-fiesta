function Selected({option}) {
	if (option === "WEDDING") {
		return (
			<div>
				<label htmlFor="name">NAME OF BRIDE</label> <span className="required">*</span><br/>
				<input type="text" name="bride-first-name" id="name" placeholder="First Name" required /> <input type="text" name="bride-last-name" id="name" placeholder="Last Name" required /> <br/><br/>

				<label htmlFor="name">NAME OF GROOM</label> <span className="required">*</span><br/>
				<input type="text" name="groom-first-name" id="name" placeholder="First Name" required /> <input type="text" name="groom-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "BRIDAL SHOWER") {
		return (
			<div>
				<label htmlFor="name">NAME OF BRIDE-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="bride-first-name" id="name" placeholder="First Name" required /> <input type="text" name="bride-last-name" id="name" placeholder="Last Name" required /> <br/><br/>

				<label htmlFor="name">NAME OF GROOM-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="groom-first-name" id="name" placeholder="First Name" required /> <input type="text" name="groom-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "ENGAGEMENT PARTY") {
		return (
			<div>
				<label htmlFor="name">NAME OF BRIDE-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="bride-first-name" id="name" placeholder="First Name" required /> <input type="text" name="bride-last-name" id="name" placeholder="Last Name" required /> <br/><br/>

				<label htmlFor="name">NAME OF GROOM-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="groom-first-name" id="name" placeholder="First Name" required /> <input type="text" name="groom-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "ANNIVERSARY") {
		return (
			<div>
				<label htmlFor="name">NAME OF WIFE</label> <span className="required">*</span><br/>
				<input type="text" name="wife-first-name" id="name" placeholder="First Name" required /> <input type="text" name="wife-last-name" id="name" placeholder="Last Name" required /> <br/><br/>

				<label htmlFor="name">NAME OF HUSBAND</label> <span className="required">*</span><br/>
				<input type="text" name="husband-first-name" id="name" placeholder="First Name" required /> <input type="text" name="husband-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "BABY SHOWER") {
		return (
			<div>
				<label htmlFor="name">NAME OF MOTHER</label> <span className="required">*</span><br/>
				<input type="text" name="mother-first-name" id="name" placeholder="First Name" required /> <input type="text" name="mother-last-name" id="name" placeholder="Last Name" required /> <br/><br/>

				<label htmlFor="name">NAME OF FATHER</label> <span className="required">*</span><br/>
				<input type="text" name="father-first-name" id="name" placeholder="First Name" required /> <input type="text" name="father-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "GENDER REVEAL") {
		return (
			<div>
				<label htmlFor="name">NAME OF MOTHER</label> <span className="required">*</span><br/>
				<input type="text" name="mother-first-name" id="name" placeholder="First Name" required /> <input type="text" name="mother-last-name" id="name" placeholder="Last Name" required /> <br/><br/>

				<label htmlFor="name">NAME OF FATHER</label> <span className="required">*</span><br/>
				<input type="text" name="father-first-name" id="name" placeholder="First Name" required /> <input type="text" name="father-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "GRADUATION PARTY") {
		return (
			<div>
				<label htmlFor="name">NAME OF GRADUATE</label> <span className="required">*</span><br/>
				<input type="text" name="graduate-first-name" id="name" placeholder="First Name" required /> <input type="text" name="graduate-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "RETIREMENT PARTY") {
		return (
			<div>
				<label htmlFor="name">NAME OF RETIREE</label> <span className="required">*</span><br/>
				<input type="text" name="retiree-first-name" id="name" placeholder="First Name" required /> <input type="text" name="retiree-last-name" id="name" placeholder="Last Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "CORPORATE EVENT") {
		return (
			<div>
				<label htmlFor="name">TYPE OF INDUSTRY</label> <span className="required">*</span><br/>
				<input type="text" name="industry-type" id="name" placeholder="First Name" required /> <br/><br/>
			</div>
		);

	} else if (option === "RETAIL EVENT") {
		return (
			<div>
				<label htmlFor="name">TYPE OF STORE</label> <span className="required">*</span><br/>
				<input type="text" name="store-type" id="name" placeholder="First Name" required /> <br/><br/>
			</div>
		);

	} else {
		return "\n"
	}
}

export default Selected;