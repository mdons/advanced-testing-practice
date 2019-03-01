import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import ChangeTemperatureContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <ChangeTemperatureContainer />
    </Provider>
  );
});
beforeEach(() => {});

describe("ChangeTemperatureContainer", () => {
  it("should change the state when the temperature box changes", () => {
    var tempBox = wrapper.find("input").at(0);
    tempBox.simulate("change", { target: { value: "12" } });
    expect(store.getState().currentTemp).toBe("12");
  });
});
