import {signUpTypes,updateCustomerTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    SignUpData:null,
    userData:null
}

export default handleActions({
    [signUpTypes.SIGN_UP]:(state,{payload})=>({
        ...state,loading:true
    }),
    [signUpTypes.SUCCESS_SIGN_UP]:(state,{payload})=>({
        ...state,loading:false,SignUpData:payload
    }),
    [signUpTypes.FAIL_SIGN_UP]:(state,{payload})=>({
        ...state,loading:false,SignUpData:null
    }),
    [updateCustomerTypes.UPDATE_CUSTOMER]:(state,{payload})=>({
        ...state,loading:true
    }),
    [updateCustomerTypes.SUCCESS_UPDATE_CUSTOMER]:(state,{payload})=>({
        ...state,loading:false,userData:payload
    }),
    [updateCustomerTypes.FAIL_UPDATE_CUSTOMER]:(state,{payload})=>({
        ...state,loading:false,userData:null
    }),
},initialState)