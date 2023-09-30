import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.header`
  width: 100%;
  border-radius: 0 0 8px 8px;

  background-color: var(--white-color);
  box-shadow: var(--box-shadow);
`;

export const Wrapper = styled.div`
  max-width: 768px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const NavList = styled.div`
  display: flex;
  gap: 16px;

  max-width: 768px;
`;

export const StyledLink = styled(NavLink)`
  display: block;

  padding: 16px 4px;

  text-decoration: none;
  font-weight: 700;

  color: currentColor;

  transition: color var(--transition-duration) var(--transition-timing-function);

  &.active,
  &:is(:hover, :focus) {
    color: var(--blue-color);
  }
`;
