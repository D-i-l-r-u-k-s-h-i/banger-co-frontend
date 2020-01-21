import React, { Component } from 'react'
import { getCurrentBookingActions,getPastBookingActions,vehiclesBookedByUserActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import BookingList from './booking_list';
import RateReviewCard from './rate_review_card';

export class ViewBookingsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookingData: [],
            booking:null,
            vehicleData:null
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.bookingData && nextProps.bookingData !== prevState.bookingData) {
            newProps.bookingData = nextProps.bookingData
        }
        if (nextProps.vehicleData && nextProps.vehicleData !== prevState.vehicleData) {
            newProps.vehicleData = nextProps.vehicleData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.bookingData){
            return{
                bookingData:newProps.bookingData,
                // vehicleData:newProps.vehicleData,
                booking: newProps.bookingData[0]
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }
//if bookings:past show past bookings else if current show current
    componentDidMount(){
        let option=this.props.location.props.optionSelected

        if(option==="CURRENT"){
            this.props.getCurrentBookingActions.getCurrentBookings(this.state)
        }
        else if(option==="PAST"){
            this.props.getPastBookingActions.getPastBookings(this.state)
            this.props.vehiclesBookedByUserActions.getVehiclesBookedByUser(this.state)
        }
    }
    //reusing the same component on update of props
    componentDidUpdate(prevProps){
        console.log(prevProps)
        let option=this.props.location.props.optionSelected

        if (option !== prevProps.location.props.optionSelected) {
            if(option==="CURRENT"){
                this.props.getCurrentBookingActions.getCurrentBookings(this.state)
            }
            else if(option==="PAST"){
                this.props.getPastBookingActions.getPastBookings(this.state)
                this.props.vehiclesBookedByUserActions.getVehiclesBookedByUser(this.state)
            }
        }
    }

    render() {
        console.log(this.props.history.location.props.optionSelected)
        const {vehicleData}=this.state;
        return (
            <div className='bodycontainer'>
                <div className="form_container">
                    <div className="row">
                        <div className="col-8  pt-3 bg-white">
                            <BookingList
                                // loading={this.state.loading}
                                bookings={this.state.bookingData}
                            /><br />
                        </div>
                    </div>
                </div>
                <br/><hr></hr>
                <div>
                {this.props.location.props.optionSelected == "PAST" ?vehicleData && vehicleData.map(property => <RateReviewCard props={property}/>):null}
                <hr/>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCurrentBookingActions: bindActionCreators(getCurrentBookingActions, dispatch),
        getPastBookingActions: bindActionCreators(getPastBookingActions, dispatch),
        vehiclesBookedByUserActions: bindActionCreators(vehiclesBookedByUserActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        ...state.GetBookings,
        ...state.AllVehicles
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewBookingsComponent))
