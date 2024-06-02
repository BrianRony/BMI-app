import React, { useContext } from 'react';
import { UserContext } from '../context/user';

function BMI() {
  const { users } = useContext(UserContext);

  if (!users || users.length === 0) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      {users.map((user, index) => {
        const { height, weight } = user;
        const bmi = (weight / (height * height)).toFixed(2); // Calculate BMI and format to 2 decimal places
        return (
          <div key={index}>
            <h1>BMI: {bmi}</h1>
            <p>(Based on height: {height} m and weight: {weight} kg)</p>
          </div>
        );
      })}
    </div>
  );
}

export default BMI;
