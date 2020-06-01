import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import EditRemoveVehiclesComponent from '../components/edit_remove_vehicles_component';

export class EditVehiclesPage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap_without_border'>
                <NavBarComponent/>
                    <EditRemoveVehiclesComponent/>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default EditVehiclesPage
