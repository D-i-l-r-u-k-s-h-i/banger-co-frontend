import {createAction} from 'redux-actions'

export const CANCEL_BOOKING_ITEM="CANCEL_BOOKING_ITEM";
export const SUCCESS_CANCEL_BOOKING_ITEM="SUCCESS_CANCEL_BOOKING_ITEM";
export const FAIL_CANCEL_BOOKING_ITEM="FAIL_CANCEL_BOOKING_ITEM";

export default {
    cancelBookingItem:createAction(CANCEL_BOOKING_ITEM),
    cancelBookingItemSuccess:createAction(SUCCESS_CANCEL_BOOKING_ITEM),
    cancelBookingItemFail:createAction(FAIL_CANCEL_BOOKING_ITEM)
}