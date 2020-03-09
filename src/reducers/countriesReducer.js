import { List } from "immutable";
import {
  GET_COUNTRIES_SUCCESS,
  RESET_COUNTRIES
} from "../constants/actions";

const initialState = List();

export default (store = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_COUNTRIES_SUCCESS:
      return List(payload);
    case RESET_COUNTRIES:
      return List();
    default:
      return store;
  }
};