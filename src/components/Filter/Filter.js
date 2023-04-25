import { useSelector, useDispatch } from 'react-redux';
import { filterContact, getFilteredContact } from 'redux/contactSlice';
import css from '../Filter/Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilteredContact);
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <label className={css.label}>
      Find cocntacts by name
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={css.input}
      />
    </label>
  );
};
