import React from 'react'
import { Paper, makeStyles, Grid, Box, IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 55,
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 15,
    borderRadius: 0,
  },
  item: {
    textAlign: 'center',
    padding: 2,
  },
}))

export const Footer = (params) => {
  const classes = useStyles()
  return (
    <Paper elevation={10} className={classes.footer}>
      <Grid container justify='center'>
        <Grid item xs={12} className={classes.item}>
          <Box component='span' mx={1}>
            <IconButton size='small' color='primary'>
              <TwitterIcon />
            </IconButton>
          </Box>
          <Box component='span' mx={1}>
            <IconButton size='small' color='inherit'>
              <GitHubIcon />
            </IconButton>
          </Box>
          <Box component='span' mx={1}>
            <IconButton size='small' color='primary'>
              <FacebookIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          Copyright: &copy; KAVG {new Date().getFullYear()}
        </Grid>
      </Grid>
    </Paper>
  )
}
