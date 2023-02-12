import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./appReducer/reducer";

export const store = legacy_createStore(AppReducer, applyMiddleware(thunk));
