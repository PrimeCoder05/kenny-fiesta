function Select() {
	return (
		<>
			<label htmlFor='event-type'>TYPE OF EVENT</label> <span>*</span><br/>
        	<select name='event-type' id='event-type' required>
				<option value>Please Select</option>
				<option value="WEDDING">WEDDING</option>
				<option value="BRIDAL SHOWER">BRIDAL SHOWER</option>
				<option value="ENGAGEMENT PARTY">ENGAGEMENT PARTY</option>
				<option value="ANNIVERSARY">ANNIVERSARY</option>
				<option value="BABY SHOWER">BABY SHOWER</option>
				<option value="GENDER REVEAL">GENDER REVEAL</option>
				<option value="GRADUATION">GRADUATION</option>
				<option value="RETIREMENT PARTY">RETIREMENT PARTY</option>
				<option value="CORPORATE EVENT">CORPORATE EVENT</option>
				<option value="RETAIL EVENT">RETAIL EVENT</option>
        	</select><br/><br/>
		</>
	);
}

export default Select;