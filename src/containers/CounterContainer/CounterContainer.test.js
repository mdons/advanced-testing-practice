import React from "react";
import {mount } from "enzyme";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../../store";
import CounterContainer from "./";

describe("CounterCountainer", () => {
  it("shows the currentCount", () => {
    const wrapper = mount(<Provider store={store}><CounterContainer /></Provider>);
    
    store.dispatch({
      type:"INCREASE_COUNTER"
    });
    var div = wrapper.find("div").at(0);
    expect(div.text()).toBe("Counter: 1");

    store.dispatch({
      type:"INCREASE_COUNTER"
    });
    var div = wrapper.find("div").at(0);
    expect(div.text()).toBe("Counter: 2");

    store.dispatch({
      type:"INCREASE_COUNTER"
    });
    var div = wrapper.find("div").at(0);
    expect(div.text()).toBe("Counter: 3");

    store.dispatch({
      type:"DECREASE_COUNTER"
    });
    var div = wrapper.find("div").at(0);
    expect(div.text()).toBe("Counter: 2");


  });
});