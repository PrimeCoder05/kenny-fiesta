function Selected({option}) {
	if (option === "WEDDING") {
		return (
			<>
				<label htmlFor="name">NAME OF BRIDE</label> <span className="required">*</span><br/>
				<input type="text" name="bride-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="bride-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>

				<label htmlFor="name">NAME OF GROOM</label> <span className="required">*</span><br/>
				<input type="text" name="groom-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="groom-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "BRIDAL SHOWER") {
		return (
			<>
				<label htmlFor="name">NAME OF BRIDE-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="bride-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="bride-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>

				<label htmlFor="name">NAME OF GROOM-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="groom-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="groom-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "ENGAGEMENT PARTY") {
		return (
			<>
				<label htmlFor="name">NAME OF BRIDE-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="bride-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="bride-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>

				<label htmlFor="name">NAME OF GROOM-TO-BE</label> <span className="required">*</span><br/>
				<input type="text" name="groom-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="groom-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "ANNIVERSARY") {
		return (
			<>
				<label htmlFor="name">NAME OF WIFE</label> <span className="required">*</span><br/>
				<input type="text" name="wife-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="wife-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>

				<label htmlFor="name">NAME OF HUSBAND</label> <span className="required">*</span><br/>
				<input type="text" name="husband-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="husband-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "BABY SHOWER") {
		return (
			<>
				<label htmlFor="name">NAME OF MOTHER</label> <span className="required">*</span><br/>
				<input type="text" name="mother-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="mother-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>

				<label htmlFor="name">NAME OF FATHER</label> <span className="required">*</span><br/>
				<input type="text" name="father-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="father-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "GENDER REVEAL") {
		return (
			<>
				<label htmlFor="name">NAME OF MOTHER</label> <span className="required">*</span><br/>
				<input type="text" name="mother-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="mother-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>

				<label htmlFor="name">NAME OF FATHER</label> <span className="required">*</span><br/>
				<input type="text" name="father-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="father-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "GRADUATION PARTY") {
		return (
			<>
				<label htmlFor="name">NAME OF GRADUATE</label> <span className="required">*</span><br/>
				<input type="text" name="graduate-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="graduate-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "RETIREMENT PARTY") {
		return (
			<>
				<label htmlFor="name">NAME OF RETIREE</label> <span className="required">*</span><br/>
				<input type="text" name="retiree-first-name" id="name" placeholder="First Name" className="double-inputs" required /> <input type="text" name="retiree-last-name" id="name" placeholder="Last Name" className="double-inputs" required /> <br/><br/>
			</>
		);

	} else if (option === "CORPORATE EVENT") {
		return (
			<>
				<label htmlFor="name">TYPE OF INDUSTRY</label> <span className="required">*</span><br/>
				<input type="text" name="industry-type" id="name" required /> <br/><br/>
			</>
		);

	} else if (option === "RETAIL EVENT") {
		return (
			<>
				<label htmlFor="name">TYPE OF STORE</label> <span className="required">*</span><br/>
				<input type="text" name="store-type" id="name" required /> <br/><br/>
			</>
		);

	} else {
		return "\n"
	}
}

export default Selected;