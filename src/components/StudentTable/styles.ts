
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    table: {
        minWidth: 600,
    },
    tableHeaderCell: {
        backgroundColor: '#ddd'
    },
    tableIcons: {
        cursor: 'pointer'
    },
    tableDeleteIcon: {
        color: 'red'
    },
    tableEditIcon: {
        color: 'green'
    }

});