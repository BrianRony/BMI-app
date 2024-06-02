import React, { useState, createContext } from "react";
import userData from '../data'; // Import the user data array

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState(userData); // Initialize state with imported data

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
