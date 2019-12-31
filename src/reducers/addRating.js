import {addRatingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    RatingData:null
}

export default handleActions({
    [addRatingTypes.ADD_RATING]:(state,{payload})=>({
        ...state,loading:true
    }),
    [addRatingTypes.SUCCESS_ADD_RATING]:(state,{payload})=>({
        ...state,loading:false,RatingData:payload
    }),
    [addRatingTypes.FAIL_ADD_RATINGW]:(state,{payload})=>({
        ...state,loading:false,RatingData:null
    }),
},initialState)