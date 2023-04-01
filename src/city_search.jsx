import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Chennai from "./App_chennai";
import Bangalore from "./App_bangalore";
import Mumbai from "./App_Mumbai";

const App = () => {
  const [city, setCity] = useState("");

  const handleSearch = (event) => {
    setCity(event.target.value);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chennai">Chennai</Link>
          </li>
          <li>
            <Link to="/bangalore">Bangalore</Link>
          </li>
          <li>
            <Link to="/mumbai">Mumbai</Link>
          </li>
        </ul>
      </nav>

      <div>
        <input
          type="text"
          placeholder="Search Indian City"
          value={city}
          onChange={handleSearch}
        />

        <Switch>
          <Route exact path="/">
            <h1>Welcome to my SPA!</h1>
          </Route>
          <Route path="/chennai">
            <Chennai city={city} />
          </Route>
          <Route path="/bangalore">
            <Bangalore city={city} />
          </Route>
          <Route path="/mumbai">
            <Mumbai city={city} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
