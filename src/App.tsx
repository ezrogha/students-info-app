
import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation
} from "@apollo/client";
import { DataGrid, GridAddIcon, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Button, Container, Icon, Theme } from '@material-ui/core';

import StudentTable from './components/StudentTable'
import StudentModal from './components/StudentModal'
import studentData from "./data.json";
import { useStyles } from './styles';
import { ADD_STUDENT, FETCH_STUDENTS } from './network/apiRequests';
import { initialStudentState } from "./components/constants";

const columns = studentData.columns
const rows = studentData.rows

interface studentDataUpdate {
  key: string
  value: string
}

const App = () => {
  const classes = useStyles();

  const [openStudentModal, setStudentModal] = useState(false);
  const [isModalEditable, setIsModalEditable] = useState(false)
  const [studentData, setStudentData] = useState(initialStudentState)

  const { error: fetchError, loading, data:fetchedStudents  } = useQuery(FETCH_STUDENTS)
  const [createStudent, { error: addError }] = useMutation(ADD_STUDENT)

  if(fetchError) {
    console.log("FETCH ERROR", fetchError)
  }

  const addNewStudent = () => {
    createStudent({
      variables: studentData
    })

    if(addError){
      console.log("ADD ERROR", addError)
    }
  }

  const editStudent = () => {

  }

  const handleStudentData = (data: studentDataUpdate) => {
    setStudentData(studentData => ({
      ...studentData,
      [data.key]: data.value
    }))
  }

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
          rows: fetchedStudents?.students || [],
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
        {...{
          open: openStudentModal,
          handleClose: handleCloseStudentModal,
          isEdit: isModalEditable,
          handleStudentData,
          handleSubmit: isModalEditable ? editStudent : addNewStudent 
        }} />

    </Container>
  )
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:1337/graphql"
});

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

