import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import SliderComponent from '../components/slider_component';
import SliderComponentAE from '../components/slider_component_ae';
import Footer from '../components/footer';

export class CustomerDashboard extends Component {
    render() {
        return (

            <div className="body_container">
                <NavBarComponent />
                <SliderComponent/><br/>
                <SliderComponentAE/>
                <Footer/>
            </div>

        )
    }
}

export default CustomerDashboard
