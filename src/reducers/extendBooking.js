import {extendBookingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    BookingData:null
}

export default handleActions({
    [extendBookingTypes.EXTEND_BOOKING]:(state,{payload})=>({
        ...state,loading:true
    }),
    [extendBookingTypes.SUCCESS_EXTEND_BOOKING]:(state,{payload})=>({
        ...state,loading:false,BookingData:payload
    }),
    [extendBookingTypes.FAIL_EXTEND_BOOKING]:(state,{payload})=>({
        ...state,loading:false,BookingData:null
    }),
},initialState)