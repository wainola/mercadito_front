import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import dotenv from 'dotenv'
import Api from './api/api'
import { refreshSession } from './actions/index'


// Styles
import 'semantic-ui-css/semantic.min.css';
// Routes
import App from './routes'

dotenv.config({
    silent: process.env.NODE_ENV !== 'development'
});

console.log(process.env)

const middlewares = [reduxThunk, logger]
const enhancers = applyMiddleware(...middlewares)
const store = createStore(rootReducer, composeWithDevTools(enhancers))

if (localStorage.user) {
    const user = JSON.parse(localStorage.user)
    store.dispatch(
      refreshSession({
        data: {
          ...user,
        },
      }),
    );
  
    Api.setAuthorizationHeader(user.token);
  }

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <Route component={App}/>
    </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
