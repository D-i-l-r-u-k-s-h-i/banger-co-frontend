import {createAction} from 'redux-actions'

export const GET_ALL_VEHICLES="GET_ALL_VEHICLES";
export const SUCCESS_GET_ALL_VEHICLES="SUCCESS_GET_ALL_VEHICLES";
export const FAIL_GET_ALL_VEHICLES="FAIL_GET_ALL_VEHICLES";

export default {
    allVehicles:createAction(GET_ALL_VEHICLES),
    allVehiclesSuccess:createAction(SUCCESS_GET_ALL_VEHICLES),
    allVehiclesFail:createAction(FAIL_GET_ALL_VEHICLES)

}