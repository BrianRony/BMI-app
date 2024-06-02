import React from 'react';
import { UserProvider } from './context/user';
import NameAndAge from './components/NameAndAge';
import BMI from './components/BmiCalc';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <UserProvider>
      <div className="app-container">
        <div className="left-panel">
          <NameAndAge />
        </div>
        <div className="right-panel">
          <BMI />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
