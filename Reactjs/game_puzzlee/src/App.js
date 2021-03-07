import {BrowserRouter as Router,Route,Link,Switch, Redirect} from 'react-router-dom'
import Home from "./component/home/home";
import Start from "./component/start/start"

import { DataProvider } from "./component/store/store";
import './App.css'
function App() {
  return (
    <DataProvider>     
        <Router>
          <Switch>
            <Redirect exact from='/' to='/home'></Redirect>
            <Route path='/home'>
              <Home/>
            </Route>
            <Route exact path='/start'>
              <Start/>
            </Route>
          </Switch>
        </Router>
    </DataProvider>
  );
}

export default App;
