import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import {
  fetchContacts,
  deleteContacts,
  createContacts,
} from '../../redux/contacts/contacts-operations';
import contactsActions from '../../redux/contacts/contacts-actions';
import {
  getContactsFiltered,
  getFilter,
} from '../../redux/contacts/contacts-selectors';
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const contacts = useSelector(getContactsFiltered);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const addContact = (name, number) => {
    const dublicate = contacts.some(c => c.name === name);
    if (dublicate) {
      return Notiflix.Report.failure(`${name} is already in contacts.`);
    }
    dispatch(createContacts({ name, number }));
    Notiflix.Notify.success(`Contact ${name} added.`);
  };

  const changeFilter = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  const deleteContact = id => {
    dispatch(deleteContacts(id)).then(() => {
      dispatch(fetchContacts());
    });
  };

  return (
    <div className={s.contactsBox}>
      <ContactForm onSubmit={addContact} />
      <div className={s.leftBox}>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default ContactsPage;
