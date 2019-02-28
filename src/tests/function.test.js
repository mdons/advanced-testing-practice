import { after, before, once } from "../services/functions";
import { add } from "../services/calculations";

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
describe("before", () => {
  it("should only call myFunc 4 times at most", () => {
    const myFunc = jest.fn();
    let myBefore = before(4, myFunc);
    myBefore();
    myBefore();
    myBefore();
    myBefore();
    myBefore();
    expect(myFunc.mock.calls.length).toBe(4);
  });
});

//once should only call add once
//create a test that uses once on add
//call the returned function with 4 and 5 to result in 9
//all subsequent calls should result in 9 no matter what arguments are provided

describe("once", () => {
  it("should only call add once", () => {
    const myOnce = once(add);
    const firstResult = myOnce(4, 5);
    const secondResult = myOnce(10, 20);
    expect(secondResult).toBe(9);
  });
});
