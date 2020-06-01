import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import EditRemoveAEComponent from '../components/edit_remove_ae_component';

export class EditEquipmentsPage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap_without_border'>
                <NavBarComponent/>
                <EditRemoveAEComponent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default EditEquipmentsPage
