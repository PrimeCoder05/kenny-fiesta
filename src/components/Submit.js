function Submit() {
	return (
		<>
			<label htmlFor="details">ADDITIONAL DETAILS</label><br/>
			<textarea name="additional-details" id="details" placeholder="(optional) Please tell me more details about your event."></textarea> <br/><br/>
        	<input type="submit" value="Submit" />
		</>
	);
}

export default Submit;