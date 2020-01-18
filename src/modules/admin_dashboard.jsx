import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import AdminDashboardComponent from '../components/admin_dashboard_component';

export class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <AdminDashboardComponent/>
                <Footer/>
            </div>
        )
    }
}

export default AdminDashboard
