import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input, FormFeedback,FormText} from 'reactstrap';
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
            gearbox:this.props.props && this.props.props.gearboxType,
            fueltype:this.props.props && this.props.props.fuelType,
            type:null,
            image:null,
            selectedFile:null,
            validate:{
                priceState:''
            },
            required_inputs:false
        }
    }

    handleVehicleName=(e)=>{
        this.setState({name:e.target.value,vehicleId:this.props.props.vehicleId})
    }
    handlePrice=(e)=>{
        const priceRex =  /^[0-9]+$/;
        const { validate } = this.state
          if (priceRex.test(e.target.value)) {
            validate.priceState = 'has-success'
          } else {
            validate.priceState = 'has-danger'
          }
        this.setState({ validate })

        this.setState({price:e.target.value,vehicleId:this.props.props.vehicleId})
    }
    
    handleVehicleType=(e)=>{
        this.setState({type:e.target.value,vehicleId:this.props.props.vehicleId})
    }    

    handleFuelChange=(e)=>{
        this.setState({fueltype:e.target.value,vehicleId:this.props.props.vehicleId})
    }

    handleGearboxChange=(e)=>{
        this.setState({gearbox:e.target.value,vehicleId:this.props.props.vehicleId})
    }

    fileChangeHandler = (event) => {
        console.log(event.target.files)
        
        this.setState({
            selectedFile: event.target.files[0],vehicleId:this.props.props.vehicleId
        });

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            this.setState({image: reader.result});
        };
    }

    // handleUrl=(e)=>{
    //     this.setState({img:e.target.value,vehicleId:this.props.props.id})
    // }

    handleUpdateBtnClick=(e)=>{
        e.preventDefault();
        let{selectedFile, image,name, gearbox,fueltype,type,price,vehicleId}=this.state
        
        const data = new FormData() 
        selectedFile && data.append('imgFile', selectedFile,selectedFile.name)

        data.append('vehicleId', vehicleId)
        image && data.append('b64image',image)

        name && data.append('vehicleName',name)
        price && data.append('vehicleRentalPrice',price)
        type && data.append('vehicleType', type)
        gearbox && data.append('gearboxType', gearbox)
        fueltype && data.append('fuelType', fueltype)

        this.props.updateVehicleActions.updateVehicle(data)
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
                                <Input onChange={this.handleVehicleName} name="vehicleName" type="text" defaultValue={this.props.props&&this.props.props.vehicleName} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect1">GearBox Type</Label>
                                <Input value={this.state.gearbox} onChange={this.handleGearboxChange} selected={this.props.props&&this.props.props.gearboxType} type="select" name="gearboxType" id="exampleSelect1">
                                    <option>Auto</option>
                                    <option>Manual</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect2">Select Fuel Type</Label>
                                <Input value={this.state.fueltype} onChange={this.handleFuelChange} selected={this.props.props&&this.props.props.fuelType} type="select" name="fuelType" id="exampleSelect2">
                                    <option>Petrol</option>
                                    <option>Diesel</option>
                                    <option>Hybrid</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price Per hour</Label>
                                <Input onChange={this.handlePrice} type="number" name="vehicleRentalPrice" defaultValue={this.props.props && parseFloat(this.props.props.vehicleRentalPrice)} 
                                valid={this.state.validate.priceState === 'has-success'} invalid={this.state.validate.priceState === 'has-danger'}/>
                                <FormFeedback invalid>
                                    The price should be only numerical
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Vehicle Type</Label>
                                <Input onChange={this.handleVehicleType} type="text" name="vehicleType" defaultValue={this.props.props&&this.props.props.vehicleType} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input type="file" name="imgFile" onChange={this.fileChangeHandler} /** id="exampleFile"*/ />
                                <FormText color="muted">
                                    Add image of your craft here
                                    </FormText>
                            </FormGroup>
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
