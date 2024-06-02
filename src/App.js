import React from 'react';
import { UserProvider } from './context/user';
import NameAndAge from './components/NameAndAge';

function App() {
  return (
    <UserProvider>
      <NameAndAge />
    </UserProvider>
  );
}

export default App;
