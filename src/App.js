import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom";


const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
