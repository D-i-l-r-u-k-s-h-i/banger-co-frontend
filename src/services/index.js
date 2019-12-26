import signupService from './signupService'
import allVehiclesService from './allVehiclesService'
import loginService from './loginService'
import bookingService from './makeBookingService'

export default [
    ...signupService,
    ...allVehiclesService,
    ...loginService,
    ...bookingService
]
