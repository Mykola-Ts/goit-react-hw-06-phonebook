import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { filterContacts } from 'redux/filterSlice';
import {
  FilterLabel,
  FilterInput,
  SearchIcon,
  WrapperInput,
  ResetBtn,
} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    const value = evt.currentTarget.value.trim();

    dispatch(filterContacts(value));
  };

  const onReset = evt => {
    const label = evt.currentTarget.closest('label');
    label.control.value = '';

    dispatch(filterContacts(''));
  };

  return (
    <>
      <FilterLabel>
        Find contact by name or number
        <WrapperInput>
          <FilterInput
            type="text"
            placeholder="Name or number"
            onChange={onChange}
          />
          <SearchIcon />
          <ResetBtn type="button" onClick={onReset}>
            <AiOutlineClose />
          </ResetBtn>
        </WrapperInput>
      </FilterLabel>
    </>
  );
};
