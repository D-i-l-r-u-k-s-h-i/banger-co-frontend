import signupService from './signupService'
import allVehiclesService from './allVehiclesService'
import loginService from './loginService'
import bookingService from './makeBookingService'
import reviewService from './reviewService'
import ratingsService from './ratingsService'
import getTimeSlotsService from './getTimeSlotsService'
import getBookingService from './getBookingsService'
import allAdditionalEquipsService from './allAdditionalEquipsService'

export default [
    ...signupService,
    ...allVehiclesService,
    ...loginService,
    ...bookingService,
    ...reviewService,
    ...ratingsService,
    ...getTimeSlotsService,
    ...getBookingService,
    ...allAdditionalEquipsService
]
