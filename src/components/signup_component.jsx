import {Button, Form, FormGroup, Label, Input,FormFeedback,FormText } from 'reactstrap';
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
            signupState:null,
            validate:{
                emailState:'',
                confirm_passState:'',
                contactState:'',
                emContactState:''
            },
            required_inputs:false
        }
    }

    checkRequiredInputs=()=>{
        const {fname,lname, email,contact, emergency_contact, username,password,confirm_pass,validate}=this.state

        if(fname!=null && lname!=null && email!=null && username !=null && contact!=null && emergency_contact !=null && password!=null && confirm_pass!=null && validate.emailState!='has-danger' && validate.confirm_passState!='has-danger'){
            this.setState({required_inputs:true})
            return true
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
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
        this.setState({ validate })

        this.setState({email:e.target.value})
        this.checkRequiredInputs()
    }
    handleUsername=(e)=>{
        this.setState({username:e.target.value})
    }
    handleContact=(e)=>{
        const contactRex =  /^[0-9]+$/;
        const { validate } = this.state
          if (contactRex.test(e.target.value)) {
            validate.contactState = 'has-success'
          } else {
            validate.contactState = 'has-danger'
          }
        this.setState({ validate })

        this.setState({contact:e.target.value})
    }
    handleEmergencyContact=(e)=>{
        const contactRex =  /^[0-9]+$/;
        const { validate } = this.state
          if (contactRex.test(e.target.value)) {
            validate.emContactState = 'has-success'
          } else {
            validate.emContactState = 'has-danger'
          }
        this.setState({ validate })

        this.setState({emergency_contact:e.target.value})
    }
    handlePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    handleConfirmPassword=(e)=>{
        const { validate, password } = this.state
          if (password == e.target.value) {
            validate.confirm_passState = 'has-success'
          } else {
            validate.confirm_passState = 'has-danger'
          }
        this.setState({ validate })

        this.setState({confirm_pass:e.target.value})
        this.checkRequiredInputs()
    }

    handleSignUpBtnClick=(e)=>{
        e.preventDefault();
        debugger
        this.props.signUpActions.signUp(this.state)
    }

    render() {
        return (
            <div className='background_container'>
                <div className='app-cardd app-cardd-content'>
                    <div className='app-cardd-content-inner'>
                        <div className="app-form-item">
                            <Form onSubmit={this.loginhandler}>
                                <h1><span className="font-weight-bold">Banger & Co</span></h1>
                                <h2 className="text-center">Welcome</h2>
                                <table>
                                    <tr><td>
                                        <FormGroup>
                                            <Label className="text-white">First Name</Label>
                                            <Input onChange={this.handleFName} type="text" placeholder="First name" />
                                        </FormGroup>
                                    </td>
                                        <td>
                                            <FormGroup>
                                                <Label className="text-white">Last Name</Label>
                                                <Input onChange={this.handleLName} type="text" placeholder="last name" />
                                            </FormGroup>
                                        </td>
                                    </tr>
                                </table>
                                <FormGroup>
                                    <Label className="text-white">Email</Label>
                                    <Input onChange={this.handleEmail} type="email" placeholder="email" valid={this.state.validate.emailState === 'has-success'} invalid={this.state.validate.emailState === 'has-danger'} />
                                    <FormFeedback invalid>
                                        Uh oh! Looks like there is an issue with your email. Please input a correct email.
                                        </FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-white">Username</Label>
                                    <Input onChange={this.handleUsername} type="text" placeholder="username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-white">Contact Number</Label>
                                    <Input onChange={this.handleContact} type="text" placeholder="contact no." valid={this.state.validate.contactState === 'has-success'} invalid={this.state.validate.contactState === 'has-danger'}/>
                                    <FormFeedback invalid>
                                        Please enter valid phone number.
                                    </FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-white">Emergency Contact Number</Label>
                                    <Input onChange={this.handleEmergencyContact} type="text" placeholder="emergency contact no." valid={this.state.validate.emContactState === 'has-success'} invalid={this.state.validate.emContactState === 'has-danger'}/>
                                    <FormFeedback invalid>
                                        Please enter valid phone number.
                                    </FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-white">Password</Label>
                                    <Input onChange={this.handlePassword} type="password" placeholder="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label className="text-white">Confirm Password</Label>
                                    <Input onChange={this.handleConfirmPassword} type="password" placeholder="Confirm Password" valid={this.state.validate.confirm_passState === 'has-success'} invalid={this.state.validate.confirm_passState === 'has-danger'} />
                                    <FormFeedback invalid>
                                        Passwords doesn't match. Sorry!
                                        </FormFeedback>
                                </FormGroup>
                                {this.state.required_inputs ? null : <FormText className='text-white'>All Fields are required to be filled.</FormText>}<br />
                                {this.state.required_inputs ? <Button onClick={this.handleSignUpBtnClick} className="btn-lg btn-dark btn-block" type="submit">Sign Up</Button> : <Button onClick={this.handleSignUpBtnClick} className="btn-lg btn-dark btn-block" type="submit" disabled>Sign Up</Button>}
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
