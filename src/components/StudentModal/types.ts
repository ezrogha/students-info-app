import { InitialStudentState } from "../constants";

interface StudentUpdate {
    key: string
    value: string
}
export interface StudentProps {
    isEdit?: boolean
    open: boolean
    handleClose: () => void
    handleStudentData: (data: StudentUpdate) => void
    handleSubmit: () => void
    studentData: InitialStudentState
}