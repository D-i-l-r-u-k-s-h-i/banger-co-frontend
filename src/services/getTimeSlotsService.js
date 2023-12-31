import {
    createLogic
} from 'redux-logic'

import {
    getTimeSlotActions,
    getTimeSlotTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const timeslots = createLogic({
    type: getTimeSlotTypes.GET_TIME_SLOTS,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        var id
        if(action.payload.vehicleid){
            id="vehicle/"+action.payload.vehicleid
        }

        if(action.payload.equipmentid){
            id="equipment/"+action.payload.equipmentid
        }
        
        HTTPclient.get(endPoints.GET_TIME_SLOTS+id)
            .then(resp => {
                //debugger
                console.log(resp.data)

                dispatch(getTimeSlotActions.getTimeSlotsSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get all vehicles";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getTimeSlotActions.getTimeSlotsFail(errormsg))
            }).then(() => done());
    }
})

export default [
    timeslots,
]