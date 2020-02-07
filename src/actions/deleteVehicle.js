import {createAction} from 'redux-actions'

export const DELETE_VEHICLE="DELETE_VEHICLE";
export const SUCCESS_DELETE_VEHICLE="SUCCESS_DELETE_VEHICLE";
export const FAIL_DELETE_VEHICLE="FAIL_DELETE_VEHICLE";

export default {
    deleteVehicle:createAction(DELETE_VEHICLE),
    deleteVehicleSuccess:createAction(SUCCESS_DELETE_VEHICLE),
    deleteVehicleFail:createAction(FAIL_DELETE_VEHICLE)

}