import styled from 'styled-components';
import { theWhite } from '@/styles/colors';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 60px;
`;

export const Loader = styled.span`
  font-size: 4rem;
  font-weight: 800;
  color: ${theWhite};
  margin: 20px auto;
  display: block;
  text-align: center;
`;
