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
        if (state.vehicleData && Array.isArray(state.vehicleData) && state.vehicleData.length !== 0) {
            let obj={
                vehicleName: state.addItem.vehicleData.name,
                gearboxType: state.addItem.vehicleData.gearbox,
                vehicleRentalPrice: state.addItem.vehicleData.price,
                vehicleType: state.addItem.vehicleData.type,
                fuelType: state.addItem.vehicleData.fueltype,
                vehicleImgLink: state.addItem.vehicleData.img,
                
            }
            return state.vehicleData.push(obj);
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
        if (state.vehicleData && Array.isArray(state.vehicleData) && state.vehicleData.length !== 0) {
            state.vehicleData && state.vehicleData.map((removeId, index) => {
                // console.log(removeId.id)
                // console.log(state.addItem.vehicleData.vehicleId)
                if (removeId.id == state.addItem.vehicleData.vehicleId) {
                    let obj={
                        id:removeId.id,
                        vehicleName:state.addItem.vehicleData.name!=null? state.addItem.vehicleData.name:removeId.vehicleName,
                        vehicleRentalPrice:state.addItem.vehicleData.price!=0 ? state.addItem.vehicleData.price:removeId.vehicleRentalPrice,
                        gearboxType:state.addItem.vehicleData.gearbox !=null? state.addItem.vehicleData.gearbox:removeId.gearboxType,
                        fuelType:state.addItem.vehicleData.fueltype !=null? state.addItem.vehicleData.fueltype:removeId.fuelType,
                        vehicleType:state.addItem.vehicleData.type !=null? state.addItem.vehicleData.type:removeId.vehicleType,
                        vehicleImgLink:state.addItem.vehicleData.image !=null ?state.addItem.vehicleData.image:removeId.vehicleImgLink
                    }
                    console.log(obj)
                    return state.vehicleData.splice(index,1, obj)
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