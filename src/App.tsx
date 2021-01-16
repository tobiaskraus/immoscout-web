import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { List } from "./pages/List";
import { Table } from "./pages/Table";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/list" component={List} />
                <Route exact path="/table" component={Table} />

                <Route path="*">
                    <Redirect to={{ pathname: "/list" }} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
