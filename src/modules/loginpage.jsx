import React, { Component } from 'react'
import LoginComponent from  '../components/login_component'
import {withRouter} from 'react-router-dom'

export class Loginpage extends Component {
    render() {
        return (
            <div>
                <LoginComponent /> 
                {/* msg={"welcome user"} */}
            </div>
        )
    }
}

export default withRouter (Loginpage)
