import React from 'react';
import './countries.css';

function CountryList() {
  const countries = [
    { name: 'India', capital: 'New Delhi' },
    { name: 'USA', capital: 'Washington, D.C.' },
    { name: 'France', capital: 'Paris' },
    { name: 'Japan', capital: 'Tokyo' },
    { name: 'Australia', capital: 'Canberra' },
  ];

  return (
    <ul className="country-list">
      {countries.map((c, i) => (
        <li key={i} className="country-item">
          <strong>{c.name}</strong> - {c.capital}
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
