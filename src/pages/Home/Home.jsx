import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Container from '../../components/UI/Container/Container';
import css from './Home.module.css';

const API_URL = 'https://disease.sh/v3/covid-19';

const Home = () => {
  const [countriesArr, setCountriesArr] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const resp = await fetch(`${API_URL}/countries`);
      const dataFromApi = await resp.json();
      console.log('dataFromApi ===', dataFromApi);
      setCountriesArr(dataFromApi);
      return dataFromApi;
    } catch (error) {
      console.log('dataFromApi error', error);
      return false;
    }
  };

  return (
    <Container className={css.grid}>
      {countriesArr.map((country) => (
        <Card countryInfo={country} key={country.country} />
      ))}
    </Container>
  );
};

export default Home;
