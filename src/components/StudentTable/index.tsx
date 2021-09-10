// @ts-nocheck
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyles } from './styles';
import { TableProps } from './types';

export default ({
    columns,
    rows,
    handleOpenStudentModal
}: TableProps) => {

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
                                        className={classes.tableHeaderCell}
                                        key={column.id}
                                        style={{ minWidth: 150 }}
                                    >{column.label}</TableCell>)
                            })
                        }
                        <TableCell className={classes.tableHeaderCell} />
                        <TableCell className={classes.tableHeaderCell} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <TableRow>
                            {columns.map((column) => {
                                const cellValue = row[column.id]
                                return <TableCell key={column.id}>{cellValue}</TableCell>
                            })}
                            <TableCell><CreateIcon className={`${classes.tableEditIcon} ${classes.tableIcons}`} onClick={() => handleOpenStudentModal(true)} /></TableCell>
                            <TableCell><DeleteIcon className={`${classes.tableDeleteIcon} ${classes.tableIcons}`} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
