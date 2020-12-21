import {
  SET_IMAGE_FAIL,
  SET_IMAGE_REQUEST,
  SET_IMAGE_SUCCESS,
} from '../constants/aboutConstants'

export const setImage = (image) => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_IMAGE_REQUEST })
    const img = await image
    dispatch({ type: SET_IMAGE_SUCCESS, payload: img })
  } catch (error) {
    dispatch({ type: SET_IMAGE_FAIL, payload: error })
  }
}
