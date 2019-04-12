import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './views/Home';
// import Article from './views/Article';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/article" component={Home} />
      </Switch>
    );
  }
}

export default App;
