import {
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
} from '../constants/projectConstants'

import axios from 'axios'

export const listProjects = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROJECT_LIST_REQUEST })

    const { data } = await axios.get('/api/projects')

    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.message })
  }
}
