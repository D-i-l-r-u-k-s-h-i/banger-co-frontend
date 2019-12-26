import {createLogic} from 'redux-logic'

import {bookingActions,bookingTypes} from "../actions"

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

        debugger
        console.log("payload check",action.payload)

        let obj={
            pickupDate : action.payload.startDate,
            returnDate:action.payload.endDate,
            vehicleId :action.payload.vehicleId
        }

        HTTPclient.post(endPoints.MAKE_BOOKING,obj)
            .then(resp=> {
                debugger
                dispatch(bookingActions.bookingSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to Book vehicle";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(bookingActions.bookingUpFail(errormsg))
            }).then(()=>done());
        
    }
})

export default [
    booking,
]