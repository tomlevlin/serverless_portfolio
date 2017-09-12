import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModel from '../js/example-work-model';

const myExample = {

      'title': "Work Example 1",
      'href': "http://example.com",
      'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      'image': {
        'desc': "example screenshot of a project involving code",
        'src': "images/example1.png",
        'comment': ""
      }
    };

describe("ExampleWorkModel component", () => {
  let component = shallow(<ExampleWorkModel example={myExample} open={false}/>);
  let openComponent = shallow(<ExampleWorkModel example={myExample} open={true}/>);

  let anchor = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchor.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchor.node.props.href).toEqual(myExample.href);
  });

  it("Should have the modalClass set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  })
});
