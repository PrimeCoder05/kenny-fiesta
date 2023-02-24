import './App.css';
// import './Normalize.css';
import Header from './components/Header';
import DateAndTime from './components/DateAndTime';
import Select from './components/Select';
import PersonalInfo from './components/PersonalInfo';
import Details from './components/Details';
import React, { useState } from 'react';
import Selected from './components/Selected';
import Submit from './components/Submit';

function App() {

  const [selected, setSelected] = useState("EVENT");

  return (
    <div className='wrapper'>
      <Header />
      <form action='#'>
        <DateAndTime />
        <Select setSelected={setSelected}/>
        <PersonalInfo />
        <Details />
        <Selected option={selected} />
        <Submit />
      </form>
    </div>
  );
}

export default App;
