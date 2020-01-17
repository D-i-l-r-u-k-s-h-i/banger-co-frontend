import {cancelBookingItemTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    BookingData:null
}

export default handleActions({
    [cancelBookingItemTypes.CANCEL_BOOKING_ITEM]:(state,{payload})=>({
        ...state,loading:true
    }),
    [cancelBookingItemTypes.SUCCESS_CANCEL_BOOKING_ITEM]:(state,{payload})=>({
        ...state,loading:false,BookingData:payload
    }),
    [cancelBookingItemTypes.FAIL_CANCEL_BOOKING_ITEM]:(state,{payload})=>({
        ...state,loading:false,BookingData:null
    }),
},initialState)