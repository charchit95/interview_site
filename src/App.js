import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Homepage from "./components/Homepage";

function App() {



  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/add">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;