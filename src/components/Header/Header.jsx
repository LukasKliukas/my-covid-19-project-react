import React from 'react';
import css from './Header.module.css';
import Container from '../UI/Container/Container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container className={css.container}>
      <img
        className={css.logo}
        src='images/covid-19-logo.jpg'
        alt='covid19-logo'
      />
      <nav>
        <Link className={css.link} to='/'>
          Home
        </Link>
      </nav>
    </Container>
  );
};

export default Header;
