import * as SignUp from './signup'
import * as AllVehicles from './allVehicles'
import * as Login from './login'

//taken by reducer
export{
    SignUp as signUpTypes
}

export{
    Login as loginTypes
}

//taken by reducer
export{
    AllVehicles as allVehicleTypes
}

//for the actions
export const allVehicleActions=AllVehicles.default;
//for the actions
export const signUpActions=SignUp.default;

export const loginActions=Login.default;
