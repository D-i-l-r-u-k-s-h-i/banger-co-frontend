import {createAction} from 'redux-actions'

export const UPDATE_VEHICLE="UPDATE_VEHICLE";
export const SUCCESS_UPDATE_VEHICLE="SUCCESS_UPDATE_VEHICLE";
export const FAIL_UPDATE_VEHICLE="FAIL_UPDATE_VEHICLE";

export default {
    updateVehicle:createAction(UPDATE_VEHICLE),
    updateVehicleSuccess:createAction(SUCCESS_UPDATE_VEHICLE),
    updateVehicleFail:createAction(FAIL_UPDATE_VEHICLE)

}