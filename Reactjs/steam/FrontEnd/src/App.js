import React from 'react';
import { BrowserRouter as Router,Switch,Route, } from 'react-router-dom';
import './style/style.css'

import Store from './component/Home/Store/store'
import Header from './component/Home/Header/header'


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
        <Route exact path='/'>
          <Store/>
        </Route>
      </Switch>        
    </Router>
  );
}
