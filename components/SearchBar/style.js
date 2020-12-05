import styled from 'styled-components';
import { theBlack, theWhite, theRed } from '@/styles/colors';

export const SearchContainer = styled.div`
  position: sticky;
  display: flex;
  width: 100%;
  height: 66px;
  background-color: ${theWhite};
  border-radius: 999px;
  overflow: hidden;
  background-image: linear-gradient(
    -15deg,
    ${theRed} 0%,
    ${theBlack} 25%,
    ${theBlack} 100%
  );
  &:before {
    content: '';
    background: url('/ic_search.svg') no-repeat;
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-size: cover;
  }
  & input {
    display: block;
    width: 100%;
    margin: 6px;
    padding-left: 5.5rem;
    border: none;
    border-radius: 999px;
    outline: none;
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
  }
`;
