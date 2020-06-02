export default {
  addItem(prevState = { count: 1 }, action) {
    return prevState.count + action.payload;
  },
};
