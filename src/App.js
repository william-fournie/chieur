import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carte from './Carte.js'

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/*  */}
        <Appi />
        {/*  */}
      </header>
    </div>
  );
}

const Appi = () => {

  const [getBob, setBob] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then( resp => resp.json())
      .then( data => setBob(data.data.memes))
  }, []);
  return <Carte element={getBob}/>
};

export default App;
