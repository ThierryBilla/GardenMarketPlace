// Home.jsx

import React from 'react';
import '../css/Home.css'; 
import Header from '../components/Header';
import RecommendedForYou from '../components/RecommendedForYou';
import EventsCloseToYou from '../components/EventsCloseToYou';
import FooterNavbar from '../components/FooterNavbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  return (
    <div className="home">
    <Header />
    <RecommendedForYou />
    <EventsCloseToYou />
    <FooterNavbar />

    {/* Ajoutez ici le reste du contenu de la page */}
  </div>
  );
}

export default Home;
