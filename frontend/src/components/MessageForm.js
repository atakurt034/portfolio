import React, { useState, useEffect } from 'react'
import {
  Button,
  Container,
  TextField,
  makeStyles,
  Paper,
} from '@material-ui/core'

import SendIcon from '@material-ui/icons/Send'
import { sendMail } from '../actions/contactActions'
import { CONTACT_SEND_MAIL_RESET } from '../constants/contactConstants'

import { useDispatch, useSelector } from 'react-redux'

import { ModalLoader } from './ModalLoader'
import { ModalMessage } from './ModalMessage'
import { ContactModal } from './ContactModal'

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    padding: 20,
    borderRadius: 10,
  },
}))

export const Messenger = ({ location, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [errorInput, setErrorInput] = useState('')
  const [open, setOpen] = useState(false)
  const [mail, setMail] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const contactSendMail = useSelector((state) => state.contactSendMail)
  const { data, loading, error, success } = contactSendMail

  const { name, email, subject, message } = mail

  const handleChange = (event) => {
    const { name, value } = event.target
    setMail({ ...mail, [name]: value })
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  console.log(data)

  const submitHandler = (event) => {
    event.preventDefault()
    if (email) {
      if (!validateEmail(email)) {
        setErrorInput('Please provide a valid email')
      } else {
        dispatch(
          sendMail({
            name,
            email,
            subject,
            text: message,
          })
        )
      }
    }
  }

  const closeHandler = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!loading && !error && data) {
      if (success) {
        setOpen(true)
        dispatch({ type: CONTACT_SEND_MAIL_RESET })
      }
    }
    if (data) {
      if (data.status === 'invalid email') setErrorInput(data.status)
    }
  }, [data, loading, error, dispatch, success])

  return (
    <>
      {errorInput && <ModalMessage variant='error'>{errorInput}</ModalMessage>}
      {open && <ContactModal open={open} handleClose={closeHandler} />}
      {loading ? (
        <ModalLoader />
      ) : error ? (
        <ModalMessage variant='error'>{error}</ModalMessage>
      ) : (
        <Paper elevation={12} className={classes.paperWrapper}>
          <Container component='main' maxWidth='xs'>
            <form
              onSubmit={submitHandler}
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
                name='name'
                value={name}
                onChange={handleChange}
              />
              <TextField
                type='email'
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Email Address'
                name='email'
                value={email}
                onChange={handleChange}
              />
              <TextField
                type='text'
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Subject'
                name='subject'
                value={subject}
                onChange={handleChange}
              />
              <TextField
                type='text'
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Message'
                multiline
                rows={5}
                name='message'
                value={message}
                onChange={handleChange}
              />

              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='default'
                size='large'
                startIcon={<SendIcon />}
                className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </Container>
        </Paper>
      )}
    </>
  )
}
