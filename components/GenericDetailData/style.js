import styled from 'styled-components';
import { theGray3, theWhite } from '@/styles/colors';

export const GDContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${theGray3};
  padding: 20px 0;
  flex-basis: 100%;
`;

export const TitleTxt = styled.div`
  display: block;
  width: 100%;
  font-size: 20px;
  font-weight: 800;
  color: ${theWhite};
`;

export const ContentTxt = styled(TitleTxt)`
  font-size: 14px;
  font-weight: 400;
`;
