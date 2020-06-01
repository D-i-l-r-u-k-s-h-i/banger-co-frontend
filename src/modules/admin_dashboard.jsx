import React, { Component } from 'react'
import NavBarComponent from '../components/navbar_component';
import Footer from '../components/footer';
import AdminDashboardComponent from '../components/admin_dashboard_component';

export class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <div className='page-wrap_without_border'>
                <NavBarComponent/>
                <AdminDashboardComponent/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default AdminDashboard
