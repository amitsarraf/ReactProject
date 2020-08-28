import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './component/Home'
import RestaurantCreate from './component/RestaurantCreate'
import RestaurantDetail from './component/RestaurantDetail'
import RestaurantList from './component/RestaurantList'
import RestaurantSearch from './component/RestaurantSearch'
import RestaurantUpdate from './component/RestaurantUpdate'
import Login from './component/Login'
import Logout from './component/Logout'
import Protective from './component/Protective'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login"
        render={props=>(
          <Login {...props}/>
        )}        
        >
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        
        <Protective exact path ="/" component={Home}/>
        <Protective exact path ="/List" component={RestaurantList}/>
        <Protective exact path ="/Create" component={RestaurantCreate}/>
        <Protective exact path ="/Detail" component={RestaurantDetail}/>
        <Protective exact path ="/Search" component={RestaurantSearch}/>
        <Protective exact path ="/Update/:id" component={RestaurantUpdate}/>
        <Protective exact path ="/Detail" component={RestaurantDetail}/>
      </Router>
    </div>
  );
}

export default App;
