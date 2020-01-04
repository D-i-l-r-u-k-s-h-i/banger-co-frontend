import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import ViewBookingsComponent from '../components/ViewBookingsComponent';

export class ViewBookingsPage extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <ViewBookingsComponent/>
            </div>
        )
    }
}

export default ViewBookingsPage
