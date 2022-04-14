import aa from "./aa.jpg"
import './App.css';
import Tabs from './Tabs';

function App() {
  return (
    <div className="App">
      <h1>ABOUT</h1>
      <header className="App-header" >
        
      <img src={aa} alt="Logo" />
        <div className="tbs"><Tabs /></div>

      </header>
    </div>
  );
}

export default App;
