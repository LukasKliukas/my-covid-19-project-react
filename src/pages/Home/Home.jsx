import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Container from '../../components/UI/Container/Container';
import css from './Home.module.css';

const API_URL = 'https://disease.sh/v3/covid-19';

const Home = () => {
  const [countriesArr, setCountriesArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const countriesFiltered =
    countriesArr?.filter((country) => country.countryInfo._id) || [];

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      const resp = await fetch(`${API_URL}/countries`);
      const dataFromApi = await resp.json();
      console.log('dataFromApi ===', dataFromApi);
      setCountriesArr(dataFromApi);
      setSearchResult(dataFromApi);
      return dataFromApi;
    } catch (error) {
      console.log('dataFromApi error', error);
      return false;
    }
  };

  const handleSearch = (e) => {
    if (countriesArr?.length) {
      const query = e.target.value.toLowerCase();
      const searchResult = countriesFiltered?.filter((country) =>
        country.country.toLowerCase().includes(query)
      );
      setSearchQuery(query);
      setSearchResult(searchResult);
    }
  };

  return (
    <>
      <Input
        name='searchbar'
        id='search'
        label='Search your country'
        placeholder="Search country by entering it's name here"
        onChange={handleSearch}
        value={searchQuery}
      />
      <Container className={css.grid}>
        {searchResult?.map((country) => (
          <Card countryInfo={country} key={country.country} />
        ))}
      </Container>
    </>
  );
};

export default Home;
