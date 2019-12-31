import * as SignUp from './signup'
import * as AllVehicles from './allVehicles'
import * as Login from './login'
import * as MakeBooking from './makeBooking'
import * as AddReview from './addReview'
import * as AddRating from './addRating'
import * as GetReviews from './getReviews'
import * as GetTimeSlots from './getTimeSlots'

//taken by reducer
export{
    SignUp as signUpTypes
}

export{
    Login as loginTypes
}

export{
    AllVehicles as allVehicleTypes
}

export{
    MakeBooking as bookingTypes
}

export{
    AddReview as addReviewTypes
}

export{
    AddRating as addRatingTypes
}

export{
    GetReviews as getReviewsTypes
}

export{
    GetTimeSlots as getTimeSlotTypes
}



//for the actions
export const addReviewActions=AddReview.default;

export const getTimeSlotActions=GetTimeSlots.default;

export const getReviewsActions=GetReviews.default;

export const addRatingActions=AddRating.default;

export const bookingActions=MakeBooking.default;

export const allVehicleActions=AllVehicles.default;

export const signUpActions=SignUp.default;

export const loginActions=Login.default;
