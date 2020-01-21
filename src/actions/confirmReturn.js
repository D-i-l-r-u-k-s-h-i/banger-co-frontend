import {createAction} from 'redux-actions'

export const CONFIRM_RETURN="CONFIRM_RETURN";
export const SUCCESS_CONFIRM_RETURN="SUCCESS_CONFIRM_RETURN";
export const FAIL_CONFIRM_RETURN="FAIL_CONFIRM_RETURN";

export default {
    confirmReturn:createAction(CONFIRM_RETURN),
    confirmReturnSuccess:createAction(SUCCESS_CONFIRM_RETURN),
    confirmReturnFail:createAction(FAIL_CONFIRM_RETURN)
}