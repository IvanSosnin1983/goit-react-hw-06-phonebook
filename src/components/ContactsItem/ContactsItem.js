import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletedContact } from 'redux/contactSlice';
import css from '../ContactsItem/ContactsItem.module.css';

export const ContactsItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deletedContact(contactId));
  };
  return (
    <li className={css.item}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)} className={css.button}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
