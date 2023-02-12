import logo from './logo.svg';
import './App.css';
import Cards from './components/cards';
import examplesArray from './data/examples';

function App() {
  return (
    <div className="App">
      <Cards cardsContent={examplesArray} />
    </div>
  );
}

export default App;
