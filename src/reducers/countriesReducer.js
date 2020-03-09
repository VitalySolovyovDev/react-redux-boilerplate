import {
  GET_COUNTRIES_SUCCESS
} from "../constants/actions";

const initialState = [];

export default (store = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case GET_COUNTRIES_SUCCESS:
      return payload;
      break;
    default:
      return store;
  }
};