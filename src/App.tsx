import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid, GridAddIcon, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Button, Container, Icon, Theme } from '@material-ui/core';
import StudentTable from './components/StudentTable'
import StudentModal from './components/StudentModal'
import studentData from "./data.json";

const columns = studentData.columns
const rows = studentData.rows


const App = () => {
  const classes = useStyles();

  const [openStudentModal, setStudentModal] = React.useState(false);
  const [isModalEditable, setIsModalEditable] = React.useState(false)

  const handleOpenStudentModal = (isEditable: boolean) => {
    setIsModalEditable(isEditable)
    setStudentModal(true);
  };

  const handleCloseStudentModal = () => {
    setStudentModal(false);
  };

  return (
    <Container className={classes.root}>
      <h1 className={classes.heading}>Student Portal</h1>
      <StudentTable
        {...{
          rows,
          columns,
          handleOpenStudentModal
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<GridAddIcon />}
        onClick={() => handleOpenStudentModal(false)}
      >Add Student</Button>

      <StudentModal
        { ...{
          open: openStudentModal,
          handleClose: handleCloseStudentModal,
          isEdit: isModalEditable
        }}/>

    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  heading: {
    textAlign: 'center'
  },
  button: {
    marginTop: theme.spacing(1)
  }
}));

export default App;

