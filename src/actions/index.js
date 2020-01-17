import * as SignUp from './signup'
import * as AllVehicles from './allVehicles'
import * as Login from './login'
import * as MakeBooking from './makeBooking'
import * as AddReview from './addReview'
import * as AddRating from './addRating'
import * as GetReviews from './getReviews'
import * as GetTimeSlots from './getTimeSlots'
import * as GetCurrentBookings from './getCurrentBookings'
import * as GetPastBookings from './getPastBookings'
import * as AllAdditionalEquips from './allAdditionalEquips'
import * as CancelBooking from './cancelBooking'
import * as CancelBookingItem from './cancelBookingItem'
import * as ExtendBooking from './extendBooking'


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

export{
    GetCurrentBookings as getCurrentBookingTypes
}

export{
    GetPastBookings as getPastBookingTypes
}

export{
    AllAdditionalEquips as allAdditionalEquipTypes
}

export{
    CancelBooking as cancelBookingTypes
}

export{
    CancelBookingItem as cancelBookingItemTypes
}

export{
    ExtendBooking as extendBookingTypes
}


//for the actions
export const allAdditionalEquipsActions=AllAdditionalEquips.default;

export const cancelBookingActions=CancelBooking.default;

export const extendBookingActions=ExtendBooking.default;

export const cancelBookingItemActions=CancelBookingItem.default;

export const addReviewActions=AddReview.default;

export const getPastBookingActions=GetPastBookings.default;

export const getCurrentBookingActions=GetCurrentBookings.default;

export const getTimeSlotActions=GetTimeSlots.default;

export const getReviewsActions=GetReviews.default;

export const addRatingActions=AddRating.default;

export const bookingActions=MakeBooking.default;

export const allVehicleActions=AllVehicles.default;

export const signUpActions=SignUp.default;

export const loginActions=Login.default;
