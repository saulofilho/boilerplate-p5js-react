import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Example from './pages/Torus';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/example" component={Example} /> */}
      </Switch>
    </BrowserRouter>
  );
}