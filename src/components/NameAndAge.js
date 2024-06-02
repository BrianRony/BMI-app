import React, { useContext } from 'react';
import { UserContext } from '../context/user';

function NameAndAge() {
  const { users } = useContext(UserContext);

  if (!users || users.length === 0) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h2>Name: {user.name}</h2>
          <h2>Age: {user.age}</h2>
        </div>
      ))}
    </div>
  );
}

export default NameAndAge;
