import React, { useContext } from 'react';
import { UserContext } from '../context/user';

function BMI() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>No user data available</div>;
  }

  const { height, weight } = user;
  const bmi = (weight / (height * height)).toFixed(2); // Calculate BMI and format to 2 decimal places

  return (
    <div>
      <h1>BMI: {bmi}</h1>
      <p>(Based on height: {height} m and weight: {weight} kg)</p>
    </div>
  );
}

export default BMI;
