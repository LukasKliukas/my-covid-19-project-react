import React from 'react';
import css from './Country.module.css';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';

const API_URL = 'https://disease.sh/v3/covid-19';

const Country = () => {
  const { id } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const resp = await fetch(`${API_URL}/countries/${id}`);
      const dataFromApi = await resp.json();
      setCountry(dataFromApi);
      return dataFromApi;
    } catch (error) {
      console.log('dataFromApi error', error);
      return false;
    }
  };

  return <Card countryInfo={country}>Country</Card>;
};

export default Country;
