import './App.css';
// import './Normalize.css';
import Header from './Header';
import DateAndTime from './DateAndTime';
import Select from './Select';
import PersonalInfo from './PersonalInfo';

function App() {
  return (
    <div>
      <Header />
      <form action='#'>
        <DateAndTime />
        <Select />
        <PersonalInfo />
      </form>
    </div>
  );
}

export default App;
