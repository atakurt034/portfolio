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

import { Mail, PhoneAndroid, Edit, Twitter, Facebook } from '@material-ui/icons'

import DividerText from '../../components/DividerWithText'
import { Messenger } from '../../components/MessageForm'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

import { LightSpeed } from 'react-reveal'
import Jump from 'react-reveal/Jump'

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
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
  }

  return (
    <Paper id='contact' className={classes.paperWrapper}>
      <Typography variant='h5' className={classes.mainTitle}>
        <DividerText>Contact Me</DividerText>
      </Typography>
      <Typography gutterBottom variant='body1' className={classes.text}>
        Please don't hesistate to contact me{'   '}
        <Jump forever={true} duration={4000}>
          <EmojiPeopleIcon color='inherit' />
        </Jump>
      </Typography>
      <Divider />
      <Grid container justify='center' className={classes.boxContainer}>
        <LightSpeed>
          <Box className={classes.box}>
            <a href='tel:+639087580821' className={classes.link}>
              <Button
                variant='contained'
                size='large'
                className={classes.button}
              >
                <PhoneAndroid />
              </Button>
              <Box m={2}>
                <Typography>Mobile No.</Typography>
                <Typography variant='caption'>(+63)09087580821</Typography>
              </Box>
            </a>
          </Box>
        </LightSpeed>
        <LightSpeed>
          <Box className={classes.box}>
            <a href='mailto:atakurt034@gmail.com' className={classes.link}>
              <Button
                variant='contained'
                size='large'
                className={classes.button}
              >
                <Mail />
              </Button>
              <Box m={2}>
                <Typography>Email</Typography>
                <Typography variant='caption'>atakurt034@gmail.com</Typography>
              </Box>
            </a>
          </Box>
        </LightSpeed>
        <LightSpeed>
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
                <Typography>Twitter</Typography>
                <Typography variant='caption'>@KAVG034</Typography>
              </Box>
            </a>
          </Box>
        </LightSpeed>
        <LightSpeed>
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
              <Box m={2}>
                <Typography>Facebook</Typography>
                <Typography variant='caption'>
                  facebook.com/kurt.gee.14
                </Typography>
              </Box>
            </a>
          </Box>
        </LightSpeed>
        <LightSpeed>
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
              <Typography>Message Me</Typography>
              <Typography variant='caption'>Send Message</Typography>
            </Box>
          </Box>
        </LightSpeed>

        {open && (
          <Grid
            container
            justify='center'
            className={classes.messengerContainer}
          >
            <Messenger />
          </Grid>
        )}
      </Grid>
    </Paper>
  )
}
