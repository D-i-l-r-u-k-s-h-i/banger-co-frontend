import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { bookingActions } from '../actions'
import "react-datepicker/dist/react-datepicker.css";

export class SchedularModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate:new Date(),
            vehicleId:1
            // vehicleId:this.props.props.props.location.state.property.id
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        if(prevState.bookingState===null){
            return{
                bookingState: nextProps.BookingData
            }
        }else return null
    }

    handleStartChange = date => {
        this.setState({
            startDate: date
        });
    };

    handleEndChange = date => {
        this.setState({
            endDate: date
        });
    };

    handleSubmit=(e)=> {
        e.preventDefault();
        //fire action to save booking details
        this.props.bookingActions.booking(this.state)
        // this.props.onHide
    }

    // componentDidMount(){
    //     //to get specific details on non-available time slots
    // }

    render() {
        let property = this.props.props.props.location.state && this.props.props.props.location.state.property
        
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {/* {property.vehicleName} */}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Availability</h4>
                        Pick-up date
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleStartChange}
                            minDate={moment().toDate()}
                            showTimeSelect
                            dateFormat="yyyy-MM-dd h:mm aa"
                            excludeTimes={[
                                setHours(setMinutes(new Date(), 0), 17),
                                setHours(setMinutes(new Date(), 30), 18),
                                setHours(setMinutes(new Date(), 30), 19),
                                setHours(setMinutes(new Date(), 30), 17)
                            ]}
                        />
                        Drop-off date
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleEndChange}
                            minDate={moment().toDate()}
                            showTimeSelect
                            dateFormat="yyyy-MM-dd h:mm aa"
                            selectsEnd
                            excludeTimes={[
                                setHours(setMinutes(new Date(), 0), 17),
                                setHours(setMinutes(new Date(), 30), 18),
                                setHours(setMinutes(new Date(), 30), 19),
                                setHours(setMinutes(new Date(), 30), 17)
                            ]}
                        />
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleSubmit} type='submit'>Make Booking</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        bookingActions: bindActionCreators(bookingActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.Booking,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SchedularModal))
