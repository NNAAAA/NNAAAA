import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'


function App() {
  return (
    <div id='background'>
      <Router>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
          <Route exact path='/start'>
            <Start/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
