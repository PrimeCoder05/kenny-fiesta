function DateAndTime() {
	return (
		<>
			<label htmlFor="event-date">DATE OF EVENT</label> <span>*</span><br/>
         <input type="text" name="event-date" id="event-date" placeholder="Saturday, May 4, 2024" required /> <br/><br/>

			<label htmlFor="event-time">TIME OF EVENT</label> <span>*</span><br/>
			<input type="time" name="event-time" id="event-time" required /> <br/><br/>
		</>
	);
}

export default DateAndTime;