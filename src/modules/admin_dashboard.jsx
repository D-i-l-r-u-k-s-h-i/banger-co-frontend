import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';

export class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <Footer/>
            </div>
        )
    }
}

export default AdminDashboard
