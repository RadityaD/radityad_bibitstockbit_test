import styled from 'styled-components';
import { theWhite, theGray, theBlack } from '@/styles/colors';

const Button = styled.div`
  display: inline-flex;
  background-color: ${theGray};
  border: 2px solid ${theBlack};
`;

export const ButtonView = styled(Button)`
  width: 50px;
  height: 50px;
  background-image: url('/ic_poster_white.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 30px 30px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

export const PosterContainer = styled.div`
  display: inline-flex;
  position: relative;
  width: calc((100% / 4) - 20px);
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  & .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    transition: opacity 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    opacity: 0;
  }
  & .text {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${theWhite};
    position: absolute;
    width: 100%;
    display: block;
    text-align: center;
    padding: 8px;
    top: 0;
    left: 0;
    & > span {
      position: relative;
      z-index: 1;
      display: block;
      width: 100%;
      top: -20px;
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    }
  }
  &:hover {
    & .overlay {
      opacity: 1;
    }
    & .text > span {
      top: 0;
      opacity: 1;
      transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    }
  }
`;
