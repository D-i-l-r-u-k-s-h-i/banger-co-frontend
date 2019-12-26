import { combineReducers } from "redux"
import signup from './signup';
import allvehicles from './allvehicles'
import login from './login'
import makebooking from './makeBooking'

const rootReducer=combineReducers({
    SignUp:signup,
    AllVehicles:allvehicles,
    Login:login,
    MakeBooking:makebooking
})

export default rootReducer;