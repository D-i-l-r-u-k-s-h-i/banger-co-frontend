import {bookingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    BookingData:null
}

export default handleActions({
    [bookingTypes.BOOKING]:(state,{payload})=>({
        ...state,loading:true
    }),
    [bookingTypes.SUCCESS_BOOKING]:(state,{payload})=>({
        ...state,loading:false,BookingData:payload
    }),
    [bookingTypes.FAIL_BOOKING]:(state,{payload})=>({
        ...state,loading:false,BookingData:null
    }),
},initialState)