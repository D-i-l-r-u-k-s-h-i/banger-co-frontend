import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { getAvailableBookingItemActions, addItemToBookingActions } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class ShowBookingItemsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availableItemsData: null,
            item:null,
            
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.availableItemsData && nextProps.availableItemsData !== prevState.availableItemsData) {
            newProps.availableItemsData = nextProps.availableItemsData
        }
        if (nextProps.vehicleData && nextProps.vehicleData !== prevState.vehicleData) {
            newProps.vehicleData = nextProps.vehicleData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.availableItemsData){
            return{
                availableItemsData:newProps.availableItemsData,
                // vehicleData:newProps.vehicleData,
                booking: newProps.availableItemsData[0]
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    componentDidMount(){
        this.props.getAvailableBookingItemActions.getAvailableItemsForBooking(this.props && this.props.props)
    }

    onAddToBookingClick=(item)=>{
        // console.log(item)

        let obj={
            vehicleId:item.vehicleId!=undefined? item.vehicleId:0,
            equipmentId:item.equipmentId!=undefined?item.equipmentId:0,
            bookingId:this.props && this.props.props
        }

        this.props.addItemToBookingActions.addItemToBooking(obj)

        this.props.onHide()
    }

    render() {
        // console.log(this.props.props)
        // console.log(this.state)

        let {availableItemsData}=this.state

        return (
            <div>
                <Modal {...this.props} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item to Booking No. {this.props.props}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Vehicles</h2><br/>
                        {availableItemsData && availableItemsData.vehicleList && availableItemsData.vehicleList.map((item) =>{
            return <div key={item.vehicleId}>
                <Card>
                    <CardImg top width="100%" src={`data:image/png;base64,${item.imgFile}`} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="font-weight-bold">{item.vehicleName}</CardTitle>
                        <CardSubtitle>{item.gearboxType}</CardSubtitle>
                        <CardText className="text-muted">{item.fuelType}</CardText>
                        <CardText className="font-weight-normal">Rs.{item.vehicleRentalPrice}.00 per hour</CardText>
                        
                        <Button onClick={()=>this.onAddToBookingClick(item)} className="btn btn-secondary float-right">Add to Booking</Button><br/>
                        <hr/>
                    </CardBody>
                </Card>
            </div>
        })}
        <br/>
        <h2>Additional Equipment</h2> <br/>
{availableItemsData && availableItemsData.additionalEquipmentList && availableItemsData.additionalEquipmentList.map((item) =>{
    return <div key={item.equipmentId}>
        <Card>
            <CardImg top width="100%" src={item.imgLink} alt="Card image cap" />
            <CardBody>
                <CardTitle className="font-weight-bold">{item.equipmentName}</CardTitle>
                <CardSubtitle>{item.type}</CardSubtitle>
                <CardText className="text-muted">{item.description}</CardText>
                <CardText className="font-weight-normal">Rs.{item.aeRentalPrice}.00 per hour</CardText>
                
                <Button onClick={()=>this.onAddToBookingClick(item)} className="btn btn-secondary float-right">Add to Booking</Button><br/>
                <hr/>
            </CardBody>
        </Card>
    </div>
})}
                    </Modal.Body>
                    <Modal.Footer>
                        
                        
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAvailableBookingItemActions: bindActionCreators(getAvailableBookingItemActions, dispatch),
        addItemToBookingActions:bindActionCreators(addItemToBookingActions, dispatch)
    }
}

function mapStateToProps(state) {
    return {
        ...state.GetBookings,
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps) (ShowBookingItemsModal))
