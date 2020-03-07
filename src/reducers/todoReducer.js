import {
  ADD_TODO,
  REMOVE_TODO
} from "../constants/actions";

const initialState = {};

export default (store = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case ADD_TODO:
      return {...store};
      break;
    case REMOVE_TODO:
      return {...store};
      break;
    default:
      return {...store};
      break;
  }
};