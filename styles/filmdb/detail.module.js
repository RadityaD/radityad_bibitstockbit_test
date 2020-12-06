import styled from 'styled-components';
import { theWhite } from '@/styles/colors';

export const DetailContainer = styled.div`
  display: block;
  width: 100%;
  padding: 40px;
`;

export const TitleTxt = styled.h1`
  font-size: 5rem;
  font-weight: 800;
  font-family: 'Nunito', sans-serif;
  color: ${theWhite};
  margin: 0;
  padding: 0;
`;

export default { DetailContainer, TitleTxt };
