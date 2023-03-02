import { useRef } from "react";

function Select({setSelected}) {
	const optionRef = useRef(null);

	function handleSelectOption(e) {
		optionRef.current = e.target.value;
		// console.log(optionRef.current)
		setSelected(optionRef.current)
	}

	return (
		<>
			<label htmlFor='event-type'>TYPE OF EVENT</label> <span className="required">*</span><br/>
        	<select onChange={handleSelectOption} name='event-type' id='event-type' required>
				<option>Please Select</option>
				<option value="WEDDING">WEDDING</option>
				<option value="BRIDAL SHOWER">BRIDAL SHOWER</option>
				<option value="ENGAGEMENT PARTY">ENGAGEMENT PARTY</option>
				<option value="ANNIVERSARY">ANNIVERSARY</option>
				<option value="BABY SHOWER">BABY SHOWER</option>
				<option value="GENDER REVEAL">GENDER REVEAL</option>
				<option value="GRADUATION PARTY">GRADUATION PARTY</option>
				<option value="RETIREMENT PARTY">RETIREMENT PARTY</option>
				<option value="CORPORATE EVENT">CORPORATE EVENT</option>
				<option value="RETAIL EVENT">RETAIL EVENT</option>
        	</select><br/><br/>
		</>
	);
}

export default Select;