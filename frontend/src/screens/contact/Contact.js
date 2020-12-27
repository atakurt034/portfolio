import React, { useState } from 'react'

import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  Box,
  Divider,
} from '@material-ui/core'

import { Edit, Twitter, Facebook } from '@material-ui/icons'

import DividerText from '../../components/DividerWithText'
import { MessageForm } from '../../components/MessageForm'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

import { LightSpeed, Fade } from 'react-reveal'
import Jump from 'react-reveal/Jump'

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    borderRadius: 0,
  },
  mainTitle: {
    width: 'fit-content',
    margin: '20px auto',
    padding: '20px 0',
    fontSize: '2rem',
  },
  button: {
    padding: 15,
    borderRadius: '100%',
    height: 60,
    [theme.breakpoints.up('sm')]: {
      height: 65,
    },
  },
  box: {
    textAlign: 'center',
    margin: 'auto',
    padding: 20,
    width: 80,
  },
  link: {
    textTransform: 'none',
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit',
    },
    color: 'inherit',
  },
  boxContainer: {
    margin: '20px auto',
  },
  text: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    lineHeight: 4,
  },
  messengerContainer: {
    margin: 20,
  },
}))

export const Contact = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const messageHandler = (params) => {
    setOpen(!open)
    window.location.href = '#message'
  }

  const text = ['Please', "don't", 'hesistate', 'to', 'contact', 'me']
  const arrayText = [...text.join(' ')]

  return (
    <Paper id='contact' className={classes.paperWrapper}>
      <Typography component='div' variant='h5' className={classes.mainTitle}>
        <DividerText>Contact Me</DividerText>
      </Typography>
      <Typography
        component='div'
        gutterBottom
        variant='body1'
        className={classes.text}
      >
        {arrayText.map((letter, index) => (
          <span key={index}>
            <Fade
              wait={40}
              cascade
              collapse
              top
              delay={
                Math.floor(Math.random() * 10) +
                index * Math.floor(Math.random() * 150)
              }
            >
              <i>{letter}</i>
            </Fade>
          </span>
        ))}
        <Jump forever={true} duration={4000}>
          <EmojiPeopleIcon color='inherit' style={{ marginLeft: 5 }} />
        </Jump>
      </Typography>
      <Divider />
      <Grid container justify='center' className={classes.boxContainer}>
        <LightSpeed delay={2000} bottom>
          <Box className={classes.box}>
            <a
              href='https://twitter.com/KAVG034?ref_src=twsrc%5Etfw'
              rel='noopener noreferrer'
              target='_blank'
              className={classes.link}
            >
              <Button
                variant='contained'
                size='large'
                className={classes.button}
              >
                <Twitter color='primary' />
              </Button>
              <Box m={2}>
                <Typography variant='caption'>Twitter</Typography>
              </Box>
            </a>
          </Box>
        </LightSpeed>
        <Fade delay={3000} top>
          <Box className={classes.box}>
            <a
              href='https://www.facebook.com/kurt.gee.14/'
              target='_blank'
              rel='noopener noreferrer'
              className={classes.link}
            >
              <Button
                variant='contained'
                size='large'
                className={classes.button}
              >
                <Facebook color='primary' />
              </Button>
              <Box m={2} style={{ margin: '18px auto' }}>
                <Typography variant='caption'>Facebook</Typography>
              </Box>
            </a>
          </Box>
        </Fade>
        <LightSpeed delay={4000} bottom>
          <Box className={classes.box}>
            <Button
              variant='contained'
              size='large'
              className={classes.button}
              onClick={messageHandler}
            >
              <Edit color='error' />
            </Button>
            <Box m={2}>
              <Typography variant='caption'>Message Me</Typography>
            </Box>
          </Box>
        </LightSpeed>

        {open && (
          <Grid
            container
            justify='center'
            className={classes.messengerContainer}
          >
            <MessageForm />
          </Grid>
        )}
      </Grid>
    </Paper>
  )
}
