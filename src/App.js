import React from 'react';
import { UserProvider } from './context/user';
import NameAndAge from './components/NameAndAge';
import BMI from './components/BmiCalc';

function App() {
  return (
    <UserProvider>
      <NameAndAge />
      <BMI />
    </UserProvider>
  );
}

export default App;
