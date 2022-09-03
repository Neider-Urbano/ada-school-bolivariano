import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducers from "../reducer/reducer";

let store = legacy_createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;