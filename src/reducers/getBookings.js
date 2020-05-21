import {getCurrentBookingTypes,getPastBookingTypes,
    getTodaysBookingTypes,cancelBookingTypes,
    cancelBookingItemTypes,getAvailableBookingItemTypes,
    addItemToBookingTypes} from '../actions'

import {handleActions} from "redux-actions"

const initialState={
    bookingData:null,
    availableItemsData:null
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
        // console.log(state)
        if (state.bookingData && Array.isArray(state.bookingData) && state.bookingData.length !== 0) {
            state.bookingData && state.bookingData.map((removeId, index) => {
                // console.log(removeId)
                // console.log(state.removeItem.bookingData)
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
        // console.log(state)
        if (state.bookingData && Array.isArray(state.bookingData) && state.bookingData !== 0) {
            state.bookingData && state.bookingData.map((removeId, index) => {
                // console.log(removeId)
                // console.log(state.removeItem.bookingData.vehicleId)
                if (removeId.bookingId == state.removeItem.bookingData.bookingId) {
                    if (state.bookingData[index].vehicleList && Array.isArray(state.bookingData[index].vehicleList) && state.bookingData[index].vehicleList !== 0) {
                        state.bookingData[index].vehicleList && state.bookingData[index].vehicleList.map((removeItemId, index2) => {
                            // console.log(removeItemId.vehicle.vehicleId +" "+state.removeItem.bookingData.vehicleId)
                            if (removeItemId.vehicle.vehicleId == state.removeItem.bookingData.vehicleId) {
                                // console.log(removeItemId)
                                state.bookingData[index].total=state.bookingData[index].total - (state.bookingData[index].rentalPeriod * removeItemId.vehicle.vehicleRentalPrice)
                                return state.bookingData[index].vehicleList.splice(index2, 1);
                            }
                            
                        })
                        
                    }
                    if (state.bookingData[index].additionalEquipmentList && Array.isArray(state.bookingData[index].additionalEquipmentList) && state.bookingData[index].additionalEquipmentList !== 0) {
                        state.bookingData[index].additionalEquipmentList && state.bookingData[index].additionalEquipmentList.map((removeItemId, index2) => {
                            // console.log(removeItemId.equipment.equipmentId +" "+state.removeItem.bookingData.equipmentId)
                            if (removeItemId.equipment.equipmentId == state.removeItem.bookingData.equipmentId) {
                                // console.log(state.bookingData[index].additionalEquipmentList)
                                // console.log(removeItemId)
                                state.bookingData[index].total=state.bookingData[index].total - (state.bookingData[index].rentalPeriod * removeItemId.equipment.aeRentalPrice)
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
    [getAvailableBookingItemTypes.GET_AVAILABLE_ITEMS_FOR_BOOKING]:(state,{payload})=>({
        ...state,loading:true
    }),
    [getAvailableBookingItemTypes.SUCCESS_GET_AVAILABLE_ITEMS_FOR_BOOKING]:(state,{payload})=>({
        ...state,loading:false,availableItemsData:payload
    }),
    [getAvailableBookingItemTypes.FAIL_GET_AVAILABLE_ITEMS_FOR_BOOKING]:(state,{payload})=>({
        ...state,loading:false,availableItemsData:null
    }),
    [addItemToBookingTypes.ADD_ITEM_TO_BOOKING]:(state,{payload})=>({
        ...state, addItem: {
            ...state.addItem,
            loading:true,
            bookingData: payload
        }
    }),
    [addItemToBookingTypes.SUCCESS_ADD_ITEM_TO_BOOKING]:(state,{payload})=>{
        // console.log(state)

        if (state.bookingData && Array.isArray(state.bookingData) && state.bookingData !== 0) {
            state.bookingData && state.bookingData.map((addId, index) => {
                // console.log(addId)
                
                // console.log(state.bookingData[index].bookingId)
                // console.log(addId.bookingId)

                if(state.bookingData[index].bookingId==addId.bookingId){
                    
                    if(state.addItem.bookingData.equipmentId!=0){
                        if (state.bookingData[index].additionalEquipmentList && Array.isArray(state.bookingData[index].additionalEquipmentList) && state.bookingData[index].additionalEquipmentList.length !== 0) {
                            
                            state.availableItemsData.additionalEquipmentList && state.availableItemsData.additionalEquipmentList.map((equipId, index2) => {
                                // console.log(equipId)
                                if(equipId.equipmentId==state.addItem.bookingData.equipmentId){
                                    let obj={
                                        equipment:
                                        { 
                                            equipmentId:equipId.equipmentId,
                                            equipmentName:equipId.equipmentName,
                                            aeRentalPrice:equipId.aeRentalPrice,
                                        }
                                    }
                                    // console.log(obj)
                                    // console.log(state)
                                    // console.log(state.bookingData[index])
                                    state.bookingData[index].total=state.bookingData[index].total + (state.bookingData[index].rentalPeriod * equipId.aeRentalPrice)

                                    state.availableItemsData.additionalEquipmentList.splice(index2, 1)
                                    return state.bookingData[index].additionalEquipmentList.push(obj);
                                }
                            })
                        }
                    }
                    
                    if(state.addItem.bookingData.vehicleId!=0){
                        if (state.bookingData[index].vehicleList && Array.isArray(state.bookingData[index].vehicleList) && state.bookingData[index].vehicleList.length !== 0) {
                            state.availableItemsData.vehicleList && state.availableItemsData.vehicleList.map((vehicleId, index2) => {
                                // console.log(vehicleId)
                                if(vehicleId.vehicleId==state.addItem.bookingData.vehicleId){
                                    let obj={
                                        vehicle:
                                        {   vehicleId:vehicleId.vehicleId,
                                            vehicleName:vehicleId.vehicleName,
                                            vehicleRentalPrice:vehicleId.vehicleRentalPrice
                                        }
                                    }
                                    // console.log(obj)
                                    // console.log(state)
                                    // console.log(state.bookingData[index])
                                    state.bookingData[index].total=state.bookingData[index].total + (state.bookingData[index].rentalPeriod * vehicleId.vehicleRentalPrice)

                                    state.availableItemsData.vehicleList.splice(index2, 1)
                                    return state.bookingData[index].vehicleList.push(obj);
                                }
                            })
                        }
                    }
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
    [addItemToBookingTypes.FAIL_ADD_ITEM_TO_BOOKING]:(state,{payload})=>({
        ...state,loading:false,bookingData:null
    }),
},initialState)