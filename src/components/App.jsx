import { useState, useEffect } from 'react';
import css from './App.module.css';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const LS_KEY = 'Saved_contacts';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedContacts) {
      return savedContacts;
    }
    return defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitContacts = data => {
    const nameIsExist = isContactNameExist(contacts, data.name);
    if (nameIsExist) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    setContacts(prevState => {
      return [...prevState, { ...data }];
    });
  };

  const filterContacts = filterValue => {
    setFilter(filterValue);
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const isContactNameExist = (contacts, name) => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitContacts} />
      </Section>
      <Section title="Contacts">
        <Filter filterValue={filter} onFilter={filterContacts} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={deleteContact}
        ></ContactsList>
      </Section>
    </div>
  );
}
