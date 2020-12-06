import styled from 'styled-components';
import { ButtonCircular } from '@/styles/button';
import { theGray, theGray3 } from '@/styles/colors';

export const CloseButton = styled(ButtonCircular)`
  position: absolute;
  right: -20px;
  top: -20px;
  background-image: url('/ic_close_white.svg');
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 50% 50%;
  width: 40px;
  height: 40px;
`;

export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  width: auto;
  height: auto;
  margin: 0;
  padding: 60px;
  background-color: ${theGray3};
  border: 1px solid ${theGray};
  border-radius: 8px;
  top: 50%;
  left: 50%;
  z-index: 10;
  transition: all 0.35s cubic-bezier(0.83, 0, 0.17, 1);
  transform-origin: 0 0;
  transform: ${(props) =>
    props.show
      ? 'scale(1) translate(-50%, -50%)'
      : 'scale(0) translate(-50%, -50%)'};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.show ? 'unset' : 'none')};
`;

export const Overlay = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.show ? 'unset' : 'none')};
`;
