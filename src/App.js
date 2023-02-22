import './App.css';
// import './Normalize.css';
import Header from './Header';
import DateAndTime from './DateAndTime';
import Select from './Select';
import PersonalInfo from './PersonalInfo';
import Details from './Details';

function App() {
  return (
    <div>
      <Header />
      <form action='#'>
        <DateAndTime />
        <Select />
        <PersonalInfo />
        <Details />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
