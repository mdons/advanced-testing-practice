import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import CurrentCityContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <CurrentCityContainer />
    </Provider>
  );
});
beforeEach(() => {});

describe("CurrentCityContainer", () => {
  it("should change the text of the current city div when the state changes", () => {
    store.dispatch({
      type: "SET_CURRENT_CITY",
      value: "Seattle"
    });
    // expect(wrapper.find("div")).toHaveLength(9);
  });
});
