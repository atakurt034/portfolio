import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { projectListReducers } from './reducers/projectReducers'
import { contactSendMailReducer } from './reducers/contactReducers'
import { getServerStatsReducer } from './reducers/serverReducers'

const midlleware = [thunk]

const reducer = combineReducers({
  serverDetails: getServerStatsReducer,
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
