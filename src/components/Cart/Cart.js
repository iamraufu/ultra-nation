import React from 'react';
import './Cart.css';

const Cart = (props) => {
      const cart = props.cart;
      const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
      return (
            <div className="cart">
                  <p>Countries: {cart.length} Total Population: {totalPopulation}</p>
            </div>
      );
};

export default Cart;