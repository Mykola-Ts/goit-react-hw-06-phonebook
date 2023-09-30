import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';

const Home = () => {
  useEffect(() => {
    return () => {
      toast.remove();
    };
  }, []);

  return (
    <main>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>
    </main>
  );
};

export default Home;
