import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { setImageReducer } from './reducers/aboutReducers'
import { projectListReducers } from './reducers/projectReducers'
import { contactSendMailReducer } from './reducers/contactReducers'

const midlleware = [thunk]

const reducer = combineReducers({
  setImage: setImageReducer,
  contactSendMail: contactSendMailReducer,
  projectList: projectListReducers,
})

const initialState = {}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midlleware))
)

export default store
