import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { addVehicleActions } from '../actions'

export class AddVehiclemodal extends Component {
    constructor(props){
        super(props);
        this.state={ 
            name:null,
            price:null,
            gearbox:"Auto",
            fueltype:"Petrol",
            type:null,
            image:null,
            selectedFile:null
        }
    }

    handleVehicleName=(e)=>{
        this.setState({name:e.target.value})
    }
    handlePrice=(e)=>{
        this.setState({price:e.target.value})
    }
    
    handleVehicleType=(e)=>{
        this.setState({type:e.target.value})
    }    

    handleFuelChange=(e)=>{
        this.setState({fueltype:e.target.value})
    }

    handleGearboxChange=(e)=>{
        this.setState({gearbox:e.target.value})
    }

    fileChangeHandler = (event) => {
        console.log(event.target.files)
        
        this.setState({
            selectedFile: event.target.files[0]
        });

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            this.setState({image: reader.result});
        };
    }

    // handleUrl=(e)=>{
    //     this.setState({img:e.target.value})
    // }

    handleAddBtnClick=(e)=>{
        e.preventDefault();
        let{selectedFile, image,name, gearbox,fueltype,type,price}=this.state
        
        const data = new FormData() 
        data.append('imgFile', selectedFile,selectedFile.name)
        
        data.append('b64image',image)

        data.append('vehicleName',name)
        data.append('vehicleRentalPrice',price)
        data.append('vehicleType', type) 
        data.append('gearboxType', gearbox)
        data.append('fuelType', fueltype)
        // data.append('category', category)

        this.props.addVehicleActions.addVehicle(data)
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
                            <h2 className="text-center">Add Vehicle</h2><hr />
                            <FormGroup>
                                <Label>Vehicle Name</Label>
                                <Input onChange={this.handleVehicleName} name="vehicleName" type="text" placeholder="Vehicle Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect1">GearBox Type</Label>
                                <Input value={this.state.gearbox} onChange={this.handleGearboxChange} type="select" name="gearboxType" id="exampleSelect1">
                                    <option>Auto</option>
                                    <option>Manual</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleSelect2">Select Fuel Type</Label>
                                <Input value={this.state.fueltype} onChange={this.handleFuelChange} type="select" name="fuelType" id="exampleSelect2">
                                    <option>Petrol</option>
                                    <option>Diesel</option>
                                    <option>Hybrid</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price Per hour</Label>
                                <Input onChange={this.handlePrice} type="text" name="vehicleRentalPrice" placeholder="Hourly Rate" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Vehicle Type</Label>
                                <Input onChange={this.handleVehicleType} type="text" name="vehicleType" placeholder="Vehicle Type" />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label for="exampleFile">File</Label>
                                <Input type="file" name="imgFile" onChange={this.fileChangeHandler} /** id="exampleFile"*/ />
                                <FormText color="muted">
                                    Add image of your craft here
                                    </FormText>
                            </FormGroup>
                            <Button onClick={this.handleAddBtnClick} className="btn-lg btn-dark btn-block" type="submit">Add</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        addVehicleActions: bindActionCreators(addVehicleActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.AllVehicles,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (AddVehiclemodal))
