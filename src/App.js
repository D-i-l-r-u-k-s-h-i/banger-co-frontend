import React from 'react';
import './App.scss';
import {Router,Switch,Route} from 'react-router-dom'
import history from './history'
import Loginpage from './modules/loginpage'
import { SignupPage } from './modules/signup_page';
import CustomerDashboard from './modules/customer_dashboard';

function App() {
  return(
    <Router history={history}>
      <Switch>
        <Route index={1} exact ={true} path={'/login'} component={Loginpage}/>
        <Route index={1} exact ={true} path={'/signup'} component={SignupPage}/>
        <Route index={1} exact ={true} path={'/custdash'} component={CustomerDashboard}/>
      </Switch>
    </Router>
  )
}

export default App;
