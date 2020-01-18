import {getCurrentBookingTypes,getPastBookingTypes,getTodaysBookingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    bookingData:null
}

export default handleActions({
    [getCurrentBookingTypes.GET_CURRENT_BOOKINGS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getCurrentBookingTypes.SUCCESS_GET_CURRENT_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:payload
    }),
    [getCurrentBookingTypes.FAIL_GET_CURRENT_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
    [getPastBookingTypes.GET_PAST_BOOKINGS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getPastBookingTypes.SUCCESS_GET_PAST_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:payload
    }),
    [getPastBookingTypes.FAIL_GET_PAST_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
    [getTodaysBookingTypes.GET_TODAYS_BOOKINGS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getTodaysBookingTypes.SUCCESS_GET_TODAYS_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:payload
    }),
    [getTodaysBookingTypes.FAIL_GET_TODAYS_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
},initialState)