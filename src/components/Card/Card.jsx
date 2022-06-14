import React from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import css from './Card.module.css';

const Card = ({ countryInfo }) => {
  const id = countryInfo.country?.toString();

  return (
    <div className={css.card}>
      <NavLink className={css.navLink} to={generatePath(`/countries/${id}`)}>
        <h1 className={css.countryName}>{countryInfo.country}</h1>
        <img src={countryInfo.countryInfo?.flag} alt='flag' />
        <p>Cases - {countryInfo.cases}</p>
        <p>Cases Per One Million - {countryInfo.casesPerOneMillion}</p>
        <p>Deaths - {countryInfo.deaths}</p>
        <p>Deaths Per One Million - {countryInfo.deathsPerOneMillion}</p>
        <p>Recovered - {countryInfo.recovered}</p>
        <p>Recovered Per One Million - {countryInfo.recoveredPerOneMillion}</p>
      </NavLink>
    </div>
  );
};

export default Card;
