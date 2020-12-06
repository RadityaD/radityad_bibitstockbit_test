import styled from 'styled-components';
import { theGray, theGray2, theBlack } from '@/styles/colors';

export const Button = styled.div`
  display: inline-flex;
  background-color: ${theGray};
  border: 2px solid ${theBlack};
  cursor: pointer;
  &:hover {
    background-color: ${theGray2};
  }
`;

export const ButtonCircular = styled(Button)`
  border-radius: 50%;
`;
