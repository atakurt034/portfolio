import {
  SET_IMAGE_FAIL,
  SET_IMAGE_REQUEST,
  SET_IMAGE_SUCCESS,
} from '../constants/aboutConstants'

export const setImageReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_IMAGE_REQUEST:
      return { loading: true }
    case SET_IMAGE_SUCCESS:
      return { loading: false, image: action.payload }
    case SET_IMAGE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
