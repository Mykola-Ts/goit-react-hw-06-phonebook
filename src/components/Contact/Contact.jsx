import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { GoTrash } from 'react-icons/go';
import { deleteContact } from 'redux/contactsSlice';
import { Button, ContactInfo, ContactNumber } from './Contact.styled';

export const Contact = ({ contact = {} }) => {
  const dispatch = useDispatch();

  const onDelete = (id, name) => {
    dispatch(deleteContact(id));

    toast.remove();
    toast.success(`${name} deleted from contacts`);
  };

  const { id, name, number } = contact;

  return (
    <>
      <ContactInfo>{`${name}: `}</ContactInfo>
      <ContactNumber>{number}</ContactNumber>

      <Button type="button" onClick={() => onDelete(id, name)}>
        <GoTrash size={20} />
        <p>Delete</p>
      </Button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
