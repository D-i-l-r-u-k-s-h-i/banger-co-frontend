import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter} from 'react-router-dom'
import { signUpActions } from '../actions'

export class SignupComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            fname:null,
            lname:null,
            email:null,
            username:null,
            contact:null,
            emergency_contact:null,
            password:null,
            confirm_pass:null,
            signupState:null
        }
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log(nextProps)
        if(prevState.signupState===null){
            return{
                signupState: nextProps.SignUpData
            }
        }else return null
    }

    handleFName=(e)=>{
        this.setState({fname:e.target.value})
    }
    handleLName=(e)=>{
        this.setState({lname:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handleUsername=(e)=>{
        this.setState({username:e.target.value})
    }
    handleContact=(e)=>{
        this.setState({contact:e.target.value})
    }
    handleEmergencyContact=(e)=>{
        this.setState({emergency_contact:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    handleConfirmPassword=(e)=>{
        this.setState({confirm_pass:e.target.value})
    }

    handleSignUpBtnClick=(e)=>{
        e.preventDefault();
        debugger
        this.props.signUpActions.signUp(this.state)
    }

    render() {
        return (
            <div className='app-container'>
                <div className='app-card app-card-content'>
                    <div className='app-card-content-inner'>
                        <div className="app-form-item">
                            <Form onSubmit={this.loginhandler}>
                                <h1><span className="font-weight-bold">Banger & Co</span></h1>
                                <h2 className="text-center">Welcome</h2>
                                <table>
                                    <tr><td>
                                        <FormGroup>
                                            <Label>First Name</Label>
                                            <Input onChange={this.handleFName} type="text" placeholder="First name" />
                                        </FormGroup>
                                    </td>
                                        <td>
                                            <FormGroup>
                                                <Label>Last Name</Label>
                                                <Input onChange={this.handleLName} type="text" placeholder="last name" />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                </table>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input onChange={this.handleEmail} type="email" placeholder="email" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input onChange={this.handleUsername} type="text" placeholder="username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contact Number</Label>
                                    <Input onChange={this.handleContact}type="text" placeholder="contact no." />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Emergency Contact Number</Label>
                                    <Input onChange={this.handleEmergencyContact}type="text" placeholder="emergency contact no." />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input onChange={this.handlePassword} type="password" placeholder="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Confirm Password</Label>
                                    <Input onChange={this.handleConfirmPassword}type="password" placeholder="Confirm Password" />
                                </FormGroup>
                                <Button  onClick={this.handleSignUpBtnClick} className="btn-lg btn-dark btn-block" type="submit">Sign Up</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch){
    return{
        signUpActions: bindActionCreators(signUpActions,dispatch)
    }
}


function mapStateToProps (state){
    return{
        ...state.SignUp,
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignupComponent))
