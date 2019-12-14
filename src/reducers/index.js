import { combineReducers } from "redux"
import signup from './signup';

const rootReducer=combineReducers({
    SignUp:signup
})

export default rootReducer;