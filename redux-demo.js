const redux = reqired("redux");


//Always should have two parameters as state and action
const counterReducer = (state, action) => {
 //Should always return new state   
 //will replace the existing state
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
