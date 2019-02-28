/*
  creates a function that invokes theFunc once it's called n or more times
  in the after function, create a variable to be a counter
  create a new function called theAfter in the after function
  when theAfter is called increment the counter
  if counter === times, call theFunc()
  return the theAfter 
 */
export function after(times, theFunc) {
  let counter = 0;
  const theAfter = () => {
    counter++;
    if (counter === times) {
      theFunc();
    }
  };
  return theAfter;
}

/*
  creates a function that invokes theFunc while it's called n or less times
  create a variable to be a counter
  create a new function called theBefore in the before function
  when theBefore is called increment the counter
  if counter <= times, call theFunc()
  return the theBefore 
 */
export function before(times, theFunc) {
  let counter = 0;
  const theBefore = () => {
    counter++;
    if (counter <= times) {
      theFunc();
    }
  };
  return theBefore;
}

/*
Creates a function that is restricted to invoking theFunc once. 
Repeat calls to the function return the value of the first invocation.
create a variable called firstValue and set it to null
create a new function called theOnce
in theOnce check if firstValue is null, 
    if so call theFunc and assign the returned value into firstValue
return firstValue
return theOnce
 */
export function once(theFunc) {
  let firstValue = null;
  function theOnce() {
    if (!firstValue) {
      firstValue = theFunc(arguments[0], arguments[1]);
    }
    return firstValue;
  }
  return theOnce;
}
