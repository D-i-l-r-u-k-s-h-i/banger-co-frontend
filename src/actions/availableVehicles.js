import {createAction} from 'redux-actions'

export const GET_AVAILABLE_VEHICLES="GET_AVAILABLE_VEHICLES";
export const SUCCESS_GET_AVAILABLE_VEHICLES="SUCCESS_GET_AVAILABLE_VEHICLES";
export const FAIL_GET_AVAILABLE_VEHICLES="FAIL_GET_AVAILABLE_VEHICLES";

export default {
    availableVehicles:createAction(GET_AVAILABLE_VEHICLES),
    availableVehiclesSuccess:createAction(SUCCESS_GET_AVAILABLE_VEHICLES),
    availableVehiclesFail:createAction(FAIL_GET_AVAILABLE_VEHICLES)

}