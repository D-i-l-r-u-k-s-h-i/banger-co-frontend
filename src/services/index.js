import signupService from './signupService'
import allVehiclesService from './allVehiclesService'
import loginService from './loginService'

export default [
    ...signupService,
    ...allVehiclesService,
    ...loginService
]
