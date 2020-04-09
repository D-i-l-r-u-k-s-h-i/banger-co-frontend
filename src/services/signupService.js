import {createLogic} from 'redux-logic'

import {signUpActions,signUpTypes,updateCustomerActions,updateCustomerTypes} from "../actions"

import * as endPoints from './endpoints'
import * as api from './HTTPclient'

const signup=createLogic({
    type:signUpTypes.SIGN_UP,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        console.log("payload check",action.payload)

        let obj={
            customerFirstName : action.payload.fname,
            customerLastName:action.payload.lname,
            customerContactNo :action.payload.contact,
            customerEmergencyContactNo:action.payload.emergency_contact,
            customerEmail :action.payload.email,
            customerUserName:action.payload.username,
            customerPassword :action.payload.password,
            confirmPassword:action.payload.confirm_pass
        }

        HTTPclient.post(endPoints.SIGNUP,obj)
            .then(resp=> {
                
                dispatch(signUpActions.signUpSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to Sign Up";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(signUpActions.signUpFail(errormsg))
            }).then(()=>done());
        
    }
})

const updatecust=createLogic({
    type:updateCustomerTypes.UPDATE_CUSTOMER,
    latest:true,
    debounce:1000,

    process({
        action
    },dispatch,done){
        let HTTPclient=api

        console.log("payload check",action.payload)

        let obj={
            customerId :action.payload.id,
            customerEmergencyContactNo:action.payload.eContact,
            customerAddress:action.payload.address,
            documentRecord:action.payload.records
        }

        HTTPclient.post(endPoints.UPDATE_CUSTOMER,obj)
            .then(resp=> {

                dispatch(updateCustomerActions.updateCustomerSuccess(resp.data))
            })
            .catch(err=>{
                var errormsg="Failed to Update Customer";
                if (err && err.code === "ECONNABORTED") {
                    errormsg = "Please check your internet connection.";
                }
                dispatch(updateCustomerActions.updateCustomerFail(errormsg))
            }).then(()=>done());
        
    }
})

export default [
    signup,
    updatecust
]