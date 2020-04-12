import {createAction} from 'redux-actions'

export const CHECK_LISENCE="CHECK_LISENCE";
export const SUCCESS_CHECK_LISENCE="SUCCESS_CHECK_LISENCE";
export const FAIL_CHECK_LISENCE="FAIL_CHECK_LISENCE";

export default {
    checkLisence:createAction(CHECK_LISENCE),
    checkLisenceSuccess:createAction(SUCCESS_CHECK_LISENCE),
    checkLisenceFail:createAction(FAIL_CHECK_LISENCE)

}