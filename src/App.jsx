import './App.css'
import Home from './components/Home';
import Order from "./components/Order"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <div>
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
           <Route path="/order">
            <Order/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
    
  )
}


export default App
 