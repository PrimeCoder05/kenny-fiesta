function DateAndTime() {
	return (
		<>
			<label htmlFor="event-date">DATE OF EVENT</label> <span>*</span><br/>
         <input type="date" name="event-date" id="event-date" required /> <br/><br/>

			<label htmlFor="event-time">TIME OF EVENT</label> <span>*</span><br/>
			<input type="time" name="event-time" id="event-time" required /> <br/><br/>
		</>
	);
}

export default DateAndTime;