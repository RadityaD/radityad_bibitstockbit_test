import styled from 'styled-components';
import { theWhite } from '@/styles/colors';

export const Container = styled.div`
  display: block;
  width: 1024px;
  height: auto;
  margin: 0 auto;
  margin-top: 42px;
`;

export const TitleText = styled.div`
  display: block;
  font-size: 2rem;
  font-weight: 800;
  text-transform: capitalize;
  color: ${theWhite};
  margin: 8px 0;
`;
