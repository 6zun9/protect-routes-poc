import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from './landing.page';
import { AppLayout } from './app.layout';
import { ProtectedRoute } from './protected.route';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path='*' component={() => '404 NOT FOUND'} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> <App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

