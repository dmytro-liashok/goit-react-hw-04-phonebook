import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
