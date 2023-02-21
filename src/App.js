import './App.css';
// import './Normalize.css';
import Header from './Header';
import DateAndTime from './DateAndTime';
import Select from './Select';

function App() {
  return (
    <div>
      <Header />
      <form action='#'>
        <DateAndTime />
        <Select />
        
      </form>
    </div>
  );
}

export default App;
