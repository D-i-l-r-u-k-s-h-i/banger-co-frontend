import {createLogic} from 'redux-logic'

import {addReviewActions,addReviewTypes,getReviewsActions,getReviewsTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const addreview=createLogic({
    type:addReviewTypes.ADD_REVIEW,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        // debugger
        console.log("payload check",action.payload)

        let obj={
            customerReview : action.payload.review,
            vehicleId:action.payload.vehicleid,
        }

        HTTPclient.post(endPoints.ADD_REVIEW,obj)
            .then(resp=> {
                // debugger
                console.log(resp.data)
                dispatch(addReviewActions.addReviewSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to add review";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(addReviewActions.addReviewFail(errormsg))
            }).then(()=>done());
    }
})

const getreviews = createLogic({
    type: getReviewsTypes.GET_REVIEWS,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        let vehicle_id=action.payload.vehicleid

        HTTPclient.get(endPoints.GET_REVIEWS+vehicle_id)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(getReviewsActions.getReviewsSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get reviews";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(getReviewsActions.getReviewsFail(errormsg))
            }).then(() => done());
    }
})

export default [
    addreview,
    getreviews
]