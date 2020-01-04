import {allAdditionalEquipTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    additionalEquipsData:null
}

export default handleActions({
    [allAdditionalEquipTypes.GET_ALL_ADDITIONAL_EQUIPS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [allAdditionalEquipTypes.SUCCESS_GET_ALL_ADDITIONAL_EQUIPS]:(state,{payload})=>({
        ...state,loading:false,additionalEquipsData:payload
    }),
    [allAdditionalEquipTypes.FAIL_GET_ALL_ADDITIONAL_EQUIPS]:(state,{payload})=>({
        ...state,loading:false,additionalEquipsData:null
    }),
},initialState)