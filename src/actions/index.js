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
import * as GetTodaysBookings from './todaysBookings'
import * as VehiclesBookedByUser from './distinctVehiclesBookedByUser'
import * as ConfirmPickup from './confirmPickup'
import * as ConfirmReturn from './confirmReturn'
import * as BlackListUser from './blacklistUser'
import * as DeleteVehicle from './deleteVehicle'
import * as AddVehicle from './addVehicle'
import * as UpdateVehicle from './updateVehicle'
import * as GetRentalPrices from './getRentalPrices'
import * as UpdateCustomer from './updateCustomer'
import * as CheckLisence from './checkLisenceNo'


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

export{
    GetTodaysBookings as getTodaysBookingTypes
}

export{
    VehiclesBookedByUser as vehiclesBookedByUserTypes
}

export{
    ConfirmPickup as confirmPickupTypes
}

export{
    ConfirmReturn as confirmReturnTypes
}

export{
    BlackListUser as blacklistUserTypes
}

export{
    DeleteVehicle as deleteVehicleTypes
}

export{
    AddVehicle as addVehicleTypes
}

export{
    UpdateVehicle as updateVehicleTypes
}

export{
    GetRentalPrices as getRentalPriceTypes
}

export{
    UpdateCustomer as updateCustomerTypes
}

export{
    CheckLisence as checkLisenceTypes
}

//for the actions
export const vehiclesBookedByUserActions=VehiclesBookedByUser.default;

export const getTodaysBookingActions=GetTodaysBookings.default;

export const allAdditionalEquipsActions=AllAdditionalEquips.default;

export const cancelBookingActions=CancelBooking.default;

export const confirmPickupActions=ConfirmPickup.default;

export const checkLisenceActions=CheckLisence.default;

export const confirmReturnActions=ConfirmReturn.default;

export const blacklistUserActions=BlackListUser.default;

export const extendBookingActions=ExtendBooking.default;

export const cancelBookingItemActions=CancelBookingItem.default;

export const deleteVehicleActions=DeleteVehicle.default;

export const addReviewActions=AddReview.default;

export const addVehicleActions=AddVehicle.default;

export const updateVehicleActions=UpdateVehicle.default;

export const updateCustomerActions=UpdateCustomer.default;

export const getPastBookingActions=GetPastBookings.default;

export const getCurrentBookingActions=GetCurrentBookings.default;

export const getTimeSlotActions=GetTimeSlots.default;

export const getReviewsActions=GetReviews.default;

export const getRentalPriceActions=GetRentalPrices.default;

export const addRatingActions=AddRating.default;

export const bookingActions=MakeBooking.default;

export const allVehicleActions=AllVehicles.default;

export const signUpActions=SignUp.default;

export const loginActions=Login.default;
