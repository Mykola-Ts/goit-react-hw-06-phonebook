import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { getContacts } from 'redux/selectors';
import { toastOptions } from '../helpers/helpers';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { NoContactsText } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <Filter />
            <Contacts />
          </>
        ) : (
          <NoContactsText>No contacts</NoContactsText>
        )}
      </Section>

      <Toaster position="top-right" toastOptions={toastOptions} />
      <GlobalStyle />
    </Layout>
  );
};
