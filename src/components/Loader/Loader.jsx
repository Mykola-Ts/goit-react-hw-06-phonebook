import { RotatingLines } from 'react-loader-spinner';
import { Wrapper, Text } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="1"
        width="72"
        visible={true}
      />
      <Text>Loading data, please wait...</Text>
    </Wrapper>
  );
};
