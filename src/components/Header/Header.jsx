import { NavHeader, Wrapper, NavList, StyledLink } from './Header.styled';

export const Header = () => {
  return (
    <NavHeader>
      <Wrapper>
        <NavList>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </NavList>
      </Wrapper>
    </NavHeader>
  );
};
