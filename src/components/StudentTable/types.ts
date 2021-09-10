import { InitialStudentState } from "../constants";

export type columnType = "first_name" |
    "last_name" |
    "course" |
    "gender" |
    "faculty"

export interface Column {
    id: string
    label: string
}

export interface Row {
    first_name: string
    last_name: string
    course: string
    gender: string
    faculty: string
}

export interface TableProps {
    columns: Column[]
    rows: Row[]
    handleOpenStudentModal: (isEditable: boolean) => void
    selectedStudent: (data: InitialStudentState) => void
    removeStudent: (id: number) => void
}