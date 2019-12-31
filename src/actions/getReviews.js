import {createAction} from 'redux-actions'

export const GET_REVIEWS="GET_REVIEWS";
export const SUCCESS_GET_REVIEWS="SUCCESS_GET_REVIEWS";
export const FAIL_GET_REVIEWS="FAIL_GET_REVIEWS";

export default {
    getReviews:createAction(GET_REVIEWS),
    getReviewsSuccess:createAction(SUCCESS_GET_REVIEWS),
    getReviewsFail:createAction(FAIL_GET_REVIEWS)

}