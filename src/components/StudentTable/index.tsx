// @ts-nocheck
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './styles';

type columnType = "first_name" |
    "last_name" |
    "course" |
    "gender" |
    "faculty"

interface Column {
    id: string
    label: string
}

interface Row {
    first_name: string
    last_name: string
    course: string
    gender: string
    faculty: string
}

interface TableProps {
    columns: Column[]
    rows: Row[]
}

export default ({ columns, rows }: TableProps) => {
    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {
                            columns.map((column) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell}
                                        key={column.id}
                                        style={{ minWidth: 150 }}
                                    >{column.label}</TableCell>)
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            {columns.map((column) => {
                                const cellValue = row[column.id]
                                return <TableCell key={column.id}>{cellValue}</TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
