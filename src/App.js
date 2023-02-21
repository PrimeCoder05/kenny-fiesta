import './App.css';
// import './Normalize.css';
import Header from './Header';
import DateAndTime from './DateAndTime';

function App() {
  return (
    <div>
      <Header />
      <form action='#'>
        <DateAndTime />
      </form>
    </div>
  );
}

export default App;
