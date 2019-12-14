import React, { Component } from 'react'
import CustomerDashboardComponent from '../components/customer_dashboard_component';
import NavBarComponent from '../components/navbar_component';

export class CustomerDashboard extends Component {
    render() {
        return (
            <div>
                <NavBarComponent/>
                <CustomerDashboardComponent/>
            </div>
        )
    }
}

export default CustomerDashboard
