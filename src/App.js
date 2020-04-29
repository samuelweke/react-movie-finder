import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Popular from "./pages/Movies/Popular/Popular";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/movie" component={Popular} />
            </Switch>
        </Router>
    );
}

export default App;
