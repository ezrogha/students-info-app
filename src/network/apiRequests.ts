// @ts-nocheck
import {
    gql
} from "@apollo/client";

export const FETCH_STUDENTS = gql`
    query {
        students {
            id
            firstName
            lastName
            gender
            DOB
            course
            faculty
        }
    }
`;

export const ADD_STUDENT = gql`
    mutation createStudent( 
            $firstName: String!
            $lastName: String!
            $DOB: String!
            $gender: String
            $course: String!
            $faculty: String!
        ) {
            createStudent(
                input: {  
                    data: {
                        firstName: $firstName
                        lastName: $lastName
                        DOB: $DOB
                        gender: $gender
                        course: $course
                        faculty: $faculty
                    }
                }
            ) {
               student {
                    id
               }
            }
        }
    
`;

export const UPDATE_STUDENT = gql`
    mutation updateStudent( 
            $id: ID!
            $firstName: String!
            $lastName: String!
            $DOB: String!
            $gender: String
            $course: String!
            $faculty: String!
        ) {
            updateStudent(
                input: {  
                    where: { id: $id }
                    data: {
                        firstName: $firstName
                        lastName: $lastName
                        DOB: $DOB
                        gender: $gender
                        course: $course
                        faculty: $faculty
                    }
                }
            ) {
               student {
                    id
               }
            }
        }
    
`;

export const DELETE_STUDENT = gql`
  mutation($id: ID!) {
    deleteStudent(input: { where: { id: $id } }) {
        student {
            id
       }
    }
  }
`