import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { NoContactsText } from './Constacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    return () => {
      toast.remove();
    };
  }, []);

  return (
    <main>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <NoContactsText>No contacts</NoContactsText>
        )}
      </Section>
    </main>
  );
};

export default Contacts;
