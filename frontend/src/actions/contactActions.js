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
    dispatch({
      type: CONTACT_SEND_MAIL_SUCCESS,
      payload: { status: data.status, data: data.data },
    })
  } catch (error) {
    dispatch({ type: CONTACT_SEND_MAIL_FAIL, payload: error.message })
  }
}
