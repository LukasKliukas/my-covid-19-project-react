import React from 'react';
import css from './Card.module.css';

const Card = ({ countryInfo }) => {
  return (
    <div className={css.card}>
      <h1 className={css.countryName}>{countryInfo.country}</h1>
      <img src={countryInfo.countryInfo.flag} alt='flag' />
      <p>Cases - {countryInfo.cases}</p>
      <p>Cases Per One Million - {countryInfo.casesPerOneMillion}</p>
      <p>Deaths - {countryInfo.deaths}</p>
      <p>Deaths Per One Million - {countryInfo.deathsPerOneMillion}</p>
      <p>Recovered - {countryInfo.recovered}</p>
      <p>Recovered Per One Million - {countryInfo.recoveredPerOneMillion}</p>
    </div>
  );
};

export default Card;
