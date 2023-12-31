import { combineReducers } from "redux"
import signup from './signup';
import allvehicles from './allvehicles'
import login from './login'
import makebooking from './makeBooking'
import addreview from './addReview'
import addrating from './addRating'
import getreviews from './getReviews'
import gettimeslots from './getTimeSlots'
import getbookings from './getBookings'
import alladditionalequips from './allAdditionalEquips'
import extendBooking from './extendBooking'
import handleBookings from './handleBookings'

const rootReducer=combineReducers({
    SignUp:signup,
    AllVehicles:allvehicles,
    Login:login,
    MakeBooking:makebooking,
    AddReview:addreview,
    AddRating:addrating,
    GetReviews:getreviews,
    GetTimeSlots:gettimeslots,
    GetBookings:getbookings,
    AllAdditionalEquips:alladditionalequips,
    ExtendBooking:extendBooking,
    HandleBookings:handleBookings
})

export default rootReducer;