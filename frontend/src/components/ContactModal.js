import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { Box, Button, Container, Paper, Typography } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

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
  text: {
    padding: 5,
    margin: 5,
  },
  box: {
    textAlign: 'center',
  },
}))

export const ContactModal = ({ open, handleClose }) => {
  const classes = useStyles()

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
              <Typography variant='h5' className={classes.text}>
                Successfully sent message
              </Typography>
              <Typography variant='body2' className={classes.text}>
                Thank you for contacting me. I will reply to you as soon as I
                can. Have a nice day.
              </Typography>
              <Box className={classes.box}>
                <Button
                  size='large'
                  variant='contained'
                  onClick={handleClose}
                  className={classes.button}
                  endIcon={<ThumbUpIcon color='inherit' fontSize='small' />}
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
