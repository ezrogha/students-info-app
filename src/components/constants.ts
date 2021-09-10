export const NEW_STUDENT_FORM = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text'
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text'
    },
    {
        name: 'gender',
        label: 'Gender',
        type: 'text'
    },
    {
        name: 'DOB',
        label: 'Date Of Birth',
        type: 'date'
    },
    {
        name: 'course',
        label: 'Course',
        type: 'text'
    },
    {
        name: 'faculty',
        label: 'Faculty',
        type: 'text'
    }
]

export const initialStudentState = {
    firstName: "",
    lastName: "",
    DOB: "",
    course: "",
    gender: "",
    faculty: ""
}