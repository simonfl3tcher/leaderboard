// JS
import React from 'react';

// Components
import CurrentMatches from '../CurrentMatches/CurrentMatches';
import HomepageHeader from '../HomepageHeader/HomepageHeader';

const matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" },
  { title: "Newmarket vs Purdis Heath", date: "12-12-2015", time: "11:00" },
  { title: "Fynn Valley vs Diss", date: "12-12-2015", time: "11:00" },
];

const Home = () =>
  <div>
    <HomepageHeader />
    <div className="container">
      <div className="row">
        <CurrentMatches matches={matches} />
      </div>
    </div>
  </div>

export default Home;
