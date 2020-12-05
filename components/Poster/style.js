import styled from 'styled-components';
import { theWhite, theGray, theGray2, theBlack } from '@/styles/colors';

const Button = styled.div`
  display: inline-flex;
  background-color: ${theGray};
  border: 2px solid ${theBlack};
  cursor: pointer;
  &:hover {
    background-color: ${theGray2};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  opacity: ${(props) => (props.hover ? '1' : '0')};
  position: relative;
  bottom: ${(props) => (props.hover ? '0px' : '-20px')};
  padding: 0 8px 8px 8px;
  z-index: 1;
`;

export const ButtonView = styled(Button)`
  width: 50px;
  height: 50px;
  margin-right: 8px;
  background-image: url('/ic_poster_white.svg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 30px 30px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

export const ButtonDetail = styled(Button)`
  border-radius: 999px;
  height: 50px;
  position: relative;
  flex-grow: 1;
  text-align: center;
  z-index: 1;
  & > span {
    display: inline-flex;
    color: ${theWhite};
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  opacity: ${(props) => (props.hover ? '1' : '0')};
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
  & .posterImage {
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: auto;
  }
`;

export const PosterText = styled.div`
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
    top: ${(props) => (props.hover ? '0px' : '-20px')};
    opacity: ${(props) => (props.hover ? '1' : '0')};
    transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
`;
