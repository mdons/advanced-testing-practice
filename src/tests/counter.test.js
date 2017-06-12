import React from "react";
import {mount } from "enzyme";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../store";
import CounterButtonContainer from "../containers/CounterButtonContainer";
import CounterContainer from "../containers/CounterContainer";
let wrapper = null;

beforeAll(()=>{
  wrapper = mount(<Provider store={store}><div><CounterButtonContainer /><CounterContainer /></div></Provider>);
})
beforeEach(() => {
  store.getState().currentCount = 0;
});

describe("CounterButtonContainer", () => {
  it("Increase button increases the currentCount to 4 and shows in Counter", () => {
    var increaseButton = wrapper.find("button").at(0);
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    var div = wrapper.find("div").at(2);
    expect(div.text()).toBe("Counter: 4");
  });
   it("Decrease button decreases the currentCount to -4 and shows in Counter", () => {
    var increaseButton = wrapper.find("button").at(1);
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    increaseButton.simulate("click");
    var div = wrapper.find("div").at(2);
    expect(div.text()).toBe("Counter: -4");
  });
});