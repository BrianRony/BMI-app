import React, { useState } from "react";
import userData from "../data";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(userData);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
