import {
    createLogic
} from 'redux-logic'

import {
    allVehicleActions,
    allVehicleTypes
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

        debugger
        console.log("payload check", action.payload)

        let obj = [{
            id: action.payload.id,
            index: action.payload.index,
            vehicleRentalPrice: action.payload.rentalprice,
            vehicleImgLink: action.payload.imglink,
            vehicleName: action.payload.vehiclename,
            gearboxType: action.payload.gearbox,
            vehicleType: action.payload.vehicletype,
            vehicleRating: action.payload.rating,
            availabilityStatus: action.payload.availability
        }]

        HTTPclient.get(endPoints.ALL_VEHICLES, obj)
            .then(resp => {
                debugger
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

export default [
    allvehicles,
]