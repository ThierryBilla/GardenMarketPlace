import React, { useState } from 'react';
import styles from '../css/FooterNavbar.module.css';
import { IoMdHome } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function FooterNavbar() {
  const [selectedLink, setSelectedLink] = useState(""); // État pour suivre le lien sélectionné
  const location = useLocation(); // Pour obtenir le chemin de l'URL actuelle

  // Définir l'état du lien sélectionné en fonction de l'URL actuelle
  useState(() => {
    const path = location.pathname;
    if (path === "/") setSelectedLink("home");
    else if (path === "/products") setSelectedLink("products");
    else if (path === "/calendar") setSelectedLink("calendar");
    else if (path === "/mailbox") setSelectedLink("mailbox");
    else if (path === "/profile") setSelectedLink("profile");
  }, [location.pathname]);

  return (
    <footer className={styles['footer-navbar']}>
      <div className={styles.icon}>
        <Link to="/" onClick={() => setSelectedLink("home")} style={{ color: selectedLink === "home" ? "#3F7654" : "#3A3A3A" }}><IoMdHome /></Link>
      </div>
      <div className={styles.icon}>
        <Link to="/products" onClick={() => setSelectedLink("products")} style={{ color: selectedLink === "products" ? "#3F7654" : "#3A3A3A" }}><AiFillAppstore /></Link>
      </div>
      <div className={styles.icon}>
        <Link to="/calendar" onClick={() => setSelectedLink("calendar")} style={{ color: selectedLink === "calendar" ? "#3F7654" : "#3A3A3A" }}><FaCalendarAlt /></Link>
      </div>
      <div className={styles.icon}>
        <Link to="/mailbox" onClick={() => setSelectedLink("mailbox")} style={{ color: selectedLink === "mailbox" ? "#3F7654" : "#3A3A3A" }}><IoChatbubbles /></Link>
      </div>
      <div className={styles.icon}>
        <Link to="/profile" onClick={() => setSelectedLink("profile")} style={{ color: selectedLink === "profile" ? "#3F7654" : "#3A3A3A" }}><FaUser /></Link>
      </div>
    </footer>
  );
}

export default FooterNavbar;
