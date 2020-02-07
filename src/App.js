import React from 'react';
import './App.scss';
import {Router,Switch,Route} from 'react-router-dom'
import history from './history'
import Loginpage from './modules/loginpage'
import {SignupPage} from './modules/signup_page';
import CustomerDashboard from './modules/customer_dashboard';
import VehiclePage from './modules/vehicle_page';
import 'react-rater/lib/react-rater.css'
import SchedularModal from './components/schedular_modal';
import ViewBookingsPage from './modules/view_bookings_page';
import AdditionalEquipmentPage from './modules/additional_equipment_page';
import AdminDashboard from './modules/admin_dashboard';
import EditVehiclesPage from './modules/edit_vehicles_page';
import EditEquipmentsPage from './modules/edit_equipments_page';


function App() {
  return(
    <Router history={history}>
      <Switch>
        <Route index={1} exact path={'/'} component={Loginpage}/>
        <Route index={1} exact ={true} path={'/custdash'} component={CustomerDashboard}/>
        <Route index={1} exact ={true} path={'/signup'} component={SignupPage}/>
        <Route index={1} exact ={true} path={'/vehicle'} component={VehiclePage}/>
        <Route index={1} exact ={true} path={'/schedule'} component={SchedularModal}/>
        <Route index={1} exact ={true} path={'/bookings1'} component={ViewBookingsPage}/>
        <Route index={1} exact ={true} path={'/bookings2'} component={ViewBookingsPage}/>
        <Route index={1} exact ={true} path={'/aequipment'} component={AdditionalEquipmentPage}/>
        <Route index={1} exact={true} path={'/admin'} component={AdminDashboard}/>
        <Route index={1} exact={true} path={'/managevehicles'} component={EditVehiclesPage}/>
        <Route index={1} exact={true} path={'/manageaequips'} component={EditEquipmentsPage}/>
      </Switch>
    </Router>
  )
}

export default App;
