import * as SignUp from './signup'
import * as AllVehicles from './allVehicles'

//taken by reducer
export{
    SignUp as signUpTypes
}

//taken by reducer
export{
    AllVehicles as allVehicleTypes
}
//for the actions
export const allVehicleActions=AllVehicles.default;
//for the actions
export const signUpActions=SignUp.default;


