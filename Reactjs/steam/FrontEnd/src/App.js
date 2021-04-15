import React from 'react';
import { BrowserRouter as Router,Switch,Route, } from 'react-router-dom';
import './style/style.css'

import Store from './component/Home/Store/store'
import Header from './component/Home/Header/header'
import Login from './component/User/Login/login'
import Register from './component/User/Register/register'

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>            
        <Route path='/community'>
          
        </Route>
        <Route path='/about'>
           
        </Route>
        <Route path='/support'>

        </Route>  
             
        <Route path='/user/login'>
          <Login/>
        </Route>

        <Route path='/user/register'>
          <Register/>
        </Route>

        <Route exact path='/'>
          <Store/>
        </Route>
      </Switch>        
    </Router>
  );
}
