// FooterNavbar.jsx

import React from 'react';
import '../css/FooterNavbar.css';
import { IoMdHome } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function FooterNavbar() {
  return (
    <footer className="footer-navbar">
      <div className="icon home-icon">
        <Link to="/"><IoMdHome /></Link>
      </div>
      <div className="icon product-icon">
        <Link to="/products"><AiFillAppstore /></Link>
      </div>
      <div className="icon calendar-icon">
        <Link to="/calendar"><FaCalendarAlt /></Link>
      </div>
      <div className="icon chat-icon">
        <Link to="/mailbox"><IoChatbubbles /></Link>
      </div>
      <div className="icon user-icon">
        <Link to="/profile"><FaUser /></Link>
      </div>
    </footer>
  );
}

export default FooterNavbar;
