// base case is amount = 0.
// if amount is over .25 add a quarters
// else if amount is over .1 add a dimes
// else if amount is over .05 add nickles
// else add pennies

// 4.99 / .25 = quarter amounts
// 4.99 % .25 = remainder
// remainder / .1
// remainder modulo .1 = remainder

const counter = (amount) => {
  const quarters = amount / .25;
  const dimes = amount / .10;
  const nickles = amount / .05;
  const pennies = amount / .01;
  if(amount === 0) {
    return amount;
  }else {
    if(amount > .26){
      // quarters = amount / .25;
      console.log("this is quarters" + quarters);
      return counter(amount - (Math.floor(quarters) * .25));
      }
        
     else if ( amount > .11) {
      // dimes = amount / .1;
      console.log("this is dimes" + dimes);
      return counter(amount - (Math.floor(dimes) * .10));
    } 
    else if (amount > .06){
      // nickles = amount / .05;
      console.log("this is nickles" + nickles)
      return counter(amount - (Math.floor(nickles) * .05));
      
    }
    else {
     } // pennies = amount / .01;
      console.log("This is pennies" + pennies);
      return `you have  ${Math.floor(quarters)},${Math.floor(dimes)},${Math.floor(nickles)},${Math.floor(pennies)}`
      
    } 
  }
 

  

export default counter
