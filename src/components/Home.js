import React from 'react';
import './Home.css';
import bg from '../images/amazon_home.jpg';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={bg} alt="blue gradient" />
      </div>
    </div>
  );
}

export default Home;
