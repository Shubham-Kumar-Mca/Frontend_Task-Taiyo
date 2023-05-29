import { legacy_createStore } from "redux";
import { contactReducer } from "./reducer";


export const store = legacy_createStore(contactReducer)