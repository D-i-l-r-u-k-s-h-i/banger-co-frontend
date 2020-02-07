import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import EditRemoveVehiclesComponent from '../components/edit_remove_vehicles_component';

export class EditVehiclesPage extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                    <EditRemoveVehiclesComponent/>
                <Footer/>
            </div>
        )
    }
}

export default EditVehiclesPage
