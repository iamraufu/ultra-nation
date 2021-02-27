import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
        const name = data.map(country=>country.name)
        console.log(name);
      }
      )
      .catch(error =>console.log(error))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Loaded: {countries.length}</h1>
        {
          countries.map(country=><h1>{country.name}</h1>)
        }
        <h1>{countries.name}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
