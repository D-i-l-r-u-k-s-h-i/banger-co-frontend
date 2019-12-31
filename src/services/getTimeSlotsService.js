import {
    createLogic
} from 'redux-logic'

import {
    getTimeSlotActions,
    getTimeSlotTypes
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

import moment from 'moment'
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

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

        let vehicle_id=action.payload.vehicleid

        HTTPclient.get(endPoints.GET_TIME_SLOTS+vehicle_id)
            .then(resp => {
                //debugger
                console.log(resp.data)

                // const timeSlotArray = resp.data;
                // //sending this to the reducer
                // var arr = [];

                // timeSlotArray.forEach(element => {
                //     // var obj = setHours(setMinutes(Date.parse(element.timeSlot), element.minute), element.hour)
                //     var obj=moment().hours(element.hour).minutes(element.minute)._d
                //     arr.push(obj)
                // });

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