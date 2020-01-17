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
import cancelbooking from './cancelBookong'
import cancelBookongItem from './cancelBookingItem'
import extendBooking from './extendBooking'

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
    CancelBooking:cancelbooking,
    CancelBookongItem:cancelBookongItem,
    ExtendBooking:extendBooking
})

export default rootReducer;