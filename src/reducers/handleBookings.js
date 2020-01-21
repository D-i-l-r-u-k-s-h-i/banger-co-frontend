import {confirmPickupTypes,confirmReturnTypes,blacklistUserTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    BookingData:null
}

export default handleActions({
    [confirmPickupTypes.CONFIRM_PICKUP]:(state,{payload})=>({
        ...state,loading:true
    }),
    [confirmPickupTypes.SUCCESS_CONFIRM_PICKUP]:(state,{payload})=>({
        ...state,loading:false,BookingData:payload
    }),
    [confirmPickupTypes.FAIL_CONFIRM_PICKUP]:(state,{payload})=>({
        ...state,loading:false,BookingData:null
    }),
    [confirmReturnTypes.CONFIRM_RETURN]:(state,{payload})=>({
        ...state,loading:true
    }),
    [confirmReturnTypes.SUCCESS_CONFIRM_RETURN]:(state,{payload})=>({
        ...state,loading:false,BookingData:payload
    }),
    [confirmReturnTypes.FAIL_CONFIRM_RETURN]:(state,{payload})=>({
        ...state,loading:false,BookingData:null
    }),
    [blacklistUserTypes.BLACKLIST_USER]:(state,{payload})=>({
        ...state,loading:true
    }),
    [blacklistUserTypes.SUCCESS_BLACKLIST_USER]:(state,{payload})=>({
        ...state,loading:false,BookingData:payload
    }),
    [blacklistUserTypes.FAIL_BLACKLIST_USER]:(state,{payload})=>({
        ...state,loading:false,BookingData:null
    }),
},initialState)