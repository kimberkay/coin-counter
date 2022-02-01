
// This function stores our state.

// export const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction = state => state) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state, 
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

// export const changeState = (prop1, prop2) => {
//   return (value1, value2) => {
//     return (state) => ({
//       ...state,  
//       [prop1] : (state[prop1] || 0) + value1,
//       [prop2] : (state[prop2] || 0) + value2
//     })
//   }
// }

// We create four functions using our function factory. We could easily create many more.

function euler(number) {
  counter = 0
  for (let i = 1; i < number; i++) {
    if ((i % 3 == 0) || (i % 5 == 0)) {
      counter += i;
    }
  }
  return counter;
}

const euler = (num) => {
  if (num <= 0) {
    return num;
  } else if ((num % 3 == 0) || (num % 5 == 0)) {
    return num + euler(num - 1);
  } else {
    return euler(num - 1);
  }
};

const incrementCounter = (counter) => {
  // This is the termination condition.
  if (isNaN(counter)) {
    return;
  }
  if (counter >= 3) {
    return counter;
  } else {
    console.log(counter);
    return incrementCounter(counter + 1);
  }
}