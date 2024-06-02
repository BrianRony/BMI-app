import React, { useContext } from 'react';
import { UserContext } from '../context/user';

function NameAndAge() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>
    </div>
  );
};

export default NameAndAge;
