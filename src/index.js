import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { renderRoutes } from "react-router-config";
import reducers from "./components/reducers";
import Routes from "./components/routes";
import { loadState, saveState } from "./localStorage";
import { throttle } from "lodash";
import "./index.css";

const axiosInstance = axios.create({
  baseURL: "/api",
});

const middlewares = [thunkMiddleware.withExtraArgument(axiosInstance), promise];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistedState = loadState();
const store = createStore(
  reducers,
  // merge INITIAL_STATE with the local storage persistedState
  { ...window.INITIAL_STATE, ...persistedState },
  applyMiddleware(...middlewares)
);

// Save the redux state to localstorage every second
store.subscribe(
  throttle(() => {
    saveState({
      ...store.getState(),
    });
  }, 1000)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
