import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import QuoteHome from './components/QuoteHome';
import ShowQuote from './components/ShowQuote';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Route, Switch } from 'react-router';
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

const Root = () => {
  return (
      <Provider store={store}>
          <Router>
            <Switch>
                <Route exact path="/" component={QuoteHome}/>
                <Route exact path="/showquote" component={ShowQuote} />
          </Switch>
          </Router>
      </Provider>
  );
};

export default Root;
