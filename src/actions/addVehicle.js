import {createAction} from 'redux-actions'

export const ADD_VEHICLE="ADD_VEHICLE";
export const SUCCESS_ADD_VEHICLE="SUCCESS_ADD_VEHICLE";
export const FAIL_ADD_VEHICLE="FAIL_ADD_VEHICLE";

export default {
    addVehicle:createAction(ADD_VEHICLE),
    addVehicleSuccess:createAction(SUCCESS_ADD_VEHICLE),
    addVehicleFail:createAction(FAIL_ADD_VEHICLE)

}