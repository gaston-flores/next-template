import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar.component";

describe("<Navbar />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.is("nav")).toBe(true);
  });
});
