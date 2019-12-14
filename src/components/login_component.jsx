import React, { Component } from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {GoogleLoginButton} from 'react-social-login-buttons';
// import {withRouter} from 'react-router-dom'
// import loginAction from '../Actions';
export class LoginComponent extends Component {

    loginhandler=(e)=>{
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <Form className="login-form" onSubmit={this.loginhandler}>
                    <h1><span className="font-weight-bold">Banger & Co</span></h1>
                    <h2 className="text-center">Welcome</h2>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text" placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password"/>
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block" type="submit">Log in</Button>
                    <div className="text-center pt-3">Or continue with Google</div>
                    <div>{this.props.msg}</div>
                    <GoogleLoginButton className="mt-3 mb-3"/>
                    <div className="text-center">
                        <a href="/signup">Sign Up</a>
                        <span className="p-2">|</span>
                        <a href="/forgot-password">Forgot Password</a>
                    </div>
                    </Form>
            </div>
        )
    }
}

export default LoginComponent