import {
    createLogic
} from 'redux-logic'

import {
    allVehicleActions,
    allVehicleTypes,
    vehiclesBookedByUserActions,
    vehiclesBookedByUserTypes,
    deleteVehicleActions,
    deleteVehicleTypes,
    addVehicleActions,
    addVehicleTypes,
    updateVehicleActions,
    updateVehicleTypes
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

const deletevehicle = createLogic({
    type: deleteVehicleTypes.DELETE_VEHICLE,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)
        let vehicleId=action.payload

        HTTPclient.post(endPoints.DELETE_VEHICLE+vehicleId)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(deleteVehicleActions.deleteVehicleSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(deleteVehicleActions.deleteVehicleFail(errormsg))
            }).then(() => done());
    }
})

const addvehicle=createLogic({
    type:addVehicleTypes.ADD_VEHICLE,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            vehicleName: action.payload.name,
            gearboxType:action.payload.gearbox,
            vehicleRentalPrice:action.payload.price,
            vehicleType:action.payload.type,
            fuelType:action.payload.fueltype,
            vehicleImgLink:action.payload.img,
        }

        HTTPclient.post(endPoints.ADD_VEHICLE,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(addVehicleActions.addVehicleSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add review";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addVehicleActions.addVehicleFail(errormsg))
            }).then(()=>done());
    }
})

const updatevehicle=createLogic({
    type:updateVehicleTypes.UPDATE_VEHICLE,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            id:action.payload.vehicleId,
            vehicleName: action.payload.name,
            gearboxType:action.payload.gearbox,
            vehicleRentalPrice:action.payload.price,
            vehicleType:action.payload.type,
            fuelType:action.payload.fueltype,
            vehicleImgLink:action.payload.img,
        }

        HTTPclient.post(endPoints.UPDATE_VEHICLE,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(updateVehicleActions.updateVehicleSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to update craft";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(updateVehicleActions.updateVehicleFail(errormsg))
            }).then(()=>done());
    }
})

export default [
    allvehicles,
    vehiclesBookedByUser,
    deletevehicle,
    addvehicle,
    updatevehicle
]