import { combineReducers } from "redux"
import signup from './signup';
import allvehicles from './allvehicles'

const rootReducer=combineReducers({
    SignUp:signup,
    AllVehicles:allvehicles
})

export default rootReducer;