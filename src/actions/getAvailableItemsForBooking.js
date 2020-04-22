import {createAction} from 'redux-actions'

export const GET_AVAILABLE_ITEMS_FOR_BOOKING="GET_AVAILABLE_ITEMS_FOR_BOOKING";
export const SUCCESS_GET_AVAILABLE_ITEMS_FOR_BOOKING="SUCCESS_GET_AVAILABLE_ITEMS_FOR_BOOKING";
export const FAIL_GET_AVAILABLE_ITEMS_FOR_BOOKING="FAIL_GET_AVAILABLE_ITEMS_FOR_BOOKING";

export default {
    getAvailableItemsForBooking:createAction(GET_AVAILABLE_ITEMS_FOR_BOOKING),
    getAvailableItemsForBookingSuccess:createAction(SUCCESS_GET_AVAILABLE_ITEMS_FOR_BOOKING),
    getAvailableItemsForBookingFail:createAction(FAIL_GET_AVAILABLE_ITEMS_FOR_BOOKING)

}