import React from "react";
import {mount } from "enzyme";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../../store";
import SpecialTextBoxContainer from "./";
let wrapper = null;
beforeAll(()=>{
  wrapper = mount(<Provider store={store}><SpecialTextBoxContainer /></Provider>);
})
describe("Special Text Box", () => {
  it("changes specialText to 'hello'", () => {
    var textBox = wrapper.find("input").at(0);
    textBox.simulate('change', {target: {value: "hello"}});
    expect(store.getState().specialText).toBe("hello");
  });
  it("changes specialText to 'world'", () => {
    var textBox = wrapper.find("input").at(0);
    textBox.simulate('change', {target: {value: "world"}});
    expect(store.getState().specialText).toBe("world");
  });
});