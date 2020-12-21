import {
  AppBar,
  Toolbar,
  makeStyles,
  Box,
  withStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    textTransform: 'none',
    fontWeight: 900,
    color: theme.palette.primary.main,
  },
}))

export const Header = (params) => {
  const classes = useStyles()

  return (
    <AppBar id='about' position='static' className={classes.appbar}>
      <Toolbar>
        <Box mx={1}>
          <Typography>
            <a href='#about' className={classes.link}>
              About
            </a>
          </Typography>
        </Box>
        <Box mx={1}>
          <Typography>
            <a href='#stacks' className={classes.link}>
              Stacks
            </a>
          </Typography>
        </Box>
        <Box mx={1}>
          <Typography>
            <a href='#contact' className={classes.link}>
              Contact Me
            </a>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
