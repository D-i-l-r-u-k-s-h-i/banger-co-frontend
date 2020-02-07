import {bookingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    makeBookingData:null
}

export default handleActions({
    [bookingTypes.BOOKING]:(state,{payload})=>({
        ...state,loading:true
    }),
    [bookingTypes.SUCCESS_BOOKING]:(state,{payload})=>({
        ...state,loading:false,makeBookingData:payload
    }),
    [bookingTypes.FAIL_BOOKING]:(state,{payload})=>({
        ...state,loading:false,makeBookingData:null
    }),
},initialState)