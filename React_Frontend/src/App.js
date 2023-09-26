import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListBikeComponent from './components/ListBikeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateBikeComponent from './components/CreateBikeComponent'; 
import ViewBikeComponent from './components/ViewBikeComponent';
import SignInPage from './components/entry/login';
import SignUpPage from './components/entry/signup';

function App() {
  
  
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {SignInPage}></Route>
                          <Route path = "/home" exact component = {ListBikeComponent}></Route>
                          <Route path = "/view-bike/bikes" exact component = {ListBikeComponent}></Route>
                          <Route path = "/bikes" component = {ListBikeComponent}></Route>
                          <Route path = "/add-bike/:id" component = {CreateBikeComponent}></Route>
                          <Route path = "/view-bike/:id" component = {ViewBikeComponent}></Route>
                          <Route path = "/signup" component = {SignUpPage}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;


