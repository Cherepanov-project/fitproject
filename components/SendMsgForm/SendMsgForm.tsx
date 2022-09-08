import React, { useState } from 'react'
import {FormContainer, FormInput} from './SendMsgForm.style';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    onSubmitHandler: (msg:string) => void
}

const SendMsgForm = ({onSubmitHandler}:Props) => {
    const [msg, setMsg] = useState("")
    const submitAndClear = (msg) => {
        setMsg("")
        onSubmitHandler(msg)
    }
    return (
        <FormContainer>
            <FormInput
                rows={3}
                placeholder="Напишите сообщение ..."
                value = {msg}
                onChange = {(evt)=>{setMsg(evt.target.value)}}
            />
            <Button onClick={()=>{if(msg){submitAndClear(msg)}}} sx = {{minWidth:'135px', maxHeight:'30px', backgroundColor:"#7f8084", "&.MuiButtonBase-root:hover": {
                    bgcolor: "#7f8084"
                }}} variant="contained" size='small' endIcon={<SendIcon />}>
                Отправить
            </Button>
        </FormContainer>
    )
}

export default SendMsgForm