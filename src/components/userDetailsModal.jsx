import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import {FormGroup, Label, Input,Alert} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { updateCustomerActions } from '../actions'

export class UserDetailsModal extends Component {
    constructor(props){
        super(props);
        this.state={ 
            id:null,
            editClicked:false,
            eContact:null,
            address:null,
            records:null,
            visible:false,
        }
    }
    handleOnClick=()=>{
        this.setState({editClicked:true,id:this.props.props.selectedOption && this.props.props.selectedOption.customerId})
    }

    saveOnClick=()=>{
        this.setState({visible:true})

        this.props.updateCustomerActions.updateCustomer(this.state)
    }

    handleEmergencyContact=(e)=>{
        this.setState({eContact:e.target.value})
    }

    handleAddress=(e)=>{
        this.setState({address:e.target.value})
    }

    handleDocumentRecords=(e)=>{
        this.setState({records:e.target.value})
    }

    onDismiss = () =>{
        this.setState({
            visible:false,
            editClicked:false
        })
        this.props.onHide()
    }

    render() {

        console.log(this.props)
        console.log(this.state)

        return (
            <div>
                <Modal {...this.props} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>User details of {this.props.props.selectedOption && this.props.props.selectedOption.customerUserName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>Name:</b> {this.props.props.selectedOption && this.props.props.selectedOption.customerFName} {this.props.props.selectedOption && this.props.props.selectedOption.customerLName}<br/>
                        {this.state.editClicked?<FormGroup>
                                <Label>Emmergency Contact No:</Label>
                                <Input onChange={this.handleEmergencyContact} name="emergencyContact" type="text" defaultValue={this.props.props.selectedOption.emergencyContactNo} />
                            </FormGroup>:<div><b>Emmergency Contact No:</b> {this.props.props.selectedOption && this.props.props.selectedOption.emergencyContactNo}<br/></div>}
                        <b>Other Contact No:</b> {this.props.props.selectedOption && this.props.props.selectedOption.customerContactNo}<br/>
                        <b>Email:</b> {this.props.props.selectedOption && this.props.props.selectedOption.customerEmail}<br/>
                        <b>Status:</b> {this.props.props.selectedOption && this.props.props.selectedOption.customerStatus} Customer<br/>
                        {this.state.editClicked?<FormGroup>
                                <Label>Current Address:</Label>
                                <Input onChange={this.handleAddress} name="currentAddress" type="text" defaultValue={this.props.props.selectedOption.customerAddress} />
                            </FormGroup>:<div><b>Current Address:</b> {this.props.props.selectedOption && this.props.props.selectedOption.customerAddress!=null?this.props.props.selectedOption.customerAddress:"---"}<br/></div>}
                            {this.state.editClicked?<FormGroup>
                                <Label>Any other Records of user:</Label>
                                <Input onChange={this.handleDocumentRecords} name="documentedRecord" type="text" defaultValue={this.props.props.selectedOption.documentRecord} />
                            </FormGroup>:<div><b>Any other Records of user:</b> {this.props.props.selectedOption && this.props.props.selectedOption.documentRecord!=null?this.props.props.selectedOption.documentRecord:"---"}<br/></div>}
                    </Modal.Body>
                    <Modal.Footer>
                        {this.state.editClicked?<button className="btn btn-dark" onClick={this.saveOnClick}> Save </button>:<button className="btn btn-info" onClick={this.handleOnClick}> Edit or add Record</button>}
                        <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
                        {this.props.userData}
                    </Alert>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        updateCustomerActions: bindActionCreators(updateCustomerActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.SignUp,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserDetailsModal))
