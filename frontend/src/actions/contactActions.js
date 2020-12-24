import {
  CONTACT_SEND_MAIL_FAIL,
  CONTACT_SEND_MAIL_REQUEST,
  CONTACT_SEND_MAIL_SUCCESS,
} from '../constants/contactConstants'

import axios from 'axios'

export const sendMail = (mail) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_SEND_MAIL_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('/api/contacts', mail, config)
    if (data.status === 'success') {
      dispatch({ type: CONTACT_SEND_MAIL_SUCCESS, payload: data })
    } else if (data.status === 'invalid email') {
      dispatch({ type: CONTACT_SEND_MAIL_FAIL, payload: data.status })
    }
  } catch (error) {
    dispatch({ type: CONTACT_SEND_MAIL_FAIL, payload: error.message })
  }
}
