import {createAction} from 'redux-actions'

export const ADD_ITEM_TO_BOOKING="ADD_ITEM_TO_BOOKING";
export const SUCCESS_ADD_ITEM_TO_BOOKING="SUCCESS_ADD_ITEM_TO_BOOKING";
export const FAIL_ADD_ITEM_TO_BOOKING="FAIL_ADD_ITEM_TO_BOOKING";

export default {
    addItemToBooking:createAction(ADD_ITEM_TO_BOOKING),
    addItemToBookingSuccess:createAction(SUCCESS_ADD_ITEM_TO_BOOKING),
    addItemToBookingFail:createAction(FAIL_ADD_ITEM_TO_BOOKING)

}