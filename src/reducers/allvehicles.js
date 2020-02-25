import {allVehicleTypes,vehiclesBookedByUserTypes,deleteVehicleTypes,addVehicleTypes,updateVehicleTypes} from '../actions'

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
    [deleteVehicleTypes.DELETE_VEHICLE]:(state,{payload})=>({
        ...state, removeItem: {
            ...state.removeItem,
            loading:true,
            vehicleData: payload
        }
    }),
    [deleteVehicleTypes.SUCCESS_DELETE_VEHICLE]:(state,{payload})=>{
        console.log(state)
        if (state.vehicleData && Array.isArray(state.vehicleData) && state.vehicleData.length !== 0) {
            state.vehicleData && state.vehicleData.map((removeId, index) => {
                console.log(removeId.id)
                console.log(state.removeItem.vehicleData)
                if (removeId.id == state.removeItem.vehicleData) {
                    return state.vehicleData.splice(index, 1);
                }
            })
        }
        return {
            ...state,
            removeItem: {
                ...state.removeItem,
                loading: false,
                removeItem: true,
                removeItemError: undefined
            }
        }
    },
    [deleteVehicleTypes.FAIL_DELETE_VEHICLE]:(state,{payload})=>({
        ...state,loading:false,vehicleData:null
    }),
    [addVehicleTypes.ADD_VEHICLE]:(state,{payload})=>({
        ...state, addItem: {
            ...state.addItem,
            loading:true,
            vehicleData: payload
        }
    }),
    [addVehicleTypes.SUCCESS_ADD_VEHICLE]:(state,{payload})=>{
        console.log(state)

        var object = {};
        state.addItem.vehicleData.forEach((value, key) => {
            object[key] = value
        });
        
        console.log(object)  

        if (state.vehicleData && Array.isArray(state.vehicleData) && state.vehicleData.length !== 0) {
            
            object.imgFile=object.b64image.startsWith('data:image/png')?object.b64image.replace('data:image/png;base64,','') : object.b64image.replace('data:image/jpeg;base64,','')
            console.log(object)    
            return state.vehicleData.push(object);
        }
        
        return {
            ...state,
            addItem: {
                ...state.addItem,
                loading: false,
                addItem: true,
                addItemError: undefined
            }
        }
    },
    [addVehicleTypes.FAIL_ADD_VEHICLE]:(state,{payload})=>({
        ...state,loading:false,vehicleData:null
    }),
    [updateVehicleTypes.UPDATE_VEHICLE]:(state,{payload})=>({
        ...state, addItem: {
            ...state.addItem,
            loading:true,
            vehicleData: payload
        }
    }),
    [updateVehicleTypes.SUCCESS_UPDATE_VEHICLE]:(state,{payload})=>{
        console.log(state)

        var object = {};
        state.addItem.vehicleData.forEach((value, key) => {
            object[key] = value
        });
        
        console.log(object)
        if (state.vehicleData && Array.isArray(state.vehicleData) && state.vehicleData.length !== 0) {
            state.vehicleData && state.vehicleData.map((removeId, index) => {
                // console.log(removeId.id)
                // console.log(state.addItem.vehicleData.vehicleId)
                if (removeId.vehicleId == object.vehicleId) {
                    object.vehicleName=object && object.hasOwnProperty('vehicleName') ?object.vehicleName:object.vehicleName=removeId.vehicleName
                    object.vehicleRentalPrice=object && object.hasOwnProperty('vehicleRentalPrice')?object.vehicleRentalPrice :object.vehicleRentalPrice=removeId.vehicleRentalPrice
                    object.gearboxType=object && object.hasOwnProperty('gearboxType')?object.gearboxType:object.gearboxType=removeId.gearboxType
                    object.fuelType=object && object.hasOwnProperty('fuelType')?object.fuelType:object.fuelType=removeId.fuelType
                    object.vehicleType=object && object.hasOwnProperty('vehicleType')?object.vehicleType:object.vehicleType=removeId.vehicleType
                    object.imgFile=object && object.hasOwnProperty('imgFile')?(object.imgFile=object.b64image.startsWith('data:image/png;base64,')?object.b64image.replace('data:image/png;base64,','') : object.b64image.replace('data:image/jpeg;base64,','')):object.imgFile=removeId.imgFile
                    
                    console.log(object)
                    return state.vehicleData.splice(index,1, object)
                }
            })

        }
        
        return {
            ...state,
            addItem: {
                ...state.addItem,
                loading: false,
                addItem: true,
                addItemError: undefined
            }
        }
    },
    [updateVehicleTypes.FAIL_UPDATE_VEHICLE]:(state,{payload})=>({
        ...state,loading:false,vehicleData:null
    }),
},initialState)