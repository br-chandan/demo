import React, { Component } from 'react';

class RestaurantList extends Component {
  render() {
    const restaurants = [
      {
        name: 'Pizza Place',
        menu: ['Margherita', 'Pepperoni', 'Veggie']
      },
      {
        name: 'Burger House',
        menu: ['Cheeseburger', 'Veg Burger', 'Fries']
      },
      {
        name: 'Curry Corner',
        menu: ['Butter Chicken', 'Paneer Tikka', 'Naan']
      }
    ];

    return (
  <div>
    {restaurants.map((r, i) => (
      <div key={i}>
        <h3>{r.name}</h3>
        <ul>
          {r.menu.map((m, j) => <li key={j}>{m}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

  }
}

export default RestaurantList;
