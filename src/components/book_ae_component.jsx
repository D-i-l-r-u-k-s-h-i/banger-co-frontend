import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import SchedularModal from './schedular_modal';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { getTimeSlotActions} from '../actions'

export class BookAEComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            timeSlots:[],
            timeslotData:props.timeslotData,
            equipmentid:this.props.location.state.property.equipmentId,
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
        console.log(this.props)
        let property = this.props.location.state && this.props.location.state.property

        let modalClose = () => this.setState({ modalShow: false });

        const timeslotArr=this.state.timeslotData;
        console.log(timeslotArr)

        return (
            <div>
                <table >
                    <tr>
                        <td>
                            <div className="imgalign">
                                <img src={property.imgLink} alt="img" /><hr />
                            </div>
                        </td>
                        <td>
                            <div className="discription">
                                <h1>{property.equipmentName}</h1><br />
                                Specifications and Description: {property.description}<br />
                                Type: {property.type}<br />
                                
                                Price: Rs.{property.aeRentalPrice*12}.00 per Day<br /><br />

                                <ButtonToolbar>
                                    <Button varient='primary'
                                        onClick={()=>this.setState({ modalShow: true })}>
                                        Schedule
                                    </Button>
                                    <SchedularModal props={this.props} type={"EQUIPMENT"} show={this.state.modalShow} onHide={modalClose} />
                                </ButtonToolbar>
                            </div>
                        </td>
                    </tr>
                </table>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BookAEComponent))