import React from 'react';
import './Country.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';

const Country = (props) => {
      const countries = props.country
      const { name, area, capital, flag, population, region, subregion,demonym} = countries;
      const handleAddCountry = props.handleAddCountry
      return (

            <div className="country-card flip-card">
                  <div className="flip-card-inner">
                  <div className="image-card flip-card-front">
                        <img className="image" src={flag} alt="country-flag" />
                  </div>
                  <div className="flip-card-back">
                  <h6><strong>{name}</strong></h6>
                  <p className="country-details">Area: {area}
                        <br />
                  Capital: {capital}
                        <br />
                  Population: {population}
                        <br />
                  Region: {region}
                        <br />
                  Sub-region: {subregion}
                        <br />
                  Nationality: {demonym}
                  </p>
                  </div>
                  </div>
                  <button onClick={() => handleAddCountry(countries)}><FontAwesomeIcon icon={faHeart} /> Add Country To Wishlist</button>
            </div>
      );
};

export default Country;