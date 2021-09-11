import React from "react";
import StreamList from './Components/StreamList';
import StreamCreate from './Components/StreamCreate';
import StreamEdit from './Components/StreamEdit';
import StreamDelete from './Components/StreamDelete';
import StreamShow from './Components/StreamShow';
import AppHeader from './Components/AppHeader';
import AppFooter from './Components/AppFooter';
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
      <AppHeader />
          <div>
          <Switch >
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new"  component={StreamCreate} />
            <Route path="/streams/edit/:id"  component={StreamEdit} />
            <Route path="/streams/delete/:id"  component={StreamDelete} />
            <Route path="/streams/:id"  component={StreamShow} />
          </Switch>
          </div>
        </Router>
      <AppFooter />
    </div>
  );
}

export default App;
