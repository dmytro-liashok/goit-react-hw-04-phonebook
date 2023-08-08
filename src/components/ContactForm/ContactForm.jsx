import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const nameId = nanoid();
const telId = nanoid();

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('ops');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    onSubmit(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
      <label htmlFor={nameId} className={css.label}>
        Name
        <input
          className={css.input}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={telId} className={css.label}>
        Number
        <input
          className={css.input}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          id={telId}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.btnSubmit}>
        Add contact
      </button>
    </form>
  );
}
