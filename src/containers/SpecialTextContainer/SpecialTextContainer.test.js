import React from "react";
import {mount } from "enzyme";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "../../store";
import SpecialTextContainer from "./";

describe("Special Text Dispaly", () => {
  it("Shows specialText state", () => {
    const wrapper = mount(<Provider store={store}><SpecialTextContainer /></Provider>);
    
    store.dispatch({
      type:"SET_SPECIAL_TEXT",
      value:"hello world"
    });
    var div = wrapper.find("div").at(0);
    expect(div.text()).toBe("Special Text: hello world");

  });
});