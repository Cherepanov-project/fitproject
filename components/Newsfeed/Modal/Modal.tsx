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
    const [feed, setFeed] = useState([])

    console.log(feed)
    useEffect(() => {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://yandex.ru/news/story/Dolzhnost_prezidenta_Spartaka_zajmyot_Aleksandr_Matycyn--c1d8b9813cf72a2dbb6589153c317ed9?lang=ru&from=js&wan=1&stid=hmAemKe6V8q5oQjD0VE4')}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Network response was not ok.')
            })
            .then(data => {
                let proxy = [];
                let snippets: any = new DOMParser().parseFromString(data.contents, "text/html").querySelectorAll('.mg-snippet__text')
                snippets = [...snippets]
                snippets.forEach((item) => {
                    let p = document.createElement('p')
                    // p.innerHTML = item.innerHTML
                    proxy.push(item.innerHTML)
                    // body.append(p)
                    // body.append(document.createElement('p').append(item.innerHTML))
                    console.log(item.innerHTML)
                    setFeed(proxy);
                })
            });
    }, [feed])

    function fullFeedHandler() {

    }

    if (!props.show) {
        return null
    }

    return (
        <ModalWrapper onClick={props.onClose}>
            <ModalContent>
                <ModalHeader>
                    <h4 className='modal-title'>Modal Title</h4>
                </ModalHeader>
                <ModalBody>{feed}</ModalBody>
                <ModalHeader>
                    <button onClick={props.onClose} className='button'>Close</button>
                </ModalHeader>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;