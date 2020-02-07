import {createLogic} from 'redux-logic'

import {bookingActions,bookingTypes,extendBookingActions,extendBookingTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const booking=createLogic({
    type:bookingTypes.BOOKING,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            pickupDate : action.payload.startDate,
            returnDate:action.payload.endDate,
            vehicleId :action.payload.vehicleId,
            equipmentId:action.payload.equipmentId
        }

        HTTPclient.post(endPoints.MAKE_BOOKING,obj)
            .then(resp=> {
                console.log(resp.data)
                dispatch(bookingActions.bookingSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to Book vehicle";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(bookingActions.bookingFail(errormsg))
            }).then(()=>done());
        
    }
})

const extendbooking=createLogic({
    type:extendBookingTypes.EXTEND_BOOKING,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        var bookingId=action.payload.bookingId //check

        HTTPclient.post(endPoints.EXTEND_BOOKING+bookingId)
            .then(resp=> {
                // debugger
                dispatch(extendBookingActions.extendBookingSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to Extend Booking";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(extendBookingActions.extendBookingFail(errormsg))
            }).then(()=>done());
        
    }
})

export default [
    booking,
    extendbooking
]