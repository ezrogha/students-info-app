import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import { NEW_STUDENT_FORM } from '../constants'
import { useStyles } from './styles'

interface NewStudentProps {
    open: boolean
    handleClose: () => void
}

export default ({ open, handleClose }: NewStudentProps) => {
    const classes = useStyles()

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Add New Student"}</DialogTitle>
            <DialogContent>
                {NEW_STUDENT_FORM.map((formField) => {
                    return (
                        <TextField
                            fullWidth
                            className={classes.modalTextInput}
                            label={formField.label}
                            variant="outlined"
                        />
                    )
                })}
                <Button
                    fullWidth
                    variant="contained"
                    className={classes.modalButton}
                    onClick={handleClose}
                    color="primary"
                    autoFocus>
                    Add
                </Button>
            </DialogContent>
        </Dialog>
    )
}
