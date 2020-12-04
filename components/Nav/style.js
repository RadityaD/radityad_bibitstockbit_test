import styled from 'styled-components';
import { theWhite } from '@/styles/colors';

export const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgba(20, 20, 20);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
  padding: 0 24px;
`;

export const NavItems = styled.div`
  color: ${theWhite};
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 0 24px;
  margin-left: -24px;
  transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.8;
  }
`;
