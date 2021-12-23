import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 15,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      <Button variant="contained">Home</Button>
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      <Button variant="contained">Contacts</Button>
    </NavLink>
  </nav>
);

export default Navigation;
