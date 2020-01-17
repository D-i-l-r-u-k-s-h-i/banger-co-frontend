import {cancelBookingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    BookingData:null
}

export default handleActions({
    [cancelBookingTypes.CANCEL_BOOKING]:(state,{payload})=>({
        ...state,loading:true
    }),
    [cancelBookingTypes.SUCCESS_CANCEL_BOOKING]:(state,{payload})=>({
        ...state,loading:false,BookingData:payload
    }),
    [cancelBookingTypes.FAIL_CANCEL_BOOKING]:(state,{payload})=>({
        ...state,loading:false,BookingData:null
    }),
},initialState)