import {allVehicleTypes,vehiclesBookedByUserTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    vehicleData:null
}

export default handleActions({
    [allVehicleTypes.GET_ALL_VEHICLES]:(state,{payload})=>({
        ...state,loading:true
    }),
    [allVehicleTypes.SUCCESS_GET_ALL_VEHICLES]:(state,{payload})=>({
        ...state,loading:false,vehicleData:payload
    }),
    [allVehicleTypes.FAIL_GET_ALL_VEHICLES]:(state,{payload})=>({
        ...state,loading:false,vehicleData:null
    }),
    [vehiclesBookedByUserTypes.GET_VEHICLES_BOOKED_BY_USER]:(state,{payload})=>({
        ...state,loading:true
    }),
    [vehiclesBookedByUserTypes.SUCCESS_GET_VEHICLES_BOOKED_BY_USER]:(state,{payload})=>({
        ...state,loading:false,vehicleData:payload
    }),
    [vehiclesBookedByUserTypes.FAIL_GET_VEHICLES_BOOKED_BY_USER]:(state,{payload})=>({
        ...state,loading:false,vehicleData:null
    }),
},initialState)