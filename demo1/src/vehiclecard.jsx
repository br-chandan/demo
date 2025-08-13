import React from 'react';

function VehicleCard() {
  const vehicles = [
    { model: 'Model S', manufacturer: 'Tesla', year: 2022, fuel: 'Electric' },
    { model: 'Civic', manufacturer: 'Honda', year: 2021, fuel: 'Petrol' },
    { model: 'Corolla', manufacturer: 'Toyota', year: 2020, fuel: 'Diesel' },
    { model: 'Mustang', manufacturer: 'Ford', year: 2019, fuel: 'Petrol' },
    { model: 'X5', manufacturer: 'BMW', year: 2023, fuel: 'Hybrid' },
  ];

  const cardStyle = {
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    width: '180px',
    textAlign: 'center',
  };

  // const containerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
    
  // };

  return (
    <div>
      {vehicles.map((v, i) => (
        <div key={i} style={cardStyle}>
          <h3>{v.model}</h3>
          <p><b>Maker:</b> {v.manufacturer}</p>
          <p><b>Year:</b> {v.year}</p>
          <p><b>Fuel:</b> {v.fuel}</p>
        </div>
      ))}
    </div>
  );
};

export default VehicleCard;


// const Exe1 = () => {
//   const contStyle = {
//     display: "flex",
//     gap: "10px",
//   };

//   const cardStyle = {
//     backgroundColor: "white",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "15px",
//     width: "250px", // Fixed width for each card
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   };

//   return (
//     <div style={contStyle}>
//       {/* First Vehicle Card */}
//       <div style={cardStyle}>
//         <h4>Vehicle Information</h4>
//         <p>
//           <strong>Model:</strong> Tesla Model 5
//         </p>
//         <p>
//           <strong>Manufacturer:</strong> Tesla
//         </p>
//         <p>
//           <strong>Year:</strong> 2022
//         </p>
//         <p>
//           <strong>Fuel Type:</strong> Electric
//         </p>
//       </div>

//       {/* Second Vehicle Card */}
//       <div style={cardStyle}>
//         <h4>Vehicle Information</h4>
//         <p>
//           <strong>Model:</strong> Ford Mustang
//         </p>
//         <p>
//           <strong>Manufacturer:</strong> Ford
//         </p>
//         <p>
//           <strong>Year:</strong> 2023
//         </p>
//         <p>
//           <strong>Fuel Type:</strong> Gasoline
//         </p>
//       </div>

//       {/* Third Vehicle Card */}
//       <div style={cardStyle}>
//         <h4>Vehicle Information</h4>
//         <p>
//           <strong>Model:</strong> Chevrolet Bolt
//         </p>
//         <p>
//           <strong>Manufacturer:</strong> Chevrolet
//         </p>
//         <p>
//           <strong>Year:</strong> 2024
//         </p>
//         <p>
//           <strong>Fuel Type:</strong> Gasoline
//         </p>
//       </div>

//       {/* Fourth Vehicle Card */}
//       <div style={cardStyle}>
//         <h4>Vehicle Information</h4>
//         <p>
//           <strong>Model:</strong> BMW 6 Series
//         </p>
//         <p>
//           <strong>Manufacturer:</strong> BMW
//         </p>
//         <p>
//           <strong>Year:</strong> 2020
//         </p>
//         <p>
//           <strong>Fuel Type:</strong> Diesel
//         </p>
//       </div>

//       {/* Fifth Vehicle Card */}
//       <div style={cardStyle}>
//         <h4>Vehicle Information</h4>
//         <p>
//           <strong>Model:</strong> Audi A7
//         </p>
//         <p>
//           <strong>Manufacturer:</strong> Audi
//         </p>
//         <p>
//           <strong>Year:</strong> 2022
//         </p>
//         <p>
//           <strong>Fuel Type:</strong> Hybrid
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Exe1;