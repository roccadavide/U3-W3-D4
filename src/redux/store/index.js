import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import setJobs from "../reducers/setJobs";

const rootReducer = combineReducers({
  addRemove: mainReducer,
  setJobs: setJobs,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
