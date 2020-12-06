import React from 'react';
import { node, bool, func } from 'prop-types';
import { ModalContainer, Overlay, CloseButton } from './style';

const Modal = ({ children, show, onClose }) => {
  return (
    <>
      <ModalContainer show={show}>
        <CloseButton onClick={onClose} />
        {children}
      </ModalContainer>
      <Overlay show={show} />
    </>
  );
};

Modal.propTypes = {
  children: node.isRequired,
  show: bool,
  onClose: func,
};

Modal.defaultProps = {
  show: false,
  onClose: () => {},
};

export default Modal;
