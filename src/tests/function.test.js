
import {after,once} from "../services/functions";
import {add} from "../services/calculations";


//after should only call myFunc after it is called 4 times
describe("after", () => {
  it("should only call myFunc after it is called 4 times", () => {
    const myFunc = jest.fn();
    let myAfter = after(4, myFunc);
    myAfter();
    myAfter();
    myAfter();
    myAfter();
    expect(myFunc.mock.calls.length).toBe(1);
  });
});

//before should only call myFunc 4 times at most

//once should only call add once
//create a test that uses once on add 
//call the returned function with 4 and 5 to result in 9
//all subsequent calls should result in 9 no matter what arguments are provided