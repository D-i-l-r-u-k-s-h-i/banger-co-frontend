import {
    createLogic
} from 'redux-logic'

import {
    cancelBookingActions,
    cancelBookingTypes,
    cancelBookingItemActions,
    cancelBookingItemTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const cancelbooking = createLogic({
    type: cancelBookingTypes.CANCEL_BOOKING,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        var id=action.payload.bookingId
        
        HTTPclient.post(endPoints.CANCEL_BOOKING+id)
            .then(resp => {
                //debugger
                console.log(resp.data)

                dispatch(cancelBookingActions.cancelBookingSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to cancel booking";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(cancelBookingActions.cancelBookingFail(errormsg))
            }).then(() => done());
    }
})

const cancelbookingitem = createLogic({
    type: cancelBookingItemTypes.CANCEL_BOOKING_ITEM,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        let obj={
            bookingId:action.payload.bookingId,
            vehicleId:action.payload.vehicleId,
            equipmentId:action.payload.equipmentId
        }
        
        HTTPclient.post(endPoints.CANCEL_BOOKING_ITEM,obj)
            .then(resp => {
                //debugger
                console.log(resp.data)

                dispatch(cancelBookingItemActions.cancelBookingItemSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to cancel booking";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(cancelBookingItemActions.cancelBookingItemFail(errormsg))
            }).then(() => done());
    }
})

export default [
    cancelbooking,
    cancelbookingitem
]