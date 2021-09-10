import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import { NEW_STUDENT_FORM } from '../constants'
import { useStyles } from './styles'
import { StudentProps } from './types'

export default ({ open, handleClose, isEdit=false, handleStudentData, handleSubmit }: StudentProps) => {
    const classes = useStyles()
    const modalTitle = isEdit ? "Edit Student" : "Add New Student"
    const modalButton = isEdit ? "Edit" : "Add"

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle>
            <DialogContent>
                {NEW_STUDENT_FORM.map((formField) => {
                    return (
                        <TextField
                            fullWidth
                            className={classes.modalTextInput}
                            label={formField.label}
                            variant="outlined"
                            type={formField.type}
                            onChange={e => {
                                handleStudentData({ 
                                    key: formField.name,
                                    value: e.target.value
                                })
                            }}
                        />
                    )
                })}
                <Button
                    fullWidth
                    variant="contained"
                    className={classes.modalButton}
                    onClick={() => {
                        handleSubmit()
                        handleClose()
                    }}
                    color="primary"
                    autoFocus>
                    {modalButton}
                </Button>
            </DialogContent>
        </Dialog>
    )
}
