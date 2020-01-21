import {
    createLogic
} from 'redux-logic'

import {
    allVehicleActions,
    allVehicleTypes,
    vehiclesBookedByUserActions,
    vehiclesBookedByUserTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const allvehicles = createLogic({
    type: allVehicleTypes.GET_ALL_VEHICLES,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        HTTPclient.get(endPoints.ALL_VEHICLES)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(allVehicleActions.allVehiclesSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get all vehicles";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(allVehicleActions.allVehiclesFail(errormsg))
            }).then(() => done());
    }
})

const vehiclesBookedByUser = createLogic({
    type: vehiclesBookedByUserTypes.GET_VEHICLES_BOOKED_BY_USER,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        HTTPclient.get(endPoints.VEHICLES_BOOKED_BY_USER)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(vehiclesBookedByUserActions.getVehiclesBookedByUserSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get vehicles";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(vehiclesBookedByUserActions.getVehiclesBookedByUserFail(errormsg))
            }).then(() => done());
    }
})

export default [
    allvehicles,
    vehiclesBookedByUser
]