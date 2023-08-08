import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={css.itemContact}>
          <p>
            {contact.name}: <span>{contact.number}</span>
          </p>
          <button
            className={css.btnDelete}
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            <span className={css.text}>Delete</span>
            <span className={css.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propType = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
