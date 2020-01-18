import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodaysBookingActions} from '../actions'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import BookingListForAdmin from './bookingListForAdmin';

export class TodaysBookingsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingData: [],
            booking:null,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.bookingData && nextProps.bookingData !== prevState.bookingData) {
            newProps.bookingData = nextProps.bookingData
        }
        // if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
        //     return {
        //         hash: nextProps.location.hash
        //     }
        // }
        if(newProps.bookingData){
            return{
                bookingData:newProps.bookingData,
                booking: newProps.bookingData[0]
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    componentDidMount(){
        this.props.getTodaysBookingActions.getTodaysBookings(this.state)
    }

    render() {
        return (
            <div className="form_container">
                <div className="row">
                    <div className="col-8  pt-3 bg-white">
                        <BookingListForAdmin
                            bookings={this.state.bookingData}
                        /><br/>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTodaysBookingActions: bindActionCreators(getTodaysBookingActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        ...state.GetBookings,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodaysBookingsComponent))
