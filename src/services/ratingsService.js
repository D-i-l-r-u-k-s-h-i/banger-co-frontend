import {createLogic} from 'redux-logic'

import {addRatingActions,addRatingTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const addreview=createLogic({
    type:addRatingTypes.ADD_RATING,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            vehicleId:action.payload.vehicleid,
            customerRating:action.payload.rating
        }

        HTTPclient.post(endPoints.ADD_RATING,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(addRatingActions.addRatingSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add rating";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addRatingActions.addRatingFail(errormsg))
            }).then(()=>done());
    }
})

export default [
    addreview,
]