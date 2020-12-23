import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  TextField,
  makeStyles,
  Paper,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Message from './Message'
import Loader from './Loader'

const useStyles = makeStyles((theme) => ({
  form: {},
  paperWrapper: {
    padding: 20,
  },
}))

export const Messenger = ({ location, history }) => {
  const classes = useStyles()

  return (
    <Paper elevation={12} className={classes.paperWrapper}>
      <Container component='main' maxWidth='xs'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className={classes.form}
          action='mailto:atakurt034@gmail.com'
          method='POST'
          encType='multipart/form-data'
        >
          <TextField
            type='text'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='Full Name'
            autoFocus
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type='email'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
          <TextField
            type='text'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='message'
            label='Message'
            multiline
            rows={5}
            autoComplete='email'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            size='large'
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Paper>
  )
}
