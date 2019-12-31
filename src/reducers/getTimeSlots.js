import {getTimeSlotTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    timeslotData:null
}

export default handleActions({
    [getTimeSlotTypes.GET_TIME_SLOTS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getTimeSlotTypes.SUCCESS_GET_TIME_SLOTS]:(state,{payload})=>({
        ...state,loading:false,timeslotData:payload
    }),
    [getTimeSlotTypes.FAIL_GET_TIME_SLOTS]:(state,{payload})=>({
        ...state,loading:false,timeslotData:null
    }),
},initialState)