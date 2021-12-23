import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts &&
        contacts.map(contact => (
          <li key={contact.id}>
            <div className={s.nameBox}>
              <PermContactCalendarIcon />
              <p>
                {contact.name}: <span>{contact.number}</span>
              </p>
            </div>

            <Button
              variant="contained"
              type="submit"
              startIcon={<DeleteIcon />}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </Button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default ContactList;
