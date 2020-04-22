import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import DatePicker from "react-datepicker";
import moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { bookingActions,checkLisenceActions } from '../actions'
import "react-datepicker/dist/react-datepicker.css";
import { FormGroup, Label, Input, Alert } from 'reactstrap'

export class SchedularModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            timeslots: [],
            type:'',
            vehicleId: null, //to send in the request body when saving booking
            equipmentId:null,
            visible:false,
            visible2:false,
            id:null, //common for both vehicle and equips for getting timeslots
            lisenceNo:null
        }
    }

    handleStartChange = date => {
        this.handleTimeSlots(date);

        if(this.props.type==="VEHICLE"){
            this.setState({
                id:this.props.location.state.property.vehicleId,
                vehicleId:this.props.location.state.property.vehicleId
            })
        }
        else if(this.props.type==="EQUIPMENT"){
            this.setState({
                id:this.props.location.state.property.equipmentId,
                equipmentId:this.props.location.state.property.equipmentId
            })
        }

        this.setState({
            startDate: date,
        });
    };

    //startDate=12.30 AM(00.30)
    getTimeStops = (start, end) => {
        var startTime = moment(start);
        var endTime = moment(end);

        if (endTime.isBefore(startTime)) {
            endTime.add(1, 'day');
        }

        var timeStops = [];

        while (startTime <= endTime) {
            timeStops.push(moment(startTime)._d);
            startTime.add(30, 'minutes');
        }
        console.log(timeStops)
        return timeStops;
    }


    handleTimeSlots = (date) => {
        let timeSlotArray = this.props.props.timeslotData
        var arr = [];

        if(timeSlotArray){
            timeSlotArray.forEach(element => {
                let year = moment(element.timeSlot).get('year');
                let month = moment(element.timeSlot).get('month');  // 0 to 11
                let day = moment(element.timeSlot).get('date');
    
                if (date !== null) {
                    if (moment(date).get('year') === year && moment(date).get('month') === month && moment(date).get('date') === day) {
                        arr.push(moment(element.timeSlot).hours(element.hour).minutes(element.minute)._d)
                    }
                } else {
                    if (moment().get('year') === year && moment().get('month') === month && moment().get('date') === day) {
                        arr.push(moment(element.timeSlot).hours(element.hour).minutes(element.minute)._d)
                    }
                }
            });
        }

        if(moment().get('year') === moment(date).get('year') && moment().get('month') === moment(date).get('month') && moment().get('date') === moment(date).get('date')){
            arr = arr.concat(this.getTimeStops(moment().hours(0).minutes(0).seconds(0)._d, moment()._d))
        }
        console.log(arr)

        this.setState({
            timeslots: arr
        });
    }

    handleEndChange = date => {
        this.handleTimeSlots(date);

        this.setState({
            endDate: date,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            visible:true
        })
        //fire action to save booking details
        this.props.bookingActions.booking(this.state)
        // this.props.onHide
    }

    onDismiss = () =>{
        this.setState({
            visible:false
        })
        this.props.onHide()
    }

    onDismiss2 = () =>{
        this.setState({
            visible2:false
        })
        // this.props.onHide()
    }

    handleLisenceNo=(e)=>{
        this.setState({lisenceNo:e.target.value})
    }

    submitOnClick=()=>{
        this.props.checkLisenceActions.checkLisence(this.state.lisenceNo)
        this.setState({
            visible2:true
        })
    }

    render() {
        let timeSlotArray = this.state.timeslots;
        console.log(this.props)
        console.log(this.state)

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
                        {this.props.lisenceStatusData==null?<div>
                        <FormGroup>
                            <Label>Lisence Number</Label>
                            <Input onChange={this.handleLisenceNo} type="text" name="lisenceNo" placeholder="Enter Lisence No. of the driver" />
                        </FormGroup>

                        <button className="btn btn-dark" onClick={this.submitOnClick}> Submit </button><br/></div>:
                        this.props.lisenceStatusData.bookingeligibility?
                        <div>
                        <h4>Availability</h4>
                        Pick-up date
                        <DatePicker
                            onInputClick={this.handleTimeSlots}
                            selected={this.state.startDate}
                            onChange={this.handleStartChange}
                            minDate={moment().toDate()}
                            minTime={moment().hours(8).minutes(0)._d}
                            maxTime={moment().hours(18).minutes(0)._d}
                            showTimeSelect
                            dateFormat="yyyy-MM-dd h:mm aa"
                            excludeTimes={timeSlotArray}
                        />
                        Drop-off date
                        <DatePicker
                            onInputClick={this.handleTimeSlots}
                            selected={this.state.endDate}
                            onChange={this.handleEndChange}
                            minDate={moment().toDate()}
                            minTime={moment().hours(8).minutes(0)._d}
                            maxTime={moment().hours(18).minutes(0)._d}
                            showTimeSelect
                            dateFormat="yyyy-MM-dd h:mm aa"
                            selectsEnd
                            excludeTimes={timeSlotArray}
                        /></div>:<h3>We're Sorry!</h3>}

                    </Modal.Body>
                    <Modal.Footer>
                        {this.props.lisenceStatusData==null?null:localStorage.getItem("roleId") == 1?null:this.props.lisenceStatusData.bookingeligibility?<Button onClick={this.handleSubmit} type='submit'>Make Booking</Button>:null}
                        <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
                        {this.props.makeBookingData}
                    </Alert>
                    <Alert color="info" isOpen={this.state.visible2} toggle={this.onDismiss2}>
                        Lisence Status: {this.props.lisenceStatusData && this.props.lisenceStatusData.lisenceOffenseStatus} Insuarance Status: {this.props.lisenceStatusData && this.props.lisenceStatusData.insuranceOffenseStatus}<br/>
                        {this.props.lisenceStatusData && this.props.lisenceStatusData.bookingeligibility? "You are eligible to book vehicles and equipment from Banger":`Sorry, lisence No.${this.state.lisenceNo} is not eligible for booking from Banger`} 
                    </Alert>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bookingActions: bindActionCreators(bookingActions, dispatch),
        checkLisenceActions: bindActionCreators(checkLisenceActions, dispatch)
    }
}


function mapStateToProps(state) {
    return {
        ...state.MakeBooking,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SchedularModal))
