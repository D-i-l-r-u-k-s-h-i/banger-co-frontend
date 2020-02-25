import React, { Component } from 'react'
import Rater from 'react-rater'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { getTimeSlotActions} from '../actions'
import { Button, ButtonToolbar } from 'react-bootstrap'
import SchedularModal from './schedular_modal';
import ReviewsComponent from './reviews_component';

export class BookVehicleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            modalShow: false,
            vehicleid:this.props.props.location.state.property.id,
            timeSlots:[],
            timeslotData:props.timeslotData
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(prevState)
        let newProps={}
        if (nextProps.timeslotData && nextProps.timeslotData !== prevState.timeslotData) {
            newProps.timeslotData = nextProps.timeslotData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.timeslotData){
            return{
                timeslotData:newProps.timeslotData,
            }
        }
        console.log(newProps)
        return {
            ...newProps
        };
    }

    async componentDidMount(){
        this.setState({ loading: true });
        //to get specific details on non-available time slots
        await this.refreshList();
        
    }

    refreshList(){
        this.props.getTimeSlotActions.getTimeSlots(this.state)

        console.log(this.state)
    }

    render() {
        let property = this.props.props.location.state && this.props.props.location.state.property

        let modalClose = () => this.setState({ modalShow: false });

        return (
            <div>
                <table >
                    <tr>
                        <td>
                            <div className="imgalign">
                                <img src={`data:image/png;base64,${property.imgFile}`} alt="img" /><hr />
                            </div>
                        </td>
                        <td>
                            <div className="discription">
                                <h1>{property.vehicleName}</h1><br />
                                Gearbox Type: {property.gearboxType}<br />
                                Vehicle Type: {property.vehicleType}<br />
                                Fuel Type:{property.fuelType}<br/>
                                Rating: <Rater rating={property.vehicleRating} total={5} interactive={false} /> <br />
                                Price: Rs.{property.vehicleRentalPrice*12}.00 per Day <br /><br />

                                <ButtonToolbar>
                                    <Button varient='primary'
                                        onClick={()=>this.setState({ modalShow: true })}>
                                        Schedule
                                    </Button>
                                    <SchedularModal props={this.props} type={"VEHICLE"} show={this.state.modalShow} onHide={modalClose} />
                                </ButtonToolbar>
                            </div>
                        </td>
                    </tr>
                </table>
                <hr />
                <ReviewsComponent vehicleid={property.id}/>
            </div>

        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        getTimeSlotActions:bindActionCreators(getTimeSlotActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.GetTimeSlots
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookVehicleComponent))
