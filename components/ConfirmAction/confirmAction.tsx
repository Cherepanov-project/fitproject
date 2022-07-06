import { useState } from "react"
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material"

const ConfirmAction = ({ text, children, onConfirm }) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onAgree = () => {
        onConfirm()
        handleClose()
    }

    return (
        <div>
            <div onClick={handleClickOpen}>{children}</div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Сonfirm action"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Disagree
                    </Button>
                    <Button onClick={onAgree}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ConfirmAction
