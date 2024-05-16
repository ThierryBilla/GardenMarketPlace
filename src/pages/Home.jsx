// Home.jsx

import React from 'react';
import '../css/Home.css'; 
import Header from '../components/Header';

function Home() {
  return (
    <div className="home">
    {/* Ajout du composant Header */}
    <Header />

    {/* Ajoutez ici le reste du contenu de la page */}
  </div>
  );
}

export default Home;
