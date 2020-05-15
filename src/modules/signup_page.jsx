import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import SignupComponent from '../components/signup_component';
import Footer from '../components/footer';

export class SignupPage extends Component {
    render() {
        return (
            <div>
                <SignupComponent/>
                <Footer/>
            </div>
        )
    }
}

export default withRouter (SignupPage)
