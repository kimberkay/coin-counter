
function euler(number) {
  let counter = 0
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

// const incrementCounter = (counter) => {
//   // This is the termination condition.
//   if (isNaN(counter)) {
//     return;
//   }
//   if (counter >= 3) {
//     return counter;
//   } else {
//     console.log(counter);
//     return incrementCounter(counter + 1);
//   }
// }

function fibonacciEven(num){
  let fib = [1,2];
  let sum = 0
  while(fib[fib.length-1]<num) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  fib.forEach(function(element) { 
    if(element % 2 == 0){
      sum += element;
    }
  });
  return sum; 
}