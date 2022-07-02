import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./setup/Components/Navbar";
import Home from "./setup/Pages/Home";
import About from "./setup/Pages/About";
import SingleCock from "./setup/Pages/SingleCock";
import Error from "./setup/Pages/Error";

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/about'>
                <About/>
            </Route>
            <Route path='/cocktail/:id'>
                <SingleCock/>
            </Route>
            <Route path='*'>
                <Error/>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
