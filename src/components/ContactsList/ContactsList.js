import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { nanoid } from 'nanoid';
import { getContacts, getFilteredContact } from 'redux/contactSlice';
import { useSelector } from 'react-redux';

import css from '../ContactsList/ContactsList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContact);

  const onFiltr = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <ul className={css.list}>
        {onFiltr().map(({ name, number, id }) => {
          return (
            <ContactsItem key={nanoid()} name={name} number={number} id={id} />
          );
        })}
      </ul>
    </div>
  );
};
