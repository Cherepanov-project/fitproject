import React from 'react';
import { ModalWrapper, ModalContent, ModalHeader, ModalBody, StyledButton } from './modal.styles'
import {StyledNewsTitle} from '../newsItem.styles'

const Modal = (props) => {
    console.log(props);
    if (!props.show) {
        return null
    }

    return (
        <ModalWrapper onClick={props.onClose}>
            <ModalContent>
                <ModalHeader>
                    <StyledNewsTitle className='modal-title'>{props.feed.title}</StyledNewsTitle>
                </ModalHeader>
                <ModalBody>{props.feed.descr}</ModalBody>
                <ModalHeader>
                    <StyledButton onClick={props.onClose} className='button'>Close</StyledButton>
                </ModalHeader>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;