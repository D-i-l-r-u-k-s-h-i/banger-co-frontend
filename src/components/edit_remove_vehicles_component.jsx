import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Masonry from 'react-masonry-css'
  import { allVehicleActions,deleteVehicleActions} from '../actions'
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux'
  import { withRouter} from 'react-router-dom'
import ConfirmDeleteModal  from './confirmDeleteModal';
import AddVehicleModal from './addVehicleModal';
import UpdateVehicleModal from './updateVehicleModal';
import {Spinner, Toast} from 'react-bootstrap'
export class EditRemoveVehiclesComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            vehicleData:null,
            modalShow: false, 
            editModalShow: false,
            addVehiclesModalShow: false,
            vehicle:null,
            show:false,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log(nextProps)
        let newProps={}
        if (nextProps.vehicleData && nextProps.vehicleData !== prevState.vehicleData) {
            newProps.vehicleData = nextProps.vehicleData
        }
        if (nextProps.location.hash && (nextProps.location.hash !== prevState.hash)) {
            return {
                hash: nextProps.location.hash
            }
        }
        if(newProps.vehicleData){
            return{
               loaded: true,
               vehicleData:newProps.vehicleData,
               property: newProps.vehicleData[0]
            }
        }
        // console.log(newProps)
        return {
            ...newProps
        };
    }

    onDeleteModalShow=()=>{
        this.setState({show:true})
    }
    
    componentDidMount(){
        this.props.allVehicleActions.allVehicles(this.state)
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        let addVehicleModalClose = () => this.setState({ addVehiclesModalShow: false });

        let toastClose = () => this.setState({ show: false });

        const { vehicleData}=this.state
        console.log(this.props.removeItem)

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        let vehicles=vehicleData && vehicleData.map((vehicle) =>{
            return <div key={vehicle.id}>
               <Card>
                    <CardImg top width="100%" src={`data:image/png;base64,${vehicle.imgFile}`}/>
                    <CardBody>
                        <CardTitle className="font-weight-bold">{vehicle.vehicleName}</CardTitle>
                        <CardSubtitle>Gearbox Type: {vehicle.gearboxType}</CardSubtitle>
                        <CardText className="text-muted">FuelType: {vehicle.fuelType}</CardText>
                        <CardText className="font-weight-normal">Type: {vehicle.vehicleType}</CardText>
                        <CardText className="font-weight-normal">Per hour Rate: Rs.{vehicle.vehicleRentalPrice}.00</CardText>
                        <Button onClick={() => this.setState({ editModalShow: true ,vehicle:vehicle})} className="btn btn-info ml-1 float-right">Edit</Button>
                        <Button onClick={() => this.setState({ modalShow: true ,vehicle:vehicle})} className="btn btn-danger float-right">Remove</Button>
                    </CardBody>
                </Card>
                
            </div>
        })

        return (
            <div className="bodycontainer">
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    style={{
                        position: 'relative',
                        minHeight: '25px',
                    }}>
                    <Toast show={this.state.show} onClose={toastClose} autohide={true}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}>
                        <Toast.Header>
                        </Toast.Header>
                        <Toast.Body>{this.props.removeItem && this.props.removeItem.message}</Toast.Body>
                    </Toast>
                </div>
                <button type="button" className="btn btn-primary btn-circle btn-xl" onClick={() => this.setState({ addVehiclesModalShow: true })}>
                    &#43; Vehicle</button>
                <br/><hr/>
                {vehicleData==null?<div className="text-center"><br/><Spinner animation="border" variant="info"/></div>:null}
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}
                    {vehicles}
                </Masonry>
                
                <ConfirmDeleteModal show={this.state.modalShow} onHide={modalClose} props={this.state.vehicle} onShow={this.onDeleteModalShow}/> 
                <AddVehicleModal show={this.state.addVehiclesModalShow} onHide={addVehicleModalClose} props={this.state.vehicle}/> 
                <UpdateVehicleModal show={this.state.editModalShow} onHide={editModalClose} props={this.state.vehicle}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        allVehicleActions: bindActionCreators(allVehicleActions, dispatch),
        deleteVehicleActions:bindActionCreators(deleteVehicleActions, dispatch),
    }
}


function mapStateToProps(state) {
    return {
        ...state.AllVehicles,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)( EditRemoveVehiclesComponent))
