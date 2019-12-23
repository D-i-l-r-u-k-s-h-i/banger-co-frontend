import { combineReducers } from "redux"
import signup from './signup';
import allvehicles from './allvehicles'
import login from './login'

const rootReducer=combineReducers({
    SignUp:signup,
    AllVehicles:allvehicles,
    login
})

export default rootReducer;