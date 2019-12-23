import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import BookVehicleComponent from '../components/book_vehicle_component';

export class VehiclePage extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <BookVehicleComponent props={this.props}/>
            </div>
        )
    }
}

export default VehiclePage
