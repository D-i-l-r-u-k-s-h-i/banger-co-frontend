import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import BookVehicleComponent from '../components/book_vehicle_component';
import Footer from '../components/footer';

export class VehiclePage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                <NavBarComponent/>
                <BookVehicleComponent props={this.props}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default VehiclePage
