import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './static/style.css';
import './static/custom.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './pages/home'
import Game from './pages/game'


import { logger } from 'redux-logger';
import reducer from './redux/reducers/index';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);




function App() {
  return (
    <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/game" component={Game} />
          </div>
        </Router>
    </Provider>
  );
}

export default App;
