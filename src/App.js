import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart);
    console.log("Added ", country.name)

  }

  return (
    <div className="App">
      <h1>All Countries</h1>
      <p>Since South Sudan became an independent state on 9 July, 2011, there are now 195 independent sovereign nations in the world, plus some 60 dependent areas, and several disputed territories, like Kosovo.

193 sovereign states are members of the United Nations and are equally represented in the UN General Assembly.
Two non-member countries have permanent observer states: the Holy See and the State of Palestine.

Below is a list of countries and areas of the world in alphabetical order, with official names and alternative designations.

Put your Cursor in the respective country flag to check details. </p>
        <div className="header">
        <p>Country Chose: {cart.length} from Total Countries: {countries.length} </p>
        <Cart cart={cart}></Cart>
        </div>
        <div className="country">
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
        </div>
    </div>
  );
}

export default App;
