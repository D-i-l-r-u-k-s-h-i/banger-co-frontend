import {getCurrentBookingTypes,getPastBookingTypes,getTodaysBookingTypes,cancelBookingTypes,cancelBookingItemTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    bookingData:null
}

export default handleActions({
    [getCurrentBookingTypes.GET_CURRENT_BOOKINGS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getCurrentBookingTypes.SUCCESS_GET_CURRENT_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:payload
    }),
    [getCurrentBookingTypes.FAIL_GET_CURRENT_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
    [getPastBookingTypes.GET_PAST_BOOKINGS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getPastBookingTypes.SUCCESS_GET_PAST_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:payload
    }),
    [getPastBookingTypes.FAIL_GET_PAST_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
    [getTodaysBookingTypes.GET_TODAYS_BOOKINGS]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getTodaysBookingTypes.SUCCESS_GET_TODAYS_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:payload
    }),
    [getTodaysBookingTypes.FAIL_GET_TODAYS_BOOKINGS]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
    [cancelBookingTypes.CANCEL_BOOKING]:(state,{payload})=>({
        ...state, removeItem: {
            ...state.removeItem,
            loading:true,
            bookingData: payload
        }
    }),
    [cancelBookingTypes.SUCCESS_CANCEL_BOOKING]:(state,{payload})=>{
        console.log(state)
        if (state.bookingData && Array.isArray(state.bookingData) && state.bookingData.length !== 0) {
            state.bookingData && state.bookingData.map((removeId, index) => {
                console.log(removeId)
                console.log(state.removeItem.bookingData)
                if (removeId.bookingId == state.removeItem.bookingData.bookingId) {
                    return state.bookingData.splice(index, 1);
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
    [cancelBookingTypes.FAIL_CANCEL_BOOKING]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
    [cancelBookingItemTypes.CANCEL_BOOKING_ITEM]:(state,{payload})=>({
        ...state, removeItem: {
            ...state.removeItem,
            loading:true,
            bookingData: payload
        }
    }),
    [cancelBookingItemTypes.SUCCESS_CANCEL_BOOKING_ITEM]:(state,{payload})=>{
        console.log(state)
        if (state.bookingData && Array.isArray(state.bookingData) && state.bookingData !== 0) {
            state.bookingData && state.bookingData.map((removeId, index) => {
                // console.log(removeId)
                // console.log(state.removeItem.bookingData.vehicleId)
                if (removeId.bookingId == state.removeItem.bookingData.bookingId) {
                    if (state.bookingData[index].vehicleList && Array.isArray(state.bookingData[index].vehicleList) && state.bookingData[index].vehicleList !== 0) {
                        state.bookingData[index].vehicleList && state.bookingData[index].vehicleList.map((removeItemId, index2) => {
                            console.log(removeItemId.vehicle.vehicleId +" "+state.removeItem.bookingData.vehicleId)
                            if (removeItemId.vehicle.vehicleId == state.removeItem.bookingData.vehicleId) {
                                console.log(state.bookingData[index].vehicleList)
                                return state.bookingData[index].vehicleList.splice(index2, 1);
                            }
                            
                        })
                        
                    }
                    if (state.bookingData[index].additionalEquipmentList && Array.isArray(state.bookingData[index].additionalEquipmentList) && state.bookingData[index].additionalEquipmentList !== 0) {
                        state.bookingData[index].additionalEquipmentList && state.bookingData[index].additionalEquipmentList.map((removeItemId, index2) => {
                            console.log(removeItemId.equipment.equipmentId +" "+state.removeItem.bookingData.equipmentId)
                            if (removeItemId.equipment.equipmentId == state.removeItem.bookingData.equipmentId) {
                                console.log(state.bookingData[index].additionalEquipmentList)
                                return state.bookingData[index].additionalEquipmentList.splice(index2, 1);
                            }
                            
                        })
                        
                    }
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
    [cancelBookingItemTypes.FAIL_CANCEL_BOOKING_ITEM]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
},initialState)