import {createAction} from 'redux-actions'

export const GET_VEHICLES_BOOKED_BY_USER="GET_VEHICLES_BOOKED_BY_USER";
export const SUCCESS_GET_VEHICLES_BOOKED_BY_USER="SUCCESS_GET_VEHICLES_BOOKED_BY_USER";
export const FAIL_GET_VEHICLES_BOOKED_BY_USER="FAIL_GET_VEHICLES_BOOKED_BY_USER";

export default {
    getVehiclesBookedByUser:createAction(GET_VEHICLES_BOOKED_BY_USER),
    getVehiclesBookedByUserSuccess:createAction(SUCCESS_GET_VEHICLES_BOOKED_BY_USER),
    getVehiclesBookedByUserFail:createAction(FAIL_GET_VEHICLES_BOOKED_BY_USER)

}