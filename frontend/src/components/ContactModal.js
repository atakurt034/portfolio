import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { Box, Button, Container, Paper, Typography } from '@material-ui/core'

import green from '@material-ui/core/colors/green'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'

import { useSelector } from 'react-redux'

import RubberBand from 'react-reveal/RubberBand'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: 20,
    width: '100%',
    margin: 'auto',
  },
  container: {
    padding: 0,
    borderRadius: 10,
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    padding: 5,
    margin: 5,
  },
  body: {
    padding: 5,
    margin: 5,
  },
  box: {
    textAlign: 'center',
  },
  textbox: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  icon: {
    color: green[700],
  },
  button: {
    width: 100,
  },
}))

export const ContactModal = ({ open, handleClose }) => {
  const classes = useStyles()
  const [valid, setValid] = useState(false)

  const contactSendMail = useSelector((state) => state.contactSendMail)
  const { data, loading, error, status } = contactSendMail

  useEffect(() => {
    if (data) {
      if (status === 'success') {
        setValid(true)
      }
    }
  }, [data, loading, error, status])

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <RubberBand>
          <Container maxWidth='sm' className={classes.container}>
            <Paper elevation={12} className={classes.paper}>
              <Box className={classes.textbox}>
                {valid ? (
                  <CheckCircleIcon fontSize='large' className={classes.icon} />
                ) : (
                  <ErrorIcon fontSize='large' color='error' />
                )}
                <Typography variant='h5' className={classes.title}>
                  {valid ? 'Message sent' : 'Message sending failed'}
                </Typography>
              </Box>
              <Typography variant='body2' className={classes.body}>
                {valid
                  ? 'Thank you for contacting me. I will reply to you as soon as I can. Have a nice day!'
                  : 'Only 1 message per hour is allowed. Please try again later. Thank you'}
              </Typography>
              <Box className={classes.box}>
                <Button
                  size='large'
                  variant='contained'
                  onClick={handleClose}
                  className={classes.button}
                >
                  OK
                </Button>
              </Box>
            </Paper>
          </Container>
        </RubberBand>
      </Modal>
    </div>
  )
}
