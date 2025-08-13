import React from 'react';
import './landmark.css'; // Importing external CSS

const landmarks = [
  { name: 'Eiffel Tower', location: 'Paris', country: 'France' },
  { name: 'Great Wall of China', location: 'Beijing', country: 'China' },
  { name: 'Taj Mahal', location: 'Agra', country: 'India' },
  { name: 'Statue of Liberty', location: 'New York', country: 'USA' },
  { name: 'Machu Picchu', location: 'Cusco Region', country: 'Peru' },
  { name: 'Colosseum', location: 'Rome', country: 'Italy' }
];

const LandmarkGrid = () => {
  return (
    <div className="grid-container">
      {landmarks.map((landmark, index) => (
        <div className="grid-item" key={index}>
          <h3>{landmark.name}</h3>
          <p>{landmark.location}, {landmark.country}</p>
        </div>
      ))}
    </div>
  );
};

export default LandmarkGrid;
