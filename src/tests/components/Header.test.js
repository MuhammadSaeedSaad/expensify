import { shallow } from "enzyme";
import Header from "../../components/Header";
import React from "react";

test("should test the Header as snapshot testing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
