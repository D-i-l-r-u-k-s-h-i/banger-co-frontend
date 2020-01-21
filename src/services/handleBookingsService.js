import {
    createLogic
} from 'redux-logic'

import {
    confirmPickupActions,
    confirmPickupTypes,
    confirmReturnActions,
    confirmReturnTypes,
    blacklistUserActions,
    blacklistUserTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const confirmpickup = createLogic({
    type: confirmPickupTypes.CONFIRM_PICKUP,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        var id=action.payload.bookingId
        
        HTTPclient.post(endPoints.PICKUP_BOOKING+id)
            .then(resp => {
                //debugger
                console.log(resp.data)

                dispatch(confirmPickupActions.confirmPickupSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to confirm pickup";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(confirmPickupActions.confirmPickupFail(errormsg))
            }).then(() => done());
    }
})

const confirmreturn = createLogic({
    type: confirmReturnTypes.CONFIRM_RETURN,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        var id=action.payload.bookingId
        
        HTTPclient.post(endPoints.RETURN_BOOKING+id)
            .then(resp => {
                //debugger
                console.log(resp.data)

                dispatch(confirmReturnActions.confirmReturnSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to cancel booking";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(confirmReturnActions.confirmReturnFail(errormsg))
            }).then(() => done());
    }
})

const blacklistuser = createLogic({
    type: blacklistUserTypes.BLACKLIST_USER,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        var id=action.payload.bookingId
        
        HTTPclient.post(endPoints.BLACKLIST_USER+id)
            .then(resp => {
                //debugger
                console.log(resp.data)

                dispatch(blacklistUserActions.blacklistUserSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to cancel booking";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(blacklistUserActions.blacklistUserFail(errormsg))
            }).then(() => done());
    }
})

export default [
    confirmpickup,
    confirmreturn,
    blacklistuser
]