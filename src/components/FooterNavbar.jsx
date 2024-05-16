// FooterNavbar.jsx

import React from 'react';
import '../css/FooterNavbar.css';
import { IoMdHome, } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaUser } from "react-icons/fa";



function FooterNavbar() {
  return (
    <footer className="footer-navbar">
      <div className="icon home-icon">
      <IoMdHome />
      </div>
      <div className="icon product-icon">
      <AiFillAppstore />
      </div>
      <div className="icon calendar-icon">
      <FaCalendarAlt />
      </div>
      <div className="icon chat-icon">
      <IoChatbubbles />
      </div>
      <div className="icon user-icon">
      <FaUser />
      </div>
    </footer>
  );
}

export default FooterNavbar;
