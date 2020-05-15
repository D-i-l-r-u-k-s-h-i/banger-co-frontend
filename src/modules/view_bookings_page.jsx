import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import ViewBookingsComponent from '../components/ViewBookingsComponent';
import Footer from '../components/footer';

export class ViewBookingsPage extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap'>
                <NavBarComponent/>
                <ViewBookingsComponent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ViewBookingsPage
