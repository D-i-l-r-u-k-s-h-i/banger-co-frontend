import {
    createLogic
} from 'redux-logic'

import {
    allAdditionalEquipTypes,
    allAdditionalEquipsActions
} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const alladditionalequips = createLogic({
    type: allAdditionalEquipTypes.GET_ALL_ADDITIONAL_EQUIPS,
    latest: true,
    debounce: 1000,

    process({
        action
    }, dispatch, done) {
        let HTTPclient = api

        // debugger
        console.log("payload check", action.payload)

        HTTPclient.get(endPoints.ALL_ADDITIONAL_EQUIPS)
            .then(resp => {
                //debugger
                console.log(resp.data)
                dispatch(allAdditionalEquipsActions.allAdditionalEquipsSuccess(resp.data))
            })
            .catch(err => {
                var errormsg = "Failed to get all vehicles";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(allAdditionalEquipsActions.allAdditionalEquipsFail(errormsg))
            }).then(() => done());
    }
})

export default [
    alladditionalequips,
]