import {createAction} from 'redux-actions'

export const UPDATE_CUSTOMER="UPDATE_CUSTOMER";
export const SUCCESS_UPDATE_CUSTOMER="SUCCESS_UPDATE_CUSTOMER";
export const FAIL_UPDATE_CUSTOMER="FAIL_UPDATE_CUSTOMER";

export default {
    updateCustomer:createAction(UPDATE_CUSTOMER),
    updateCustomerSuccess:createAction(SUCCESS_UPDATE_CUSTOMER),
    updateCustomerFail:createAction(FAIL_UPDATE_CUSTOMER)

}