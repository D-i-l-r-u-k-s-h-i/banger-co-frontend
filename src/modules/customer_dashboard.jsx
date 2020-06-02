import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import SliderComponent from '../components/slider_component';
import SliderComponentAE from '../components/slider_component_ae';
import Footer from '../components/footer';
import {Container} from 'reactstrap'

export class CustomerDashboard extends Component {
    render() {
        return (

            <div >
                <div className="body_container">
                <NavBarComponent />
                <SliderComponent/><br/>
                <SliderComponentAE/>
                <br/>
                </div>
                <br/><br/>
                <Container>
                    <h3>TERMS AND CONDITIONS</h3><br/>

                    <ul>
                        <li><b>Driving License Requirements</b>: a photocard driving licence and 1 other form of identity from either a recent utility bill (within 3 months) or council tax statement needs to be presented at the pickup.</li>
                        <li><b>Booking/ Payments</b>: Vehicles can be rented for a minimum of 5 hours (half a day’s rental) and a maximum of 2 weeks.</li>
                        <li><b>Extending Bookings</b>: Any booking can be extended up to 4pm on the day of return if the vehicle has not been booked for rental on the following day.<br/>Hirers can add additional equipments to their booking at any point up to and including collecting the vehicle.</li>
                        <li><b>TAX</b>: Above prices quoted are including Tax</li>
                        <li><b>Currency</b>: All rates quoted are in Sri Lankan Rupees.</li>
                        <li><b>Mileage / Time Calculation</b>:The number of days of hire are calculated on the basis of 24 hour cycles.</li>
                        <li><b>Insurance</b>: Banger is not insured for drivers under the age of 25 for any vehicles other than the small town cars.</li>
                        <li><b>Collection and Return</b>:Any booking must be collected and returned in between 8am and 6pm, unless the hirer has agreed with Banger for a late return in which case they can return the vehicle and drop the keys through office letterbox(Not for first time customers).<br/>At the collection, the hirer is required to present a photocard driving licence and 1 other form of identity from either a recent utility bill (within 3 months) or council tax statement.</li>
                        <li><b>Strict Policies</b>:  if someone has previously booked a vehicle and failed to collect it, that customer is blacklisted and may not book a vehicle again from Banger.</li>
                        <li><b>Opening and Closing</b>: opens at 8:00am and closes at 6pm</li>
                    </ul>
                    <br/>
                </Container>
                
                <Footer/>
            </div>

        )
    }
}

export default CustomerDashboard
