import React, { Component } from 'react'
import SliderComponent from './slider_component';
import SliderComponentAE from './slider_component_ae';

export class CustomerDashboardComponent extends Component {

    render() {
        return (
            <div>
                <SliderComponent/><br/>
                <SliderComponentAE/>
            </div>
        )
    }
}

export default CustomerDashboardComponent
