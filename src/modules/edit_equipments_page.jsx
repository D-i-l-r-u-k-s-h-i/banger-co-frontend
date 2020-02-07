import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import EditRemoveAEComponent from '../components/edit_remove_ae_component';

export class EditEquipmentsPage extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <EditRemoveAEComponent/>
                <Footer/>
            </div>
        )
    }
}

export default EditEquipmentsPage
