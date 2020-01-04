import {createAction} from 'redux-actions'

export const GET_ALL_ADDITIONAL_EQUIPS="GET_ALL_ADDITIONAL_EQUIPS";
export const SUCCESS_GET_ALL_ADDITIONAL_EQUIPS="SUCCESS_GET_ALL_ADDITIONAL_EQUIPS";
export const FAIL_GET_ALL_ADDITIONAL_EQUIPS="FAIL_GET_ALL_ADDITIONAL_EQUIPS";

export default {
    allAdditionalEquips:createAction(GET_ALL_ADDITIONAL_EQUIPS),
    allAdditionalEquipsSuccess:createAction(SUCCESS_GET_ALL_ADDITIONAL_EQUIPS),
    allAdditionalEquipsFail:createAction(FAIL_GET_ALL_ADDITIONAL_EQUIPS)

}