import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import CityDropDownContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <CityDropDownContainer />
    </Provider>
  );
});
beforeEach(() => {});

describe("CityDropDownContainer", () => {
  it("should change the state currentCity to whatever is selected in the dropdown", () => {
    var cityDropDown = wrapper.find("select").at(0);
    cityDropDown.simulate("change", { target: { value: "Austin" } });
    expect(store.getState().currentCity).toBe("Austin");
  });
});
