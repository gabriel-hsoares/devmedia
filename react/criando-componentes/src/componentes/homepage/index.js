import React from 'react';

import Card from '../card/';
import './style.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <Card />
      <Card />
      <Card />
    </div>
  );
}