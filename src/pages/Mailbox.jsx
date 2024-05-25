// Mailbox.jsx

import React, { useState } from 'react';
import '../css/Mailbox.css';
import FooterNavbar from '../components/FooterNavbar';
import Messages from '../components/Messages';
import Notifications from '../components/Notifications';
import { IoChatbubblesOutline, IoNotificationsOutline } from "react-icons/io5";

function Mailbox() {
  const [selectedTab, setSelectedTab] = useState('messages');

  return (
    <div className="mailbox">
      <h1>Messagerie</h1>
      <div className="tabs">
        <button 
          className={selectedTab === 'messages' ? 'active' : ''} 
          onClick={() => setSelectedTab('messages')}
        >
          <IoChatbubblesOutline /> Messagerie
        </button>
        <button 
          className={selectedTab === 'notifications' ? 'active' : ''} 
          onClick={() => setSelectedTab('notifications')}
        >
          <IoNotificationsOutline /> Notifications
        </button>
      </div>
      <div className="tab-content">
        {selectedTab === 'messages' ? <Messages /> : <Notifications />}
      </div>
      <FooterNavbar />
    </div>
  );
}

export default Mailbox;
