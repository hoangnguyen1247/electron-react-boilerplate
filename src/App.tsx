import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { routes } from "./routes";

export default function App() {

    return (
        <Router>
            <Switch>
                {(Array.isArray(routes) && routes.length > 0) &&
                    routes.map((route, index) => {
                        return (
                            <Route path={route.path} component={route.component} key={index}/>
                        );
                    })}
            </Switch>
        </Router>
    );
}
