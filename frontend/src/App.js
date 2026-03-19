import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import axios from "axios";


function App() {
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/test/")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>PitchMetrics</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
