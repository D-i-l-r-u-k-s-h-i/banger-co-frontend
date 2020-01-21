import {createAction} from 'redux-actions'

export const CONFIRM_PICKUP="CONFIRM_PICKUP";
export const SUCCESS_CONFIRM_PICKUP="SUCCESS_CONFIRM_PICKUP";
export const FAIL_CONFIRM_PICKUP="FAIL_CONFIRM_PICKUP";

export default {
    confirmPickup:createAction(CONFIRM_PICKUP),
    confirmPickupSuccess:createAction(SUCCESS_CONFIRM_PICKUP),
    confirmPickupFail:createAction(FAIL_CONFIRM_PICKUP)
}