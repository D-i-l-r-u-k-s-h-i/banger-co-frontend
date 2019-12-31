import React from 'react';
import './App.scss';
import {Router,Switch,Route} from 'react-router-dom'
import history from './history'
import Loginpage from './modules/loginpage'
import { SignupPage } from './modules/signup_page';
import CustomerDashboard from './modules/customer_dashboard';
import VehiclePage from './modules/vehicle_page';
import 'react-rater/lib/react-rater.css'
import SchedularModal from './components/schedular_modal';

function App() {
  return(
    <Router history={history}>
      <Switch>
        <Route index={1} exact path={'/'} component={Loginpage}/>
        <Route index={1} exact ={true} path={'/custdash'} component={CustomerDashboard}/>
        <Route index={1} exact ={true} path={'/signup'} component={SignupPage}/>
        <Route index={1} exact ={true} path={'/vehicle'} component={VehiclePage}/>
        <Route index={1} exact ={true} path={'/schedule'} component={SchedularModal}/>
      </Switch>
    </Router>
  )
}

export default App;
