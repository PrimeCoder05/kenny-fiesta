function Details() {
	return (
		<>
			<label htmlFor='communication-method'>PREFERRED METHOD OF COMMUNICATION</label> <span>*</span><br/>
        	<select name='communication-method' id='communication-method' required>
				<option>Please Select</option>
				<option value="PHONE CALL">PHONE CALL</option>
				<option value="E-MAIL">E-MAIL</option>
				<option value="VIDEO CALL">VIDEO CALL</option>
				<option value="DIRECT MESSAGE ON SOCIAL MEDIA">DIRECT MESSAGE ON SOCIAL MEDIA</option>
			</select><br/><br/>

			<label htmlFor="referred-by">REFERRED BY</label><br/>
			<input type="text" name="referred-by" id="referred-by" placeholder="(optional) Please enter the name of who told you to contact me." /> <br/><br/>

			<label htmlFor="details">ADDITIONAL DETAILS</label><br/>
			<textarea name="additional-details" id="details" placeholder="(optional) Please tell me more details about your event."></textarea> <br/><br/>
		</>
	);
}

export default Details;