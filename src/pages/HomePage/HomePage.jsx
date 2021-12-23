import React from 'react';
import s from './HomePage.module.css';

const HomePage = () => (
  <div className={s.HomeBox}>
    <div className={s.words}>
      <span>W</span>
      <span>E</span>
      <span>L</span>
      <span>C</span>
      <span>O</span>
      <span>M</span>
      <span>E</span>
    </div>

    <div className={s.words}>
      <span>T</span>
      <span>O</span>
    </div>

    <div className={s.words}>
      <span>P</span>
      <span>H</span>
      <span>O</span>
      <span>N</span>
      <span>E</span>
      <span>B</span>
      <span>O</span>
      <span>O</span>
      <span>K</span>
    </div>
  </div>
);

export default HomePage;
