import {createLogic} from 'redux-logic'

import {getCurrentBookingActions,getCurrentBookingTypes,getPastBookingActions,getPastBookingTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const getcurrentbookings = createLogic({
    type: getCurrentBookingTypes.GET_CURRENT_BOOKINGS,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        HTTPclient.get(endPoints.GET_CURRENT_BOOKINGS)
            .then(resp => {
                // debugger
                console.log(resp.data)
                dispatch(getCurrentBookingActions.getCurrentBookingsSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get current Bookings";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getCurrentBookingActions.getCurrentBookingsFail(errormsg))
            }).then(() => done());
    }
})

const getpastbookings = createLogic({
    type: getPastBookingTypes.GET_PAST_BOOKINGS,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        HTTPclient.get(endPoints.GET_PAST_BOOKINGS)
            .then(resp => {
                // debugger
                console.log(resp.data)
                dispatch(getPastBookingActions.getPastBookingsSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get current Bookings";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getPastBookingActions.getPastBookingsFail(errormsg))
            }).then(() => done());
    }
})

export default [
    getcurrentbookings,
    getpastbookings
]