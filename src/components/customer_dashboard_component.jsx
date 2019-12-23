import React, { Component } from 'react'
import SliderComponent from './slider_component';

export class CustomerDashboardComponent extends Component {


    handleSignUpBtnClick=(e)=>{
        e.preventDefault();
        
    }
    render() {
        return (
            <div>
                <SliderComponent/>
            </div>
        )
    }
}

export default CustomerDashboardComponent
