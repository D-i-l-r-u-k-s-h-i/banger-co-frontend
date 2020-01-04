import React, { Component } from 'react'
import { getCurrentBookingActions,getPastBookingActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import BookingList from './booking_list';

export class ViewBookingsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookingData: [],
            booking:null,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps)
        let newProps={}
        if (nextProps.bookingData && nextProps.bookingData !== prevState.bookingData) {
            newProps.bookingData = nextProps.bookingData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
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
//if bookings:past show past bookings else if current show current
    componentDidMount(){
        let option=this.props.location.props.optionSelected

        if(option==="CURRENT"){
            this.props.getCurrentBookingActions.getCurrentBookings(this.state)
        }
        else if(option==="PAST"){
            this.props.getPastBookingActions.getPastBookings(this.state)
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
            }
        }
    }

    render() {
        return (
            <div className="form_container">
                <div className="row">
                    <div className="col-8  pt-3 bg-white">
                        <BookingList
                            // loading={this.state.loading}
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
        getCurrentBookingActions: bindActionCreators(getCurrentBookingActions, dispatch),
        getPastBookingActions: bindActionCreators(getPastBookingActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        ...state.GetBookings,
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewBookingsComponent))
