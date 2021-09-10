import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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