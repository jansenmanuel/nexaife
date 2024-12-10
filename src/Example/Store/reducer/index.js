import { combineReducers } from "@reduxjs/toolkit";
import properties from "./properties";

const reducers = combineReducers({
  properties: properties
})

export default reducers;