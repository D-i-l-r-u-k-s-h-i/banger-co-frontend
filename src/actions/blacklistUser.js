import {createAction} from 'redux-actions'

export const BLACKLIST_USER="BLACKLIST_USER";
export const SUCCESS_BLACKLIST_USER="SUCCESS_BLACKLIST_USER";
export const FAIL_BLACKLIST_USER="FAIL_BLACKLIST_USER";

export default {
    blacklistUser:createAction(BLACKLIST_USER),
    blacklistUserSuccess:createAction(SUCCESS_BLACKLIST_USER),
    blacklistUserFail:createAction(FAIL_BLACKLIST_USER)
}