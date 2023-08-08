import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  telId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      ...this.state,
    };
    this.props.onSubmit(newContact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={css.form}
        autoComplete="off"
      >
        <label htmlFor={this.nameId} className={css.label}>
          Name
          <input
            className={css.input}
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={this.telId} className={css.label}>
          Number
          <input
            className={css.input}
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            id={this.telId}
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
}

export default ContactForm;
