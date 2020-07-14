import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// storage
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';

//
import { configureStore } from './store';

const store = configureStore();
const persistor = persistStore(store);
ReactDOM.render(

  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      persistor={persistor}
    >
      <App />
    </PersistGate>

  </Provider>,

  document.getElementById('root'),
);

// npm init -y
// npm i --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/cli
// npm i react react-dom
// npm i --save-dev webpack webpack-cli webpack-dev-server style-loader babel-loader css-loader
// npm i --save-dev react-hot-loader
//
// npm i redux react-redux
// npm i redux-persist
// npm install redux-thunk redux-devtools-extension @babel/runtime
// npm install --save-dev @babel/plugin-transform-runtime
// npm install reselect

// npm i styled-components

// npm install --save-dev mocha chai
// npm install --save-dev @babel/register

// --FOR TESTING ASYNC

// npm install --save-dev sinon node-fetch fetch-mock
