import {createAction} from 'redux-actions'

export const GET_TIME_SLOTS="GET_TIME_SLOTS";
export const SUCCESS_GET_TIME_SLOTS="SUCCESS_GET_TIME_SLOTS";
export const FAIL_GET_TIME_SLOTS="FAIL_GET_TIME_SLOTS";

export default {
    getTimeSlots:createAction(GET_TIME_SLOTS),
    getTimeSlotsSuccess:createAction(SUCCESS_GET_TIME_SLOTS),
    getTimeSlotsFail:createAction(FAIL_GET_TIME_SLOTS)

}