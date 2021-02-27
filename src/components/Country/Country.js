import React from 'react';
import './Country.css';

const Country = (props) => {
      const {name,area, capital,flag,population,region,subregion} = props.country;
      return (
            <div className="country">
                  <h1>Country Name: <strong>{name}</strong></h1>
                  <p>Area: {area}</p>
                  <p>Capital: {capital}</p>
                  <img src={flag} alt="country-flag"/>
                  <p>Population: {population}</p>
                  <p>Region: {region}</p>
                  <p>Sub-region: {subregion}</p>
                  
            </div>
      );
};

export default Country;