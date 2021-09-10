// @ts-nocheck
import {
    gql
} from "@apollo/client";

export const FETCH_STUDENTS = gql`
    query {
        students {
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
                    firstName
                    lastName
               }
            }
        }
    
`;