import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { projectListReducers } from './reducers/projectReducers'
import { contactSendMailReducer } from './reducers/contactReducers'
import {
  getServerStatsReducer,
  setEmailCountReducer,
  setEmailTimeReducer,
  setVisitorCountReducer,
} from './reducers/serverReducers'

const midlleware = [thunk]

const reducer = combineReducers({
  serverDetails: getServerStatsReducer,
  serverEmailCount: setEmailCountReducer,
  serverEmailTime: setEmailTimeReducer,
  serverVisitorCount: setVisitorCountReducer,
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
