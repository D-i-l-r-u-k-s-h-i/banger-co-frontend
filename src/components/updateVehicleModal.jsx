import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { updateVehicleActions } from '../actions'

export class UpdateVehicleModal extends Component {
    constructor(props){
        super(props);
        this.state={ 
            vehicleId:null,
            name:null,
            price:null,
            gearbox:null,
            fueltype:null,
            type:null,
            img:null,
        }
    }

    handleVehicleName=(e)=>{
        this.setState({name:e.target.value,vehicleId:this.props.props.id})
    }
    handlePrice=(e)=>{
        this.setState({price:e.target.value,vehicleId:this.props.props.id})
    }
    
    handleVehicleType=(e)=>{
        this.setState({type:e.target.value,vehicleId:this.props.props.id})
    }    

    handleFuelChange=(e)=>{
        this.setState({fueltype:e.target.value,vehicleId:this.props.props.id})
    }

    handleGearboxChange=(e)=>{
        this.setState({gearbox:e.target.value,vehicleId:this.props.props.id})
    }

    handleUrl=(e)=>{
        this.setState({img:e.target.value,vehicleId:this.props.props.id})
    }

    handleUpdateBtnClick=(e)=>{
        e.preventDefault();
        
        this.props.updateVehicleActions.updateVehicle(this.state)
        this.props.onHide()
    }

    render() {
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
                        <Form onSubmit={this.loginhandler}>
                            <h1><span className="font-weight-bold">&#127345;anger &#8523; &#8450;o &#128664;</span></h1>
                            <h2 className="text-center">Edit Vehicle</h2><hr />
                            <FormGroup>
                                <Label>Vehicle Name</Label>
                                <Input onChange={this.handleVehicleName} type="text" placeholder={this.props.props&&this.props.props.vehicleName} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">GearBox Type</Label>
                                <Input value={this.state.gearbox} onChange={this.handleGearboxChange} selected={this.props.props&&this.props.props.gearboxType} type="select" name="select" id="exampleSelect">
                                    <option>Auto</option>
                                    <option>Manual</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect">Select Fuel Type</Label>
                                <Input value={this.state.fueltype} onChange={this.handleFuelChange} selected={this.props.props&&this.props.props.fuelType} type="select" name="select" id="exampleSelect">
                                    <option>Petrol</option>
                                    <option>Diesel</option>
                                    <option>Hybrid</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price Per hour</Label>
                                <Input onChange={this.handlePrice} type="text" placeholder={this.props.props&&this.props.props.vehicleRentalPrice} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Vehicle Type</Label>
                                <Input onChange={this.handleVehicleType} type="text" placeholder={this.props.props&&this.props.props.vehicleType} />
                            </FormGroup>
                            {/* for now to add img urls */}
                            <FormGroup>
                                <Label>Vehicle Image URL</Label>
                                <Input onChange={this.handleUrl} type="text" placeholder={this.props.props&&this.props.props.vehicleImgLink} />
                            </FormGroup>

                            {/* <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input type="file" name="file" onChange={this.fileChangedHandler} id="exampleFile" />
                                <FormText color="muted">
                                    Add image of your craft here
                                    </FormText>
                            </FormGroup> */}
                            <Button onClick={this.handleUpdateBtnClick} className="btn-lg btn-dark btn-block" type="submit">Update</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        updateVehicleActions: bindActionCreators(updateVehicleActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.AllVehicles,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UpdateVehicleModal))
