import React from 'react';
import { ModalWrapper, ModalContent, ModalHeader, ModalBody, StyledButton } from './modal.styles'

const Modal = (props) => {

    if (!props.show) {
        return null
    }

    return (
        <ModalWrapper onClick={props.onClose}>
            <ModalContent>
                <ModalHeader>
                    <h4 className='modal-title'></h4>
                </ModalHeader>
                <ModalBody>{props.feed && props.feed}</ModalBody>
                <ModalHeader>
                    <StyledButton onClick={props.onClose} className='button'>Close</StyledButton>
                </ModalHeader>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;