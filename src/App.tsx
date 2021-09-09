import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { DataGrid, GridAddIcon, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Button, Container, Icon, Theme } from '@material-ui/core';
import StudentTable from './components/StudentTable'
import studentData from "./data.json";

const columns = studentData.columns
const rows = studentData.rows


const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1 className={classes.heading}>Student Portal</h1>
      <StudentTable
        {...{ rows, columns }}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<GridAddIcon />}
      >Add Student</Button>
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

