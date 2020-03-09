export default store => next => action => {
  typeof action !== "function" && console.log("---", "dispatching:", action);
  next(action);
};
