import * as SignUp from './signup'
import * as AllVehicles from './allVehicles'
import * as Login from './login'
import * as MakeBooking from './makeBooking'

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

export{
    MakeBooking as bookingTypes
}

export const bookingActions=MakeBooking.default;
//for the actions
export const allVehicleActions=AllVehicles.default;
//for the actions
export const signUpActions=SignUp.default;

export const loginActions=Login.default;
