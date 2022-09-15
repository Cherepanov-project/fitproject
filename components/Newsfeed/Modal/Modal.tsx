import React from 'react';
import { ModalAnimatedWrapper, ModalHeader, ModalBody, StyledButton } from './modal.styles'
import {StyledNewsTitle} from '../newsItem.styles'
import { AnimatePresence } from 'framer-motion';

const Modal = (props) => {

    return (
      <AnimatePresence>
          {props.show && (
            <ModalAnimatedWrapper
              key='modal'
              initial="pageInital"
              animate="pageAnimate"
              exit={{
                opacity: 0,
                height: 0
              }}
              variants={{
                  pageInital: {
                    opacity: 0,
                    height: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                    height: '100vh'
                  },
              }}
            onClick={props.onClose}>
                  <ModalHeader>
                      <StyledNewsTitle className='modal-title'>{props.feed.title}</StyledNewsTitle>
                  </ModalHeader>
                  <ModalBody>{props.feed.description}</ModalBody>
                  <ModalHeader>
                      <StyledButton onClick={props.onClose} className='button'>Close</StyledButton>
                  </ModalHeader>
          </ModalAnimatedWrapper>
          )}
      </AnimatePresence>
    );
};

export default Modal;