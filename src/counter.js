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

  if(amount === 0) {
    return amount;
  }else{
    if(amount > .26){
      const quarters = amount / .25;
      console.log(quarters);
      return counter(amount - (amount * .25));
      }
        
     else if ( amount > .11) {
      const dimes = amount / .1;
      console.log(dimes);
      return counter(amount - (amount * .10));
    } 
    else if (amount > .06){
      const nickles = amount / .05;
      console.log(nickles)
      return counter(amount - (nickles * .05));
      
    }
    else {
      const pennies = amount / .01;
      console.log(pennies);
      return counter(amount - (pennies * .01));
      
    } 
  }
 }

  

export default counter
