import React, { useState } from 'react';

function UserStatusSwitcher() {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => {
    setIsOnline((prev) => !prev);
  };

  return (
    <div>
      <h3 style={{ color: isOnline ? 'green' : 'red' }}>
        {isOnline ? 'Online' : 'Offline'}
      </h3>
      <button onClick={toggleStatus}>
        {isOnline ? 'Go Offline' : 'Go Online'}
      </button>
    </div>
  );
}

export default UserStatusSwitcher;