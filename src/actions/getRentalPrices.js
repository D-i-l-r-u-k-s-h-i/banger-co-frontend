import {createAction} from 'redux-actions'

export const GET_RENTAL_PRICES="GET_RENTAL_PRICES";
export const SUCCESS_GET_RENTAL_PRICES="SUCCESS_GET_RENTAL_PRICES";
export const FAIL_GET_RENTAL_PRICES="FAIL_GET_RENTAL_PRICES";

export default {
    getRentalPrices:createAction(GET_RENTAL_PRICES),
    getRentalPricesSuccess:createAction(SUCCESS_GET_RENTAL_PRICES),
    getRentalPricesFail:createAction(FAIL_GET_RENTAL_PRICES)

}