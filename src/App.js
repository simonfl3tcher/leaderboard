import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" },
  { title: "Newmarket vs Purdis Heath", date: "12-12-2015", time: "11:00" },
  { title: "Fynn Valley vs Diss", date: "12-12-2015", time: "11:00" },
];

ReactDOM.render(
  <App matches={matches} />,
  document.getElementById('root')
);
