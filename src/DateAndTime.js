function DateAndTime() {
	return (
		<div>
			<label htmlFor="event-date">Date of Event</label><br/>
         <input type="text" name="event-date" id="event-date" placeholder="Saturday, May 4, 2024" required /><br/><br/>

			<label htmlFor="event-time">Time of Event</label><br/>
			<input type="time" name="event-time" id="event-time" required />
		</div>
	);
}

export default DateAndTime;