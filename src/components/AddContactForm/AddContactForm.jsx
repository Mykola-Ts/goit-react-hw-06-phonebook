import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-hot-toast';
import { IoMdPersonAdd } from 'react-icons/io';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import {
  ContactInput,
  ContactLabel,
  Error,
  NameInputIcon,
  NumberInputIcon,
  SubmitButton,
  WrapperInput,
} from './AddContactForm.styled';

const contactSchema = object({
  name: string()
    .required('This field is required!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]?[- ']*)*$",
      `Name may contain only letters, apostrophe, dash and spaces.
      For example Adrian, Jacob Mercer Charles de Batz de Castelmore d'Artagnan`
    )
    .min(
      2,
      'The name is short! Please enter a name with at least 2 characters.'
    )
    .trim(),
  number: string()
    .required('This field is required!')
    .matches(
      /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.'
    )
    .min(
      5,
      'The number is short! Please enter a number with at least 5 characters.'
    )
    .max(
      18,
      'The number is long! Please enter a number with at more 18 characters.'
    ),
});

export const AddContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }, { resetForm }) => {
    const isIncludesName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isIncludesNumber = contacts.find(
      contact => contact.number === number
    );

    if (isIncludesName || isIncludesNumber) {
      const warningText = `${
        isIncludesName ? name : `Number ${number}`
      } is already in contacts`;

      toast.remove();
      toast.error(warningText);

      return;
    }

    dispatch(addContact(name, number));

    toast.remove();
    toast.success(`${name} added to contacts`);

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <ContactLabel>
          Name
          <WrapperInput>
            <ContactInput
              type="text"
              name="name"
              placeholder="First name Last name"
            />
            <NameInputIcon size={18} />
          </WrapperInput>
          <ErrorMessage name="name" component={Error} />
        </ContactLabel>

        <ContactLabel>
          Number
          <WrapperInput>
            <ContactInput type="tel" name="number" placeholder="000-00-00" />
            <NumberInputIcon />
          </WrapperInput>
          <ErrorMessage name="number" component={Error} />
        </ContactLabel>

        <SubmitButton type="submit">
          <IoMdPersonAdd size={20} />
          Add contact
        </SubmitButton>
      </Form>
    </Formik>
  );
};
