import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
`

const ModalHeader = styled.div`
  padding: 10px;
`

const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`

const ModalTitle = styled.div`
  margin: 0;
`

const Modal = (props) => {

    // console.log(props.feed)
    useEffect(() => {

    }, [])



    if (!props.show) {
        return null
    }

    return (
        <ModalWrapper onClick={props.onClose}>
            <ModalContent>
                <ModalHeader>
                    <h4 className='modal-title'>Modal Title</h4>
                </ModalHeader>
                <ModalBody>{props.feed && props.feed}</ModalBody>
                <ModalHeader>
                    <button onClick={props.onClose} className='button'>Close</button>
                </ModalHeader>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;