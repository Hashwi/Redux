const redux = require("redux");

//Always should have two parameters as state and action
const counterReducer = (state = { counter: 0 }, action) => {
  //Should always return new state
  //will replace the existing state
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    }
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter -1,
    }
  }
  return state
};

const store = redux.createStore(counterReducer);

// console.log(store.getState())

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
