// Notifications.jsx

import React, { useState } from 'react';
import '../css/Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Alice vous a envoyé un message.' },
    { id: 2, text: 'Bob est intéressé par votre plante.' },
    // Ajoutez plus de notifications ici
  ]);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <div className="notification-list">
        {notifications.map(notification => (
          <div key={notification.id} className="notification-item">
            <p>{notification.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
