import {bookingTypes,checkLisenceTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    makeBookingData:null,
    lisenceStatusData:null
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
    [checkLisenceTypes.CHECK_LISENCE]:(state,{payload})=>({
        ...state,loading:true
    }),
    [checkLisenceTypes.SUCCESS_CHECK_LISENCE]:(state,{payload})=>({
        ...state,loading:false,lisenceStatusData:payload
    }),
    [checkLisenceTypes.FAIL_CHECK_LISENCE]:(state,{payload})=>({
        ...state,loading:false,lisenceStatusData:null
    }),
},initialState)