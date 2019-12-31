import {getReviewsTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    reviewData:null
}

export default handleActions({
    [getReviewsTypes.GET_REVIEWS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getReviewsTypes.SUCCESS_GET_REVIEWS]:(state,{payload})=>({
        ...state,loading:false,reviewData:payload
    }),
    [getReviewsTypes.FAIL_GET_REVIEWS]:(state,{payload})=>({
        ...state,loading:false,reviewData:null
    }),
},initialState)