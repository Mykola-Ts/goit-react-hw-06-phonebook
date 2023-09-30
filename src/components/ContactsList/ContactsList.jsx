import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { ListItem, NoContactsText } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const visibleContacts = useMemo(
    () =>
      contacts.filter(contact => {
        const findContactsByName = contact.name
          .toLowerCase()
          .includes(filter.toLowerCase());

        return findContactsByName
          ? findContactsByName
          : contact.number.includes(filter);
      }),
    [contacts, filter]
  );

  return visibleContacts.length ? (
    <ul>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <Contact contact={contact} />
        </ListItem>
      ))}
    </ul>
  ) : (
    <NoContactsText>No contacts found for the entered name</NoContactsText>
  );
};
