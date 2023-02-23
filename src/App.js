import './App.css';
// import './Normalize.css';
import Header from './components/Header';
import DateAndTime from './components/DateAndTime';
import Select from './components/Select';
import PersonalInfo from './components/PersonalInfo';
import Details from './components/Details';
import React, { useState } from 'react';
import Selected from './components/Selected';

function App() {

  const [selected, setSelected] = useState("EVENT");

  return (
    <div>
      <Header />
      <form action='#'>
        <DateAndTime />
        <Select setSelected={setSelected}/>
        <PersonalInfo />
        <Details />
        <Selected option={selected} />
        <label htmlFor="details">ADDITIONAL DETAILS</label><br/>
			  <textarea name="additional-details" id="details" placeholder="(optional) Please tell me more details about your event."></textarea> <br/><br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
