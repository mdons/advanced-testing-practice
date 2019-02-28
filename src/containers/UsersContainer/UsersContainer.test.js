import React from "react";
import { mount } from "enzyme";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../../store";
import UsersContainer from "./";
let wrapper = null;

beforeAll(() => {
  wrapper = mount(
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  );
});
beforeEach(() => {});

describe("UsersContainer", () => {
  it("should render an li for each user", () => {
    store.dispatch({
      type: "ADD_USER",
      value: {
        id: 8,
        first_name: "santa",
        last_name: "claus",
        address: "north pole",
        phone: 15555555555,
        occupation: "saint",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      }
    });
    expect(wrapper.find("li")).toHaveLength(9);
  });
});
