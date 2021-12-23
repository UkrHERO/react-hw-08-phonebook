import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 500,
    color: '#fff',
  },
  activeLink: {},
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <Button variant="contained">Register</Button>
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        <Button variant="contained" startIcon={<LoginIcon />}>
          Sign in
        </Button>
      </NavLink>
    </div>
  );
}
